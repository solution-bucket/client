import AdminLayout from '../../../components/layout/AdminLayout';
import { Col, Row ,Button, List, Input} from 'antd';
import Link from 'next/link';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../../../context/auth';
import dayjs from 'dayjs';
import { toast } from 'react-hot-toast';
//var relativeTime = require('dayjs/plugin/relativeTime');
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);


function Comments () {
    const [auth, setAuth] = useContext(AuthContext);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const router = useRouter();
    useEffect(()=>{
   if(auth?.token) {
      fetchComments();
     getTotal();

   }
    },[auth?.token]);

    useEffect(()=> {
   if(page ===1) return;
   if(auth?.token) fetchComments();

    },[page])
    const fetchComments = async()=>{
        try {
            const {data} = await axios.get(`/comments/${page}`);
            console.log('__comments__', data);
             setComments([...comments, ...data]);
        } catch (err) {
            console.log(err);
        }
    }

   const getTotal = async ()=> {
        try {
              const {data} = await axios.get("/comment-count");  
              setTotal(data);
        } catch (err) {
              console.log(err);
        }
   }
    const handleDelete = async (comment)=> {
       try {
        const answer = window.confirm("Are you sure you want to delete?");
       if(!answer) return;
       const {data} = await axios.delete(`/comment/${comment._id}`);
       if(data?.ok) {
      setComments(comments.filter((c) => c._id !== comment._id));
      setTotal( total -1 )
      toast.success('Comment deleted successfully');
       }
       } catch (err) {
        console.log(err);
       }

    }
    const filterComment = comments.filter((comment) => comment.content.toLowerCase().includes(keyword));

    
    return (
       <AdminLayout>
         <Row>
            <Col span={24}>
                <div style={{marginTop:"60px"}}>
                    
                <h1 > <span style={{
                color:"blue",
                fontSize:"1rem"}}>{comments?.length}</span> comments.</h1>
                  <Input
                   placeholder='Search'
                   type='search'
                   value={keyword}
                   onChange={(e)=> setKeyword(e.target.value.toLowerCase())}
                  />
                  <List
                     itemLayout='horizontal'
                     dataSource={filterComment}
                     renderItem={(item) => (
                            <List.Item actions={[
                              <Link href={`/post/${item?.postId?.slug}#${item._id}`}><a>view</a></Link>,
                              <a onClick={()=> handleDelete(item)}>delete</a>
                            ]}>
                            <List.Item.Meta 
                            description={`On ${item?.postId?.title} | ${item.postedBy?.name} | ${dayjs(item.createdAt).format("L LT")} `}
                            title={item.content}
                            />
                            </List.Item>
                     )}
                  />
                </div>
               
            </Col>
            </Row>       
           {page * 6 < total  && (
             <Row>
             <Col>
                <Button loading={loading} style={{textAlign:'center'}} 
                type='primary' onClick={()=> setPage(page + 1)}>Show more</Button>
             </Col>
             {/* <Col>
                <Button type='primary' onClick={()=> setPage(page -2)}>previous</Button>
             </Col> */}
             </Row> 
           )}
       </AdminLayout>
    )
}

export default Comments;