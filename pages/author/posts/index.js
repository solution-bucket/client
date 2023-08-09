import AuthorLayout from '../../../components/layout/AuthorLayout';
import { Col, Row ,Button, List} from 'antd';
import Link from 'next/link';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {PostContext} from '../../../context/post';
import { useRouter } from 'next/router';
import PostList from '../../../components/posts/PostList';

function Posts () {
    const [post, setPost] = useState(PostContext);
    const [loading, setLoading] = useState(true);
    const {posts} = post;
    const router = useRouter();


   
    
useEffect(()=> {
    
    if(posts) {
    localStorage.getItem(posts);
    }
    fetchPosts()

})
    useEffect(()=>{
        fetchPosts()
    },[post]);
   
    const fetchPosts = async()=>{
        try {
            const {data} = await axios.get("/posts-by-author");
            console.log("Single user posts", data);
             setPost((prev) => ({...prev, posts: data}));
             setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    const handleEdit = async (post)=> {
        return  router.push(`/author/posts/${post.slug}`);     
    }
    const handleDelete = async (post)=> {
       try {
        const answer = window.confirm("Are you sure you want to delete?");
        if(!answer) return;
        const {data} = await axios.delete(`/post/${post._id}`);
        if(data.ok) {
            setPost((prev)=> ({
                ...prev, posts: prev.posts.filter((p) => p._id !== post._id)
            }))
        }
       } catch (err) {
        console.log(err);
       }

    }
    return (
       <AuthorLayout>
         <Row>
            <Col span={24}>
                <div style={{marginTop:"50px"}}>
                    <Button type='primary' style={{margin:'10px 0px 10px 0px'}}>
                        <Link href="/author/posts/new">
                          <a> <PlusOutlined/>Add new post</a>
                        </Link>
                    </Button>
                <h1 > <span style={{
                color:"blue",
                fontSize:"1rem"}}>{posts?.length}</span> posts</h1>
                   {loading?(<h1 style={{ marginTop:"50px"}}>Loading...</h1>): (
                             <PostList 
                             posts={posts}
                             handleDelete={handleDelete}
                             handleEdit={handleEdit}
                             />
                   )}
                </div>
               
            </Col>
            </Row>        
       </AuthorLayout>
    )
}

export default Posts;