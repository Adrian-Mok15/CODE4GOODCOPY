import React from 'react';
import { Form, Input, Button } from 'antd';
import './SignIn.css'
const SignIn = props => {

    // const onFinish = (values) => {
    // }

    const onFinish = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object
    
        console.log(inputObject);
    };

    return (
        <div class="sign-up">

            <Form
                name="login"
                onFinish={onFinish}
            >
                <Form.Item
                    label= 'Username'
                    name='Username'
                    rules={[{required: true,},]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label = 'Password'
                    name="Password"
                    rules={[{required: true,},]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    
                <Button type="primary" htmlType="submit" >
                    Log in
                    </Button> 
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignIn;
