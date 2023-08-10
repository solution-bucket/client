import axios from 'axios';
import {Row, Col, Card,Avatar, Button} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const {Meta} = Card;

export const Posts =({posts})=> {
  //state
  const [allPosts, setAllPosts] = useState(posts);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
       getTotal();
  },[]);

  const getTotal = async()=> {
     try {
       const {data} = await axios.get('/post-count');
       setTotal(data);
     } catch (err) {
      console.log(err);
     }
  }
  useEffect(()=> {
    if(page === 1) return;
    loadMore();
},[page]);

const loadMore = async()=> {
   try {
    setLoading(true);
    const {data} = await axios.get(`/posts/${page}`);
    setAllPosts([... allPosts, ...data]);
    setLoading(false);
   } catch (err) {
    console.log(err);
    setLoading(false);
   }
}
 return <div style={{marginTop:'50px'}}>
           <Head>
              <title>Learn and Build Stuff with Ephraim</title>
              <meta description="THis Platform Is Mainly for students who wants to improve their programming Skill." />
           </Head>
         <Row>
            {allPosts.map((post) => (
               <Col xs={24} xl={8} style={{marginTop:"5px", marginBottom:"5px",}}>
             <Link href={`/post/${post.slug}`}>
             <Card 
              hoverable 
              cover={
              <Avatar shape='square'
               style={{height:'200px'}}
               src={post?.featuredImage?.url || "images/default.jpg"}
                alt={post?.title} />
              }
              >
              <Meta title={post?.title} />
              </Card>
             </Link>
           </Col>
            ))}
    
 </Row>
 {allPosts?.length < total && (
  <Row>
  <Col span={24} style={{textAlign:'center', padding:'10px'}}>
           <Button size='large' type='primary' 
           loading={loading}
           onClick={()=> setPage(page + 1)}
           >Load More Tutorials</Button>
  </Col>
 </Row>
 )}
 </div>
}
export async function getServerSideProps() {
    const {data} = await axios.get(`${process.env.API}/posts/1`);
    return {
        props:{
              posts: data,
        }
    }
}
export default Posts;