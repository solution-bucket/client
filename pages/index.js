import FullWidthImage  from  "../components/pages/FullWidthImage";
import { useContext } from "react";
import useLatestPosts from "../hooks/useLatestPosts";
import useCategory from "../hooks/useCategory";
import Head from 'next/head';
import { Row, Col, Divider, Button } from "antd";
import Link from "next/link";
import useHome from '../hooks/useHome';
import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

import MainFooter from '../MainFooter'
import {
  HistoryOutlined, 
  UserOutlined, 
  } from '@ant-design/icons';


function Home (){

  const {latestposts} = useLatestPosts();
  const {categories, loading} = useCategory();
  const { 
    title, 
    subtitle,
    fullWidthImage,
    setTitle,
    setSubTitle,
    setFullWidthImage} = useHome();

   
  return (
  
    <>
      <div style={{marginTop:'40px'}}>
     
        <Head>
       
          <title>Learn & Build Stuff with Ephraim</title>
          <meta name="description"
          content="Course that you find interest in"
          />
        </Head>

    <div style={{marginButtom: 60}}></div>

    <FullWidthImage title={title} 
    
    subtitle={subtitle}
    
     fullWidthImage={fullWidthImage?.url} />
    
    <Row style={{ marginTop: 40}}>
      
        </Row>

        <Row>
          <Col xs={24} xl={24}>
             

              <div className="recent-collection" style={{  textAlign:'center', display:'flex', flexWrap:'wrap', }}>
                {latestposts?.map((post) => (
                  <div className="recent-post" style={{display:'flex', color:"blue"}}>
                  <Link href={`/post/${post?.slug}`} key={post?._id}>
                   <div className="recent-post-collection" style={{ display:'flex', 
                   flexDirection:'column',
                    border:'2px solid #fff',
                    width:'470px',
                    height:'200px',
                    margin:'10px',
                    backgroundColor:'#fff',
                    boxShadow:'2px 0px 5px 2px rgba(208, 208, 230, 0.6)',
                    justifyContent:"center"
                    

                    }}>
              <img style={{ width:'290px', height:'300px', borderRadius:'5%'}} src={post?.featuredImage?.url || '/images/learn1.png'} alt={post?.title} />
             
                  <a><h2 className="recent-post-title" style={{ color:'blue',marginBottom:'2%'}}>{post?.title}</h2></a>
                
                  <div className="content-flex-box">
               <HistoryOutlined style={{ color:'green', marginLeft: '20px'}} />Posted:{dayjs(post?.createdAt).format("MMMM D, YYYY h:mm A")}
               
               <UserOutlined style={{ color:'green', marginLeft: '20px'}} />{post?.postedBy?.name}
                  </div>
                  
                </div>
               
                </Link>
                
                </div>
                
                ))}
              </div>
            
          </Col>
        </Row>
         
        <Row>
           
           <Col span={24} style={{textAlign:'center', marginTop:'80px', marginButtom:'80px'}}>
           <h3 style={{ textAlign:'center',color:'blue', fontSize:'24px'}}> filters by Categories</h3>
             <Divider>
               </Divider>
               {loading ? (
                    <SyncOutlined
                    spin
                     style={{ display:'block',textAlign:'center', fontSize:'70px',color:'blue'}}
                    />):(
           <div style={{textAlign:'center', }}>
             
              {categories?.map((c) => (
                <Link href={`/category/${c?.slug}`} key={c?._id}>
                <a><Button style={{margin:2}} type="primary">{c?.name}</Button></a>
                </Link>
              ))}
            </div>)}
           </Col>
        </Row>
      {/* <Footer/> */}
      <MainFooter/>
    </div>
    </>
    
  )
}
export default Home;

