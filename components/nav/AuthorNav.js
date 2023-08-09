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

const AuthorNav = () => {
  // context
  // hooks
  const router = useRouter();
  // state
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  const [auth, setAuth]= useContext(AuthContext);
  

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
          <Link href="/author">
            <a className={activeName("/author")}>Dashboard</a>
          </Link>
        </Menu.Item>
        {/* posts */}
        <SubMenu key="1" icon={<PushpinOutlined />} title="Posts">
          <Menu.Item key="2">
            <Link href="/author/posts">
              <a className={activeName("/author/posts")}>All Posts</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/author/posts/new">
              <a className={activeName("/author/posts/new")}>Add New</a>
            </Link>
          </Menu.Item>
        
        </SubMenu>
        {/* media */}
        <SubMenu key="6" icon={<CameraOutlined />} title="Media">
          <Menu.Item key="7">
            <Link href="/author/media/library">
              <a className={activeName("/author/media/library")}>Library</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link href="/author/media/new">
              <a className={activeName("/author/media/new")}>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="12" icon={<CommentOutlined />}>
          <Link href="/author/comments">
            <a className={activeName("/author/comments")}>Comments</a>
          </Link>
        </Menu.Item>

       
        <Menu.Item key="17" icon={<UserOutlined />}>
          <Link
            href={`/author/${auth?.user?._id}`}
          >
            <a className={activeName(`/author/${auth?.user?._id}`)}>Profile</a>
          </Link>
        </Menu.Item>
       
      </Menu>
    </Sider>
  );
};

export default AuthorNav;
