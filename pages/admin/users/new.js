import {useState} from 'react';
import AdminLayout  from '../../../components/layout/AdminLayout';
import { Row,Col,Button,Input, Checkbox, Select } from 'antd';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/router';
import generator  from 'generate-password';


const NewUser =()=> {
const [name, setName] = useState('');               //
const [email, setEmail] = useState('');               //
const [password, setPassword] = useState(generator.generate({length: 6}));               //
const [role, setRole] = useState('');
const [checked, setChecked] = useState(false);
const [loading, setLoading] = useState(false);
const [website, setWebsite] = useState("");
//funciton
const handleSubmit = async(e)=> {
   e.preventDefault();
   try {
      setLoading(true);
      const {data} = await axios.post("/create-user", {
        name,
        email,
        website,
        password,
        role,
        checked
      });
      if(data?.error) {
              toast.e(data?.error);
      }else {
        toast.success("User created successfully");
        setLoading(false);
      }
   } catch (err) {
       console.log(err);
       toast.error('Signup failed. Try again');
       setLoading(false);
   }
}
//show form
   return <AdminLayout>
              <Row>
                   <Col span={12} offset={8}>
                   <div style={{marginTop:'40px'}}>
                     <h4 style={{marginBottom:'-10px'}}>Add new user</h4>
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
                        <Button type='default' size='large'
                         onClick={()=> setPassword(generator.generate({lenght:6}))}
                         >
                            Generate password
                            </Button>
                        <Input.Password 
                        size='large'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                     </div>
                     <Select defaultValue="Subscriber"
                      style={{margin:'10px 0px 10px 0px', width:'100%'}}
                      onChange={(e)=> setRole(e)}
                      >
                      <Select.Option value="Subscriber">Subscriber</Select.Option>
                      <Select.Option value="Author">Author</Select.Option>
                      <Select.Option value="Admin">Admin</Select.Option>
                     </Select>
                     <Checkbox checked={checked} onChange={(e)=> setChecked(e.target.checked)}>
                         Send the new user an email about their account.
                     </Checkbox>
                    
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
   </AdminLayout>
}
export default NewUser;