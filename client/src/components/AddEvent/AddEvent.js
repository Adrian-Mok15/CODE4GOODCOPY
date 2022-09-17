import React from 'react';
import { Form, Input, Button, DatePicker,InputNumber } from 'antd';
import './AddEvent.css'

const AddEvent = props => {

    const onFinish = (values) => {
    }

    return (
        <div class="add-event">

            <Form
                name="event"
                onFinish={onFinish}
            >
                <Form.Item
                    name= 'Event Name'
                    label='Event Name'
                    rules={[{required: true},]}
                >

                    <Input/>
                </Form.Item>

                <Form.Item
                    name= 'Event Description'
                    label='Event Description'
                    rules={[{required: true},]}
                >
                    <Input placeholder='Event Description' />
                </Form.Item>

                <Form.Item
                    name= 'Event Date'
                    label='Event Date'
                    rules={[{required: true},]}
                    
                >
                    <DatePicker showTime />
                </Form.Item>

                <Form.Item
                    name= 'Event Location'
                    label='Event Location'
                    rules={[{required: true},]}
                >
                    <Input placeholder='Event Location' />
                </Form.Item>

                <Form.Item
                    name= 'Max Attendees'
                    label='Max Attendees'
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        Create Event
                    </Button>  
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddEvent;
