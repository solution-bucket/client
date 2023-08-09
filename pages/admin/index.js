import AdminLayout from '../../components/layout/AdminLayout';
import {  useState } from 'react';
import { Row, Col, Divider} from 'antd';
import Link from 'next/link';
import RenderProgres from '../../components/posts/RenderProgress';
import useNumbers from '../../hooks/useNumbers';


function Admin () {
    //state
   const {numbers} = useNumbers();
    
    return (
       <AdminLayout>
        <Row>
           
            <Col span={24}>
                 <Divider>
                    <h1 style={{ marginTop:'50px'}}>Statistics</h1>
                 </Divider>
            </Col>
                    
        </Row>

        <Row>
            {/**Courses */}
             <Col span={12} style={{ marginTop: 50, textAlign: "center",fontSize: 20}}>
               <RenderProgres number={numbers.courses} name="Courses"  link="admin/course/courses"/>
             </Col>

            {/**POST */}
             <Col span={12} style={{ marginTop: 50, textAlign: "center",fontSize: 20}}>
               <RenderProgres number={numbers.posts} name="Posts"  link="/admin/posts"/>
             </Col>
               {/**COMMENT */}
             <Col span={12} style={{ marginTop: 50, textAlign: "center",fontSize: 20}}>
               <RenderProgres number={numbers.comments} name="Comments"  link="/admin/comments"/>
             </Col>
               {/**CATEGORIES */}
             <Col span={12} style={{ marginTop: 50, textAlign: "center",fontSize: 20}}>
               <RenderProgres number={numbers.categories} name="Categories"  link="/admin/categories"/>
             </Col>
               {/**USERS */}
             <Col span={12} style={{ marginTop: 50, textAlign: "center",fontSize: 20}}>
               <RenderProgres number={numbers.users} name="Users"  link="/admin/users"/>
             </Col>
        </Row>
       </AdminLayout>
    )
}

export default Admin;