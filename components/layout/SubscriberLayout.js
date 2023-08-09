import {Layout}  from 'antd';
import { useContext, useEffect, useState } from 'react';
import SubscriberNav from '../nav/SubscriberNav';
const {Content,Sider} = Layout;
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import LoadingToRedirect from '../LoadingToRedirect';


function SubscriberLayout ({children}) {
    const [auth, setAuth] = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
   const router = useRouter();

    useEffect(()=>{
        // if(auth?.user?.role !== 'Admin') {
        //    router.push("/");
        // }else {
        //     setLoading(false);
        // }
       if(auth?.token) getCurrentAuthor();
    },[auth?.token]);

    const getCurrentAuthor = async()=> {
        try {
            const {data} = await axios.get("/current-subscriber");
            setLoading(false);
        } catch (err) {
            console.log(err);
            router.push("/");
        }
    }
 if(loading) {
    return<LoadingToRedirect />
 }
    return (
        <Layout>
          <SubscriberNav/>
            <Layout>
                <div style={{ margin:"20px"}}>
                <Content>
                {children}
            </Content>
                </div>
            </Layout>
        </Layout>
    )
}

export default SubscriberLayout;