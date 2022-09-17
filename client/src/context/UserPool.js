import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_AWS_UserPoolId,
    ClientId: process.env.REACT_APP_AWS_ClientId
}

export default new CognitoUserPool(poolData)