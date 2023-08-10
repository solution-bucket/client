import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import {Row, Col,List, Modal, Card,Avatar, Typography, Divider, Button} from 'antd';
import Head from 'next/head';
import {CloseOutlined } from '@ant-design/icons';
import { ThemeContext } from '../../context/theme';
import dayjs from 'dayjs';
import Link from 'next/link';
import {toast} from 'react-hot-toast';
import CommentForm from '../../components/comments/CommentForm';
import { ShareSocial }  from "react-share-social";
var relativeTime = require('dayjs/plugin/relativeTime');
import useCategory  from '../../hooks/useCategory';
import useLatestPosts  from '../../hooks/useLatestPosts';
dayjs.extend(relativeTime);
import {HistoryOutlined, UserOutlined, ShareAltOutlined} from '@ant-design/icons';
const {Meta} = Card;
const  {Title} = Typography;
import SeedMessage  from './SeedMessage';
import { AiOutlineShareAlt } from "react-icons/ai";

export const SinglePost =  ({post, postComments})=> {
  const [visible, setVisible] = useState(false);  // visibility state
  const [shareOpen, setShareOpen] = useState(false);  // visibility state
  const safety_measure = [
  
    
    {
      id: 2,
      data: "Spending at least 2-3 hours🕔 a day coding might help speed up the learning process."
    },
    {
      id: 3,
      data: "Please don't be afraid of ERRORS!, they are normal, and they will be with you thoughout your journey 🤣🤣🤣🤣🤣."
    },
    {
      id: 4,
      data: "Copy this  code and paste it into your IDE (Integrated Development Enviroment) try changing some lines to get comfortable with the materials. 🖥️."
    },
    {
      id: 1,
      data: 'To become a computer programer/software developer you need to put in the work. There is no fool-proof prescription to it 🤣🤣🤣🤣🤣 .'
    },
  ]
const [theme, setTheme] = useContext(ThemeContext);
//comments
const [comments, setComments] = useState(postComments);
const [comment, setComment] = useState('');
const [loading, setLoading] = useState(false);
const [showMore, setShowMore] = useState(false);



//hooks
const {categories} = useCategory();
const {latestposts} = useLatestPosts();

const handleSubmit = async()=> {
    try {
        setLoading(true);
        const {data} = await axios.post(`/comment/${post._id}`, {comment});
        setComments([ data, ...comments]);
        toast.success('Thanks for Leaving Comment');
        setComment('');
        setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
}




 return <div style={{marginTop:'50px'}}>
  
           <Head>
              <title>{post?.title}</title>
              <meta description={post?.content.substring(0,160)} />
           </Head>
         <Row>
           <Col xs={24} xl={16}>
           <Card cover={
              <img src={post?.featuredImage?.url || '/images/learn1.png'} alt={post?.title} />
           }>
              <Title>{post?.title}</Title>
            
              {/** share social link */}
              <Button
           
           onClick={() => setShareOpen(true)}
           className="textCenter"
           type="secondary"
           shape="round"
           icon={<ShareAltOutlined />}
           size="large"
         >
         Share
         </Button>
              <Modal
           width={950}
            title="Share on:."
            centered
            open={shareOpen}
            onCancel={() => setShareOpen(false)}
            footer={null}
          >
 <span style={{display:'flex', flexDirection:'row'}}>
 <AiOutlineShareAlt style={{ marginTop:'17%', fontSize:'2rem'}}/> <p style={{ marginTop:'17%', fontSize:'1rem'}}>SHARE:</p>
 <ShareSocial  url={process.browser && window.location.href} 
        socialTypes={['facebook','twitter','whatsapp','linkedin','email']}
        onSocialButtonClicked={ data => console.log(data)} 
        style={{
      height:'20px',
      overflow: 'hidden',
      background:'none'
    }}
      />
     </span>
 </Modal> 
              <div style={{ marginTop:'30px'}}>
              {showMore ?(<div className='codeEditor' dark={theme === 'light' ? false : true}   style={{backgroundColor:"#cdcdcd", padding:'10px'}}
                 dangerouslySetInnerHTML={{ __html: post?.content}}
                />):( <span style={{display:'flex', flexDirection:'column' }}><div  dark={theme === 'light' ? false : true}    style={{backgroundColor:"#cdcdcd",padding:'10px'}}
                  dangerouslySetInnerHTML={{ __html: post?.content.substring(0, 220) }}
                   /><p>...</p></span> ) 
                  }
                 
              </div>
               
             
                     <Button style={{ backgroundColor:'#fff', padding:'8px', textAlign:'center',alignItems:'center',borderRadius:'20px',color:'blue', margin:'10px '}} onClick={()=> setShowMore(!showMore)}>{showMore ? "Read Less..." : "Reaad More..."}</Button>
                    
              <div className='payment_plan'>
                <div>
                <br/>
               <span> <HistoryOutlined style={{ color:'green', fontSize:'1.2rem'}} /> Posted:{dayjs(post.createdAt).format("MMMM D, YYYY h:mm A")}</span>
               <br/>
               <span> <UserOutlined style={{ color:'green', fontSize:'1.2rem'}} /> {" "}{post?.postedBy.name}</span>
                </div>
              </div>
             <div style={{ marginTop:'20px'}}>
             <p style={{ fontFamily:'cursive'}}>View  similar  Tutorials  {post?.categories.map((c) => (<span key={c._id}>
                            <Link href={`/category/${c.slug}`} >
                            <a className='browser-product'>{c.name} </a>
                            </Link>
              </span>))}
              </p>
             </div>

            
           <CommentForm 
           comment={comment} 
           loading={loading}
           setComment={setComment}
            handleSubmit={handleSubmit}
            />
            <div style={{ marginBottom: '10px'}}></div>
            <List 
            
          itemLayout='horizontal'
          dataSource={comments}
          renderItem={item => (
              <List.Item key={item._id} id={item._id}>
                 <List.Item.Meta
                 avatar={<Avatar>{item.postedBy?.name.charAt(0)}</Avatar>}
                  title={item.postedBy.name}
                   description={`${item?.content} - ${dayjs(item.createdAt).fromNow()}`}
                   /> 
                   <span style={{ marginRight:'10%'}}> </span>
                  
              </List.Item>
          )}
          
          />
           
           </Card>
           </Col>
           <Col xs={22} xl={6} offset={2}>
        <Divider>Filters By Categories</Divider>
        {categories.map((c)=> (
          <Link href={`/category/${c.slug}`} key={c._id}>
          <a>
            <Button style={{margin: '2px', borderRadius:'20px'}} type='primary'>{c.name}</Button>
          </a>
          </Link>
        ))}
        <Divider>Recents items</Divider>
        {latestposts.map((p)=> (
          <Link href={`/post/${p.slug}`} key={p._id}>
          <a>
            <Button style={{margin: '2px', borderRadius:'20px'}}>{p.title}</Button>
          </a>
          </Link>
        ))}
           
               <Col xs={18} xl={4} >
               
        <Divider>How to Buy  Items that's  tailor to your needs ? </Divider>
        <img src='' />
               <div style={{marginRight:'20%'}}>
                  <div>
                  <img shape='square'
              style={{ marginLeft:'40%',width:'80px', height:'80px'}}
               src="/images/arrow.gif"
               />
               <h4 className='heading'> Useful Tips</h4>
              
                  </div>
                 
               </div>
            </Col>
            <div className='safety_measure'>
                   {safety_measure.map((items)=> {
                    return (
                     <span style={{display:'flex'}}>  <img style={{marginRight:'10px', marginTop:'5px',width:'10px', height:'5px'}}
                     src="/images/check-mark.png"/> <p className='safty'>{items.data}</p></span> 
                    )
                   })}
                   </div>
                   <br/>
            <div className='seller_contact'>
                
              <div style={{ display:'flex', alignItems:'center', padding:'10px'}}> <div style={{width:'50px', height:'10px', backgroundColor:'black', borderRadius: '20px'}}></div> 
              <div className='contact_seller'>Contact the Creator</div>
              <div style={{width:'50px', height:'10px', backgroundColor:'black', borderRadius: '20px'}}></div> </div>
              <div>
              <button style={{ backgroundColor: 'transparent', border:'none'}} onClick={() => setVisible(!visible)}>{visible ? 
              <CloseOutlined style={{ color:'#fff', cursor:'pointer', fontSize:'2rem', backgroundColor:'red', borderRadius:'50px'}} />: <Button type='primary'>Send Message </Button>}</button>
               {visible && <SeedMessage
               contact={post?.contact}
               />}
              </div>
                   </div>
           </Col>

          
 </Row>
 </div>

}

export async function getServerSideProps({params}) {
    const {data} = await axios.get(`${process.env.API}/post/${params.slug}`);
    return {
        props:{
          post: data.post,
          postComments: data.comments,
        }
    }
    
}

export default SinglePost;