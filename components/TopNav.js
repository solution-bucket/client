import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import {
  UserAddOutlined,
  SettingOutlined,
  CloudTwoTone,
  DatabaseOutlined,
  AppstoreOutlined,
  MailOutlined,
  LoginOutlined,
  CodeSandboxOutlined,
  UserOutlined,
  SearchOutlined,
  HomeOutlined
} from "@ant-design/icons";
import Clock, {clock} from "../clock";
import ToggleTheme from "./TogleTheme";
import Link from "next/link";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const { SubMenu } = Menu;

const TopNav = () => {
  // context
  const [auth, setAuth] = useContext(AuthContext);

  // hooks
  const router = useRouter();
  // state
  const [current, setCurrent] = useState("mail");

  const signout = async () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Successfully logged out");
    router.push("/signin");
  };

  const roleBasedLink = ()=>{
    if (auth?.user?.role === "Admin") {
      return "/admin";
     } else {
       return "/subscriber";
     }
    }
    
  const signOut =()=> {
    //remove form localStorage
    localStorage.removeItem("auth");
    //remove from context
      setAuth({
        user: null,
        token:""
      });
      //redirect user
      router.push("/signin");
  }
  return (
    <>
      <Menu
        onClick={(e) => setCurrent(e.key)}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
          height: '60px'
        }}
      >
        <Menu.Item key="mail" icon={< HomeOutlined/>}>
          <Link href="/">
            {/* <a>Builder</a> */}
           HOME
          </Link>
        </Menu.Item>
        
        <Menu.Item >
        </Menu.Item>
        <Menu.Item key="about" icon={< UserAddOutlined/>}>
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="posts" icon={<DatabaseOutlined />}>
          <Link href="/posts">
            <a>View Tutorials</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search-courses" icon={<SearchOutlined/>}>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="courses" icon={<DatabaseOutlined />}>
          <Link href="/dashboard">
            <a>Free Courses </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
           <Clock/>
        </Menu.Item>
       
      {/* <Clock/> */}
    {auth?.user === null &&
       (<>
       <Menu.Item   style={{marginLeft: "auto"}} key="signup" icon={<UserAddOutlined />}>
             <Link href="/signup">
               <a>Sign Up</a>
             </Link>
           </Menu.Item>

           <Menu.Item
             key="signin"
             icon={<UserAddOutlined />}
           
           >
             <Link href="/signin">
               <a>Sign In</a>
             </Link>
           </Menu.Item>
       </>
       )}

            
        { auth?.user !== null &&
          (<>
          
          <SubMenu
            key="SubMenu"
            icon={<UserOutlined/>}
            title={auth?.user?.name || "Dashboard"}
            style={{marginLeft: "auto"}}
            >
         
              <Menu.ItemGroup>
                <Menu.Item key="setting:2">
                <Link href={roleBasedLink()}>
                <a>Dashboard</a>
                </Link>
                </Menu.Item>
              </Menu.ItemGroup>
          </SubMenu>
          
          <Menu.Item
            onClick={()=> signOut()}
              key="signout"
              icon={<LoginOutlined />}
            
            >
                <a>Sign out</a>
            </Menu.Item>
          </>
  
        )}

        <Menu.Item key="toggle">
          <ToggleTheme />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default TopNav;
