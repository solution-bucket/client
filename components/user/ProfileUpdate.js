import {useState,useEffect, useContext} from 'react';
import { Row,Col,Button,Input, Checkbox, Select, Avatar } from 'antd';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth';
import {MediaContext} from "../../context/media";
import Media from '../media'
// import MediaLibrary from '../../../components/media'

const ProfileUpdate =({page = "admin"})=> {
const [auth, setAuth] = useContext(AuthContext);
const [media, setMedia] = useContext(MediaContext);
const [name, setName] = useState('');               //
const [email, setEmail] = useState('');               //
const [password, setPassword] = useState("");               //
const [role, setRole] = useState('');
const [loading, setLoading] = useState(false);
const [website, setWebsite] = useState("");
const [image, setImage] = useState({});
const [id, setId] = useState("");
const router = useRouter();
// const {id} = router.query;
//useEffect
useEffect(()=> {
  const currentUser = async()=> {
      const {data} = await axios.get(`/user/${router?.query?.id}`);
      setName(data.name);
      setEmail(data.email);
      setWebsite(data.website);
      setImage(data.image);
      setRole(data.role);
      setId(data._id);
//       console.log("CURRENT USER =>", data);
  }
 if(auth?.token) currentUser();
},[auth, router?.query?.id]);
//funciton
const handleSubmit = async(e)=> {
   e.preventDefault();
   try {
     const {data} = await axios.put(`/update-user-by-${page}`,{
              id,
              name,
              email,
              password,
              website,
              role,
              image: media?.selected?._id 
              ?media.selected?._id 
              : image?._id 
              ? image?._id 
              : undefined,
     });
     if(data?.error) {
              toast.error(data.error);
     }else {
              //update  context and local storage
             if(auth?.user?._id === data._id) {
                setAuth({...auth, user: data});
              // localStorage.setItem("auth", JSON.stringify(data));
              let fromLocalStorage = JSON.parse(localStorage.getItem("auth"));
              fromLocalStorage.user = data;
              localStorage.setItem('auth', JSON.stringify(fromLocalStorage));
             }

              toast.success("Updated user successfully");
     }
   } catch (err) {
       console.log(err);
       toast.error('User update failed. Try again');
       setLoading(false);
   }
}
//show form
   return (<Row>
                   <Col span={27} offset={1}>
                   <div style={{marginTop:'70px'}}>
                     <h4> Update Profile </h4>
                   
                     <br/>
                     {/* <div style={{marginBottom:'20px', textAlign:'center'}}>
                        {media?.selected?(
                            <>
                              <div style={{marginBottom:'15px'}}></div>
                            <Avatar src={media?.selected?.url} size={100} />
                            </>
                        ): image? (
                            <>
                             <div style={{marginBottom:'15px'}}></div>
                            <Avatar src={image?.url} size={100} />
                            </>
                        ): ""}
                     </div> */}
                     <br/>
                     <div style={{display:'flex'}}>
                    {/* {auth?.user?.role !== "Subscriber" && ( <Media/>)} */}
                    {/* <MediaLibrary/> */}
                     </div>
                     <Input style={{ margin:'20px 0px 10px 0px'}}
                     size="large"
                     placeholder="Full name"
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                     />
                     <Input style={{ margin:'20px 0px 10px 0px'}}
                     size="large"
                     placeholder="Email"
                     value={email}
                     onChange={(e)=> setEmail(e.target.value)}
                     />
                     <Input style={{ margin:'10px 0px 10px 0px'}}
                     size="large"
                     placeholder="www.something.com"
                     value={website}
                     onChange={(e)=> setWebsite(e.target.value)}
                     />
                     <div style={{display:'flex'}}>
                       
                        <Input.Password 
                        size='large'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                     </div>
                    { page === 'admin' &&( <Select value={role}
                       style={{margin:'10px 0px 10px 0px', width:'100%'}}
                       onChange={(e)=> setRole(e)}
                       >
                       <Select.Option value="Subscriber">Subscriber</Select.Option>
                       <Select.Option value="Author">Author</Select.Option>
                       <Select.Option value="Admin">Admin</Select.Option>
                      </Select>
                    )
                    }
                   </div>
                   <Button 
                     style={{margin:'10px 0px 10px 0px'}}
                      onClick={handleSubmit}
                      type="default" 
                      loading={loading}
                      block
                      htmlType='submit'>
                            Submit
                      </Button>
                   </Col>
              </Row>
   )
             
}
export default ProfileUpdate;