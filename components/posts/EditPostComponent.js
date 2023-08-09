import { useContext,useState, useEffect } from 'react';
import { Row,Col, Input,Select,Modal, Button, Image } from 'antd';
import {ThemeContext}  from "../../context/theme";
import axios from 'axios';
import { uploadImage } from '../../components/functions/upload';
import {Tabs} from 'antd';
const {TabPane} = Tabs;
const {Option} = Select;
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import {UploadOutlined} from '@ant-design/icons';
import Media from '../../components/media'
import UploadMedia from '../media';
import Library from '../media/Library';
//import ReactQuill from 'react-quill';
import { MediaContext } from '../../context/media';
import dynamic from "next/dynamic";

//import ReactQuill  from ('react-quill');?
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

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
function EditPost ({page = "admin"}) {
    
    const [theme, setTheme] = useContext(ThemeContext);
    const [title, setTitle] = useState("");
    const [contact, setContact] = useState("");
    const [content, setContent] = useState("");
    const [featuredImage, setFeaturedImage] = useState({});
    const [categories, setCategories] = useState([]);
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [visible, setVisible] = useState(false);
   const [media, setMedia] = useContext(MediaContext);
   const [loading, setLoading] = useState(true);
   const [postId, setPostId] = useState("");
    const router = useRouter();

    useEffect(()=> {
        loadPost()
    },[router?.query?.slug])
     
    const loadPost = async()=> {
        try {
            const {data}  = await axios.get(`/post/${router.query.slug}`);
            setTitle(data?.post.title);
            setContact(data?.post.contact);
            setContent(data?.post.content);
            setFeaturedImage(data?.post.featuredImage);
            setPostId(data?.post._id);
            let arr = [];
            data.post.categories.map((c)=> arr.push(c.name));
            setCategories(arr);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }
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
            const {data} = await axios.put(`/edit-post/${postId}`, {
                title,
                contact,
                content,
                categories,
                featuredImage: media?.selected?._id ? media?.selected?._id: featuredImage?._id ? featuredImage?._id :undefined,
            });

            if(data?.error) {
                toast.error(data?.error);
            }else {
             toast.success("Your tutorial was updated Successfully");
              setMedia({...media, selected: null});
              router.push(`/${page}/posts`); 
            }
        } catch (err) {
            console.log(err);
            toast.error("Item update failed. Try again");
        }
    }

    return (
        <div style={{ marginTop:"40px"}}>
        <Row>
            <Col span={16} offset={1}>
            <h1 style={{marginTop:"50px"}}>Edit Tutorial.</h1>
             <Input
             placeholder='Give your tutorial a title'
             size='large'
             value={title} 
                onChange={(e) =>{
                setTitle(e.target.value);
                localStorage.setItem("post-title", JSON.stringify(e.target.value));
             }}
             />
             <br/>
             <br/>
                {loading?(<h1 style={{ marginTop:"50px"}}>Loading...</h1>): (
        <div className='editor-scroll'>
            
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
                )}
             <br/>
            </Col>
            <Col span={6} offset={1}>
                <div  style={{marginTop:"50px"}}>

                <Button style={{margin:"10px 0px 10px 0px", width:'100%'}} onClick={()=> setVisible(true)}>Preview</Button>
               <div style={{display:'flex', justifyContent:"center"}}>
               <Button type='primary' style={{margin:"10px 7px 10px 0px", width:'50%'}} onClick={()=> setMedia({...media, showUploadModal: true})}>
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
            value={[...categories]}
            >
               {loadedCategories.map((item)=>   <Option key={item.name}>{item.name}</Option>)}
            </Select>
            <br/>
            <br/>
            {media?.selected ? (
                <div style={{marginTop: "10px"}}>
                     <Image width="100%" src={media?.selected?.url} />
                </div>
               
            ): featuredImage?.url ? (
                <div style={{marginTop: "10px"}}>
                <Image width="100%" src={featuredImage?.url} />
           </div>
            ) : ""}
            <Button 
            type='primary'
            style={{margin:"10px 0px 10px 0px",
             width:'100%'}}
             onClick={handlePublish}
             >Publish</Button>

            </Col>
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

              <ReactQuill  
             value={content}
             modules={modules}  theme="snow" 
            onChange={(v) => { 
                setContent(v)
                localStorage.setItem("post-content", JSON.stringify(v));
             }}
            placeholder="Tutorial description goes here..." 
            />
            </Modal>

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
        </div>
    )
}

export default EditPost;