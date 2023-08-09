import AdminLayout from '../../../components/layout/AdminLayout';
import { Col, Row ,Button, List, Input} from 'antd';
import Link from 'next/link';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {PostContext} from '../../../context/post';
import { useRouter } from 'next/router';
import PostList from '../../../components/posts/PostList';
import { AuthContext } from '../../../context/auth';


function Posts () {
    const [post, setPost] = useState(PostContext);
    const [auth, setAuth] = useContext(AuthContext);
    const [keyword, setKeyword] = useState('');
    const {posts} = post;
    const router = useRouter();
    useEffect(()=>{
   if(auth?.token) fetchPosts();
    },[auth?.token]);
    const fetchPosts = async()=>{
        try {
            const {data} = await axios.get("/posts-for-admin");
             setPost((prev) => ({...prev, posts: data}));
        } catch (err) {
            console.log(err);
        }
    }

    const handleEdit = async (post)=> {
        return  router.push(`/admin/posts/${post.slug}`);     
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
       <AdminLayout>
         <Row>
            <Col span={24}>
                <div style={{marginTop:"50px"}}>
                    <Button type='primary' style={{margin:'10px 0px 10px 0px'}}>
                        <Link href="/admin/posts/new">
                          <a> <PlusOutlined/>Add new Tutorial</a>
                        </Link>
                    </Button>
                <h1 > <span style={{
                color:"blue",
                fontSize:"1rem"}}>{post?.posts?.length}</span> Tutorials.</h1>
                  <Input
                   placeholder='Search'
                   type='search'
                   value={keyword}
                   onChange={(e)=> setKeyword(e.target.value.toLowerCase())}
                  />
                    <PostList 
                    posts={posts?.filter((p)=> p.title.toLowerCase().includes(keyword))}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    />
                </div>
               
            </Col>
            </Row>        
       </AdminLayout>
    )
}

export default Posts;