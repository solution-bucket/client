import {Layout}  from 'antd';
import { useContext, useEffect, useState } from 'react';
import AdminNav from '../nav/AdminNav';
const {Content,Sider} = Layout;
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import LoadingToRedirect from '../LoadingToRedirect';



function AdminLayout ({children}) {
    const [auth, setAuth] = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
   const router = useRouter();

    useEffect(()=>{
        // if(auth?.user?.role !== 'Admin') {
        //    router.push("/");
        // }else {
        //     setLoading(false);
        // }
       if(auth?.token) getCurrentAdmin();
    },[auth?.token]);

    const getCurrentAdmin = async()=> {
        try {
            const {data} = await axios.get("/current-admin");
            setLoading(false);
        } catch (err) {
            console.log(err);
            router.push("/");
        }
    }
 if(loading) {
    return <LoadingToRedirect />;
 }
    return (
        <Layout>
          <AdminNav/>
            <Layout>
            <Content >
                {children}
            </Content>
            </Layout>
        </Layout>
    )
}

export default AdminLayout;