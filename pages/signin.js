
import { useState, useEffect, useContext } from "react";
import { Row, Col, Typography, Form, Input, Button} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import {AuthContext} from "../context/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const { Title, Text, Paragraph } = Typography;

const SignIn = () => {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // hooks
  const router = useRouter();

  useEffect(()=> {
    if(auth?.token) {
       router.push("/")
    }
  },[auth])
  // state
  const [loading, setLoading] = useState(false);

 // const [form] = Form.useForm();
   const onFinish =  async(values) => {
     console.log("Success:", values);
    try {
      setLoading(true);
      const { data } = await axios.post(`/signin`, values);
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        // save user and token response in context, localstorage then redirect user to dashboard
        // setAuth({ user: data.user, token: data.token });
         setAuth(data);
         localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Successfully logged in");
        setLoading(false);
        //form.resetFields();

        if (data.user?.role === "Admin") {
         router.push("/admin");
        } else if (data.user?.role === "Author") {
          router.push("/author");
        } else {
          router.push("/subscriber");
        }
      }
    } catch (err) {
      toast.error("SignIn failed. Try again.");
      console.log(err);
      setLoading(false);
    }
   };

  return (
    <div style={{ padding: "20px", marginTop:"11%" }}>
      
    <Row>
      <Col span={12} offset={6} style={{ paddingTop: "10%" }}>
        <Title>Sign In</Title>
        <Form
       // form={form}
          initialValues={{
            email: "",
            password: "",
          }}
          onFinish={onFinish}
          
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
            hasFeedback
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
                min: 6,
                max: 24,
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Link href="/forgot-password">
              <a>Forgot password</a>
            </Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" style={{borderRadius:"20px"}} htmlType="submit" loading={loading}>
              Sign In
            </Button>
            <br /> Or{" "}
            <Link href="/signup">
              <a>Register now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    </div>
  );
};

export default SignIn;
