import {useState, useEffect, useContext} from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';
import {Row, Col,List,Avatar,Input} from 'antd';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AuthContext } from '../../../context/auth';
import user from '../../../../server/models/user';

export default function AllUsers() {
 //context
 const [auth, setAuth] = useContext(AuthContext);
 //hook
    const [keyword, setKeyword] = useState('');

 const router = useRouter();
 const [users, setUsers] = useState([]);


 useEffect(()=> {
     if(auth?.token) loadUsers();
 },[auth?.token])
 const loadUsers = async()=> {
      try {
        const {data} = await axios.get("/users");
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
 }
 const handleDelete= async(user)=> {
     try {
            if(user._id === auth.user._id) {
              alert("you can't delete yourself ");
              return;
            } 
            try {
              const {data} = await axios.delete(`/user/${user._id}`);
              //afer deleting update the users state or arrays[]
              setUsers((prev)=> prev.filter((u)=> u._id !== user._id));
              toast.error("User deleted");

            } catch (err) {
              console.log(err);
            }              
     } catch (err) {
          
  }     
 }
 const filteredUsers = users?.filter((u)=> u.name.toLowerCase().includes(keyword))
     return (
              <AdminLayout>
             <Row>
                 <Col span={24}>
                 <div  style={{marginTop:'50px'}}>
                 <h4>Total users ( {users.length})</h4>
                 <br/>

              <Input
                   placeholder='Search'
                   type='search'
                   value={keyword}
                   onChange={(e)=> setKeyword(e.target.value.toLowerCase())}
                  />
                 <List
                 itemLayout='horizontal'
                 dataSource={filteredUsers}
                 renderItem={(user)=> (
                   <List.Item
                   actions={[
                        <Link href={`/admin/users/${user._id}`}>
                            <a>edit</a>
                        </Link>,
                            <a disabled={user?._id ===auth?.user?._id} onClick={()=> handleDelete(user)}>delete</a>

                   ]}
                   >
                            <Avatar src={user?.image?.url}>{user.name[0]}</Avatar>
                     <List.Item.Meta title={user.name} style={{marginLeft:'10px'}}/>
                     <List.Item.Meta description={user.email} style={{marginLeft:'10px'}}/>
                     <List.Item.Meta description={user.role} style={{marginLeft:'10px'}}/>
                     <List.Item.Meta description={`${user?.posts?.length || 0} post`} style={{marginLeft:'10px'}}/>
                   </List.Item>
                 )}
                 />
                 </div>
                
                 </Col>
              </Row>               
              </AdminLayout>
     )
}