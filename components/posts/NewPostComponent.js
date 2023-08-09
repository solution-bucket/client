import { useContext,useState, useEffect } from 'react';
// import Editor from "rich-markdown-editor";
import { Row,Col, Input,Select,Modal, Button, Image } from 'antd';
import {ThemeContext}  from "../../context/theme";
import axios from 'axios';
import { uploadImage } from '../../components/functions/upload';
import {Tabs,Checkbox} from 'antd';
const {TabPane} = Tabs;
const {Option} = Select;
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import {UploadOutlined} from '@ant-design/icons';
import Media from '../media'
import UploadMedia from '../media';
import Library from '../media/Library';
import { MediaContext } from '../../context/media';
import dynamic from "next/dynamic";

//import ReactQuill  from ('react-quill');?
const ReactQuill = dynamic(import('react-quill'), { ssr: false })


const children = [];
for (let i = 9.99; i <= 50000.99; i++) {
  children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>);
}




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

function NewPostComponent ({page ="admin"}) {
    const savedTitle = ()=> {
        if(process.browser) {
            if(localStorage.getItem('post-title')) {
                return JSON.parse(localStorage.getItem("post-title"));
            }
        }
    }
    const saveContact = ()=> {
        if(process.browser) {
            if(localStorage.getItem('post-contact')) {
                return JSON.parse(localStorage.getItem("post-contact"));
            }
        }
    }

    const savedContent = ()=> {
        if(process.browser) {
            if(localStorage.getItem('post-content')) {
                return JSON.parse(localStorage.getItem("post-content"));
            }
        }
    }
  
 
    const [theme, setTheme] = useContext(ThemeContext);
    const [title, setTitle] = useState(savedTitle());
    const [contact, setContact] = useState(saveContact());
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState([]);
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [visible, setVisible] = useState(false);
   const [currency, setCurrency] = useState("");

   const [media, setMedia] = useContext(MediaContext);
    const router = useRouter();

    useEffect(()=> {
        loadCategories()
    },[])
   
    const loadCategories = async()=> {
       try {
         const {data} = await axios.get('/categories');
         setLoadedCategories(data);
       } catch (err) {
        console.log(err);
       }
    }
    const handlePublish = async()=> {
        
        try {
            const {data} = await axios.post("/create-post", {
                title,
                content,
                contact,
                categories,
                featuredImage: media?.selected?._id,
            });
           
            if(data?.error) {
                toast.error(data?.error);
            }else {
             toast.success("Post created Successfully");
              localStorage.removeItem("post-title"); 
              localStorage.removeItem("post-content");
              setMedia({...media, selected:null});
              router.push(`/${page}/posts`); 
            }
        } catch (err) {
            console.log(err);

        }
    }

    return (
    
        <div style={{ marginTop:"40px"}}>
        <Row>
            <Col ls={1} span={16} offset={1}>
            <h1 style={{marginTop:"50px"}}>Post New Tutorial.</h1>
             <Input
             placeholder='Give your Post / Tutorial a Name'
             size='large'
             value={title} 
                onChange={(e) =>{
                setTitle(e.target.value);
                localStorage.setItem("post-title", JSON.stringify(e.target.value));
             }}
             />

             <br/>
             <br/>
             <div className='editor-scroll'>
            <div className='editorScreen'>
             <ReactQuill  
             value={content}
             modules={modules}  theme="snow" 
            onChange={(v) => { 
                setContent(v)
                localStorage.setItem("post-content", JSON.stringify(v));
             }}
            placeholder="Tutorial description goes here..." 
            />
           </div>
             </div>
             <br/>
            </Col>
            <Col span={18} offset={1}>
                <div  style={{marginTop:"50px"}}>
            
               <div style={{display:'flex', justifyContent:"center"}}>
               <Button  style={{margin:"10px 7px 10px 0px", width:'50%'}} onClick={()=> setMedia({...media, showUploadModal: true})}>
                    <UploadOutlined/>
                    Upload Image</Button>
               <Button style={{margin:"10px 5px 10px 0px", width:'50%'}} onClick={()=> setMedia({...media, showMediaModal: true})}>
            Featured Images</Button>
               </div>
                </div>
            <h1 style={{marginTop:"10px"}}>
                Categories
            </h1>
            <Select
             mode='multiple'
             placeholder="Select categories" 
            allowClear={true}
            style={{width:"100%"}}
            onChange={(v) => setCategories(v)}
            >
               {loadedCategories.map((item)=>   <Option key={item.name}>{item.name}</Option>)}
            </Select>
                     
           <br/>
           <br/>
           <div style={{ display:'flex', justifyContent:'space-between'}}>
          
        <br/>
             <Input
             placeholder="WhatApp Number"
              value={contact}
                onChange={(e) =>{
                    setContact(e.target.value);
                localStorage.setItem("contact", JSON.stringify(e.target.value));
             }}
        />
        <br/>

        </div>
            <br/>
            {media?.selected && (
                <div style={{marginTop: "10px"}}>
                     <Image width="100%" src={media?.selected?.url} />
                </div>
               
            )}
        <Button style={{margin:"10px 0px 10px 0px"}} 
        type="dashed"
         onClick={()=> setVisible(true)}>Preview</Button>
           {"  "}
            <Button 
            type='primary'
            style={{margin:"10px 0px 10px 0px"}}
             onClick={handlePublish}
             >Publish</Button> 

            </Col>
    
            {/** Upload Image Modal */}
            <Modal
            title="Media"
            visible={media.showUploadModal}
            onOk={()=> setMedia({...media, showUploadModal: false})}
            onCancel={()=> setMedia({...media, showUploadModal: false})}
            width={720}
            bodyStyle={{height: 400}}
            footer={null}>
            <UploadMedia/>
            </Modal>
            {/** Media Modal */}
            <Modal
            title="Media"
            visible={media.showMediaModal}
            onOk={()=> setMedia({...media, showMediaModal: false})}
            onCancel={()=> setMedia({...media, showMediaModal: false})}
            width={720}
            bodyStyle={{height: 720}}
            footer={null}>
             <Library/>
            </Modal>
        </Row>
          {/** Preview Modal */}
          <Modal
            title="Preview"
            centered
            open={visible}
            onOk={()=> setVisible(false)}
            onCancel={()=> setVisible(false)}
            footer={null}
            width={720}
          
            >
              <h1>{title}</h1>
            <ReactQuill  modules={modules}
            theme="snow" 
            placeholder="Items description goes here..." 
            style={{ width: '100%', }}
            />
            </Modal>
        </div>
    )
}

export default NewPostComponent;