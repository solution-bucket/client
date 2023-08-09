import React, { useState, useEffect, useRef,createElement , useContext} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SubscriberLayout from "../../../components/layout/SubscriberLayout";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import {toast}  from 'react-hot-toast'
import { AuthContext } from '../../../context/auth';

import { Button, Menu,Modal, Avatar } from "antd";
import {
  PlayCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckCircleFilled,
  MinusCircleFilled,
  CloseOutlined,
  SyncOutlined
} from "@ant-design/icons";
const { Item } = Menu;
import Typed from 'react-typed';
import {Tooltip} from "antd";

const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};

const SingleCourse = () => {
  const [showContent, setShowContent] = useState(false);
  const [clicked, setClicked] = useState(-1);
  const [collapsed, setCollapsed] = useState(false);
  const [course, setCourse] = useState({ lessons: [] });
  const [isCopy, setIsCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  // force state update
  const messagesEndRef = useRef(null);
  const [auth, setAuth] = useContext(AuthContext);

  // router
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);
const handleClose =()=> {
setClicked(-1)
}
 

  const loadCourse = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/user/course/${slug}`);
      setCourse(data);
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  };

  const copyCode = ()=> {
    navigator.clipboard.writeText(course.lessons[clicked].content);
    setIsCopy(true)
    toast.success(`code was copied, paste it in your IDE and experiment with it`)
    setTimeout(()=> {
      if(navigator.clipboard.writeText(course.lessons[clicked].content)) setIsCopy(false)

    },1000)
  }

  // const handleFunc = (index)=>{
  //   setClicked(index)
  //   if(clicked.index !== -1) setShowContent(!showContent)
  // }
  return (
    <SubscriberLayout>
      <div style={{ marginTop:'15%'}}>
        

        <div className="lessonsContents">
          {clicked !== -1 ? (
            <>
              <div className="lessons">
              <h2 className="codeEditorHeading" style={{ display:'flex', flexDirection:"space-between"}}>{course.lessons[clicked].title.substring(0, 30)}<Button className="btn-primary"
        onClick={() => {
        copyCode();
        }}
      >
      {isCopy? "code copied" : "click to copy code"} 
      </Button></h2>
              </div>
            

             
            <div className="codeEditor" >  
            <div className="closeBtn">
              <Tooltip title="Close the board"> 
            <CloseOutlined onClick={handleClose}/>
                    
              </Tooltip>
            </div>
            <div style={{color:"#fff"}} dangerouslySetInnerHTML={{ __html: course.lessons[clicked].content}} />

            </div>
            </>
          ) : (
            <div>
              <div style={{color:'blue',backgroundColor:"#fff",padding:'2px',width:"300px",borderRadius:'5px', fontSize:'1rem'}}>
              <Typed
          strings={[
            `${auth?.user?.name} Please click on the lessons below to start learning`
            
          ]}
          typeSpeed={150}
          backSpeed={10}
          loop
          
          />
               
              </div>
            </div>
          )}
        </div>
        <div>
        <Button
            onClick={() => setCollapsed(!collapsed)}
            className="text-primary mt-1 btn-block mb-2"
          >
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}{" "}
            {!collapsed && "Lessons"}
          </Button>
          <Menu
            defaultSelectedKeys={[clicked]}
            inlineCollapsed={collapsed}
          >
            {loading? (
              <SyncOutlined
              spin
               style={{margin: "auto 42%",textAlign:'center', fontSize:'70px',color:'blue'}}
              />
            ): course && course.lessons.map((lesson, index) => (
              <Item 
              onClick={() =>setClicked(index) && setShowContent(ture) }
                key={index}
                icon={<Avatar onClick={()=> setShowContent(true)}>{index + 1}</Avatar>}
              >
                {lesson.title.substring(0, 30)}
                
              </Item>
            ))}
          </Menu>
        </div>
      </div>
    </SubscriberLayout>
  );
};

export default SingleCourse;
