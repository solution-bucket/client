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
    <div style={{ padding: "20px", marginTop:"11%" }}>
    <Row>
      <Col span={12} offset={6} style={{ paddingTop: "10%" }}>
        <Title>Sign Up</Title>

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
            <Input prefix={<UserOutlined />} placeholder="Name" />
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
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button size="large" style={{borderRadius:"20px"}} type="primary" htmlType="submit" loading={loading}>
              Sign Up
            </Button>
            <br /> Or{" "}
            <Link href="/signin">
              <a>Login!</a>
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    </div>
  );
};

export default SignUp;
