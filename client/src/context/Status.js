import React, {useState, useContext, useEffect} from "react";
import { AccountContext } from './Account';
// import CognitoIdentityServiceProvider from 'aws'

const Status = () => {
    const [userEmail, setStatus] = useState('guest');
    const {getSession} = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                console.log(session)
                const userType = session.email
                // const userType = session.accessToken.payload["cognito:groups"][0]
                // console.log(userType);
                setStatus(userType);
                // refreshSession();
            })
    }, []);


    return <div>
        <h1>Hello {userEmail}, </h1>
        </div>
};

export default Status;