import React, { useState, useContext, useEffect } from "react";
import { Menu, Button } from "antd";
import {
  PushpinOutlined,
  CameraOutlined,
  FileTextOutlined,
  CommentOutlined,
  UserSwitchOutlined,
  SettingOutlined,
  BgColorsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWindowWidth } from "@react-hook/window-size";
import {AuthContext} from "../../context/auth";

const { Sider } = Layout;

const { SubMenu } = Menu;

const SubscriberNav = () => {
  // context
  // hooks
  const router = useRouter();
  // state
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  const [auth, setAuth] = useContext(AuthContext);

  

  const onlyWidth = useWindowWidth();
  useEffect(()=> {
    if(onlyWidth <800) {
        setCollapsed(true);
    }else if(onlyWidth > 800){
        setCollapsed(false)
    } 
  },[onlyWidth < 800])
  useEffect(()=> {
    process.browser && setCurrent(window.location.pathname);
  },[ process.browser && window.location.pathname])
  
  const activeName = (name) => `nav-link ${current === name && "active"}`;
  

 
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      style={{
        marginTop: 50,
      }}
    >
      <Menu
        // defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1", "6", "9", "14"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="19" icon={<SettingOutlined />}>
          <Link href="/subscriber">
            <a className={activeName("/subscriber")}>My Courses</a>
          </Link>
        </Menu.Item>
       
        {/* <Menu.Item key="12" icon={<CommentOutlined />}>
          <Link href="/subscriber/comments">
            <a className={activeName("/subscriber/comments")}>Comments</a>
          </Link>
        </Menu.Item> */}

        <Menu.Item key="17" icon={<UserOutlined />}>
        <Link href={`/subscriber/${auth?.user?._id}`}>
            <a className={activeName(`/subscriber/${auth?.user?._id}`)}>My Profile</a>
          </Link>
        </Menu.Item>
       
      </Menu>
    </Sider>
  );
};

export default SubscriberNav;
