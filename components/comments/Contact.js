
import { useState, useEffect, useContext } from "react";
import { Row, Col, Typography, Form, Input, Button, Divider } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const { Title, Text, Paragraph } = Typography;

const ContactForm = () => {
              //state
const [loading, setLoading] = useState(false);
  // context
  // hooks
  const router = useRouter();

 const [form] = Form.useForm();
   const onFinish =  async(values) => {
              setLoading(true);
    try {
  const {data} = await axios.post("/contact", values);
  if(data?.error) {
     toast.error(data?.error);
     setLoading(false);
  } else{
    toast.success("Your message has been sent");
    form.resetFields();
    setLoading(false);
  }
      
    } catch (err) {
      console.log(err);
      toast.error("Email failed. Try again.");
      setLoading(false);
    }
   };

  return (
    <Row>
      <Col  offset={1} style={{ paddingTop: "10%" }}>
        <h3> Please Contact Me.</h3>


        <Form
        form={form}
         name="normal_login"
         className="login-form"
          onFinish={onFinish}
          
        >
          <Form.Item
            name="name"
            rules={[
              {
              required: true, message:'Please enter your name'}]}
            hasFeedback
          >
            <Input className="input-form  contact-input" prefix={<MailOutlined />} placeholder="Your name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!"}]}
            hasFeedback
          >
            <Input
            className="input-form"
              prefix={<LockOutlined />}
              placeholder="Your email"
            />
          </Form.Item>


          <Form.Item
            name="message"
            rules={[
              {
              required: true, message:'Please enter your message'}]}
            hasFeedback
          >
            <Input.TextArea  rows={5} prefix={<MailOutlined />} placeholder="write your message here..." />
          </Form.Item>

         

          <Form.Item>
            <Button className="input-form-btn" type="primary" htmlType="submit" loading={loading}>
             Submit
            </Button>
         
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;
