import React from 'react';
import { Form, Input, Button, DatePicker,InputNumber } from 'antd';

const AddEvent = props => {

    const onFinish = (values) => {
    }

    return (
        <>

            <Form
                name="login"
                onFinish={onFinish}
            >
                <Form.Item
                    name= 'Event Name'
                    rules={[{required: true},]}
                >

                    <Input/>
                </Form.Item>

                <Form.Item
                    name= 'Event Description'
                    rules={[{required: true},]}
                >
                    <Input placeholder='Event Description' />
                </Form.Item>

                <Form.Item
                    name= 'Event Date'
                    rules={[{required: true},]}
                    
                >
                    <DatePicker showTime />
                </Form.Item>

                <Form.Item
                    name= 'Event Location'
                    rules={[{required: true},]}
                >
                    <Input placeholder='Event Location' />
                </Form.Item>

                <Form.Item
                    name= 'Max Attendees'
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        Log in
                    </Button>  
                </Form.Item>
            </Form>
        </>
    )
}

export default AddEvent;
