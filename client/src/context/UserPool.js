import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-1_h9a5qusJW",
    ClientId: "1p9t1g6428q8dbfpks7iv29rl3"
}

export default new CognitoUserPool(poolData)