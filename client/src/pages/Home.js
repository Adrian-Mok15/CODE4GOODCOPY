import React from 'react'
import jream from "./jreamlogo.png"
import Footer from '../components/navigation/Footer'
import { Form, Input, Button, DatePicker,InputNumber } from 'antd';
import './Home.css'
const Home = () => {

  const onFinish = (values) => {
    alert("Thank you for contacting us! We'll get back to you shortly.")
  }
  return (
    <div>
      <img src={jream} alt="jream" width= "100%"></img>
      <h1 id="about" style={{ marginTop: "10%" }}>About Us</h1>
      <p style={{ width: "50%", margin: "auto", fontSize: '18px' }}>
        Dealing with the challenges of today requires problem-solvers who bring different perspectives and are willing to take risks. The Jream Foundation, Inc. emerged out of a pursuit to inspire and support the community, and a desire for actions to speak louder than words. Established in 2020, we’re an organization driven by progressive ideas, bold actions, and a strong foundation of support. Contact us to learn more and get involved. Here at Jream Foundation, we see the value in everyone. We want to be a catalyst for positive change, and since our beginnings in 2020, we’ve been driven by the same ideas we initially founded our Nonprofit Organization upon support, empowerment, and progress. Learn more about our mission, our vision, and how we go about making the changes we want to see.
      </p>

      <Form
                name="event"
                onFinish={onFinish}
                
            >
              <div className ="myForm">

             
            <h1 id="contactform" style={{ marginTop: "16%" }}>Contact Us</h1>
                <Form.Item
                    name= 'Email'
                    label='Email'
                    rules={[{required: true},]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name= 'Name'
                    label='Name'
                    rules={[{required: true},]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name= 'Subject'
                    label='Subject'
                    rules={[{required: true},]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name= 'Message'
                    label='Message'
                    rules={[{required: true},]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>  

                    
                </Form.Item>
                </div>
            </Form>
{/* 
      
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", height: "400px", marginBottom: "20px"}}>
        <input style={{width: "25%", margin: "auto", background: "#f7e8cc", padding: "10px", borderRadius: "10px"}} placeholder='email'></input>
        <input style={{width: "25%", margin: "auto", background: "#f7e8cc", padding: "10px", borderRadius: "10px"}} placeholder='name'></input>
        <input style={{width: "25%", margin: "auto", background: "#f7e8cc", padding: "10px", borderRadius: "10px"}} placeholder='subject'></input>
        <textarea style={{width: "40%", margin: "auto", background: "#f7e8cc", padding: "10px", borderRadius: "10px"}}placeholder='message'></textarea>
      </div>
      <button style={{borderRadius: "5px", background: "#f7e8cc", padding: "10px", width: "5%", marginLeft: "36%", marginBottom: "2%"}}>Submit</button> */}
      <Footer />
    </div>
  )
}

export default Home