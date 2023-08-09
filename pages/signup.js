import { useState, useEffect, useContext } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import toast from "react-hot-toast";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const { Title } = Typography;

const SignUp = () => {
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
  //process.env.NEXT_PUBLIC_API

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/signup`, values);
      if(data?.error) {
         toast.error(data.error)
         setLoading(false);
      }else {
        setAuth(data);
        localStorage.setItem("auth",JSON.stringify(data));
        console.log("SignUp Response ==>", data);
        toast.success("Successfully signed up");
        setLoading(false);
        //redirect user
        router.push("/admin");
      }
    console.log("signUp  data", data);

    } catch (err) {
    toast.error("Signup failed. Try again.");
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <Row>
      <Col span={12} offset={4} style={{ paddingTop: "10%" }}>
        <div className="design-line-container">
        <div  className="design-line"/><Title>SignUp</Title> <div  className="design-line"/>
        </div>
        <div className="signup-form">
        <Form onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
            hasFeedback
          >
            <Input
            className="input-form"
            prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
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
            <Input
          className="input-form"  
          prefix={<MailOutlined />} placeholder="Email" />
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
            className="input-form"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password className="input-form"
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button className="input-form-btn" type="primary" htmlType="submit" loading={loading}>
              Sign Up
            </Button>
           
            <Link href="/signin">
              <a className="signup-link">Login Now</a>
            </Link>
          </Form.Item>
        </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
