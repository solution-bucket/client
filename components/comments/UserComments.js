import { Col, Row ,Button, List, Input, Modal} from 'antd';
import Link from 'next/link';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth';
import dayjs from 'dayjs';
import { toast } from 'react-hot-toast';
import CommentForm from './CommentForm';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);


function UserComments () {
    const [auth, setAuth] = useContext(AuthContext);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    //update
    const [selectedComments, setSelectedComments] = useState({});
    const [content, setContent] = useState("");
    const [visible, setVisible] = useState(false);
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
            const {data} = await axios.get(`/user-comments`);
            console.log('__comments__', data);
             setComments(data);
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

    const handleSubmit = async () => {
  try {
  setLoading(true);
  const {data} = await axios.put(`/comment/${selectedComments._id}`, {content});
  let arr = comments;
  const index = arr.findIndex((c) => c._id === selectedComments._id);
  arr[index].content = data.content;
  setComments(arr);
  setVisible(false);
  setLoading(false);
  toast.success("Comment updated");
  } catch (err) {
  console.log(err);
  setLoading(false);
  }
    }
    return (
              <>
         <Row>
            <Col span={24}>
                <div style={{marginTop:"50px"}}>
                    
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
                            <a onClick={() => {
                              setSelectedComments(item);
                               setVisible(true);
                               setContent(item.content);

                            }}>edit</a>,
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
             </Row> 
           )}

           <Row>
              <Col span={24}>
                 <Modal title="Update comment" 
                 open={visible}
                 onOk={() =>setVisible(falase)}
                  onCancel={()=> setVisible(false)}
                  footer={null}
                  >
              <CommentForm
              handleSubmit={handleSubmit}
              comment={content}
              setComment={setContent}
              loading={loading}
              />
                  </Modal>
              </Col>
           </Row>
           </>
    )
}

export default UserComments;