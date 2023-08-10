import { Col, Row ,Button, List, Input, Avatar, Badge} from 'antd';
import Link from 'next/link';
import {SyncOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/auth';
import dayjs from 'dayjs';

var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);


function Search () {
    const [allCourses, setAllCourses] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const router = useRouter();

    useEffect(()=>{
      fetchCourses();
     getTotal();
    },[]);

    useEffect(()=> {
   if(page ===1) return;
   loadMore()
    fetchCourses();

    },[page])
    const fetchCourses = async()=>{
        try {
          setLoading(true);
            const {data} = await axios.get(`/allcourses/${page}`);
             setCourses(data);
             setAllCourses([... allCourses, ...data]);
             setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

   const getTotal = async ()=> {
        try {
              const {data} = await axios.get("/courses-count");  
              setTotal(data);
              console.log("Total numbers of course is:", data);
        } catch (err) {
              console.log(err);
        }
   }
   const loadMore = async()=> {
      try {
       setLoading(true);
       const {data} = await axios.get(`/courses/${page}`);
       setAllCourses([... allCourses, ...data]);
       setLoading(false);
      } catch (err) {
       console.log(err);
       setLoading(false);
      }
   }
    const filterCourses = courses.filter((course) => course.name.toLowerCase().includes(keyword));

    
    return (
       <div style={{ width:'80%', margin:" auto 60px"}}>
         <Row>
            <Col span={24}>
                <div style={{marginTop:"60px"}}>
                    
                <h1 > <span style={{
                color:"blue",
                fontSize:"1rem"}}>  <Badge count={total}>
                <Avatar shape="square" size="large" />
              </Badge> </span> courses are available for now</h1>
                  <Input
                   placeholder='Search for course... eg: HTML for Beginers'
                   type='search'
                   value={keyword}
                   onChange={(e)=> setKeyword(e.target.value.toLowerCase())}
                  />
                  {loading? (
                     <SyncOutlined
                     spin
                      style={{ display:'block',textAlign:'center', fontSize:'70px',color:'blue'}}
                     />
                  ): (
                    <List
                    itemLayout='horizontal'
                    dataSource={filterCourses}
                    renderItem={(item) => (
                           <List.Item actions={[
                             <Link href={`/course/${item?.slug}#${item._id}`}><a>Read more... </a></Link>,
                            
                           ]}>
                           <List.Item.Meta 
                           description={`👨‍👦‍👦${item.instructor?.name} | 🕔${dayjs(item.createdAt).format("L LT")} `}
                           title={item.name}
                           />
                           </List.Item>
                    )}
                 />
                  )}
                  
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
 
       </div>
    )
}

export default Search;