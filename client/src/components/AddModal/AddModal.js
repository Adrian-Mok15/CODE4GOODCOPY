import {  useState, React  } from 'react';
import { Modal, Button, Form, Input, DatePicker, InputNumber } from 'antd';
import AddEvent from '../AddEvent/AddEvent'
import './AddModal.css'
const AddModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (value) => {
    console.log(value)
    setIsModalOpen(false);
  };

  return (
    <>
      <Button id='addButton' onClick={showModal}>
        Add Event +
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
        >
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
      </Modal>
    </>
  );
};

export default AddModal