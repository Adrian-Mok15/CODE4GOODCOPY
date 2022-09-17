import React, { createContext, useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from './UserPool';



const AccountContext = createContext();


const Account = (props) => {
    const [userSub, setUserName] = useState("null");

    useEffect(() => {
        getSession()
            .then(session => {
                setUserName(session.sub);
            })
            .catch(err => {
                console.error("Not login", err);
            })
      }, []);

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession(async (err, session) => {
                    if (err) {
                        reject();
                    } else {
                        const attributes = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    const result = {};

                                    for (let attribute of attributes) {
                                        const {Name, Value} = attribute;
                                        result[Name] = Value;
                                    }

                                    resolve(result);
                                }
                            })
                        })
                        
                        resolve({user, ...session, ...attributes});
                    }
                })
            } else {
                reject();
            }
        })
    };


    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username,
                Pool,
            });

            const authDetails = new AuthenticationDetails({
                Username,
                Password,
            });

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("onSuccess: ", data);
                    setUserName(data.accessToken.payload.sub);
                    resolve(data);
                },
                onFailure: (err) => {
                    console.log("onFailure: ", err);
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data);
                    resolve(data);
                },
            });
        })
    };

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user){
            user.signOut();
            console.log("Logged Out");
        }
    };


    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout, userSub }}>
            {props.children}
        </AccountContext.Provider>
    )
}

export {Account, AccountContext};