import axios from "axios";
import {Row, Col, Button, Card, Avatar} from 'antd';
import CourseCard from "../components/cards/CourseCard";
import Link from 'next/link';
import Clock from "../clock";
const {Meta} = Card;
import { useState, useEffect } from "react";
const Dashboard = ({ courses }) => {
  //state
  const [allCourses, setAllCourses] = useState(courses);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  useEffect(()=> {
       getTotal();
  },[]);

  const getTotal = async()=> {
     try {
       const {data} = await axios.get('/courses-count');
       setTotal(data);
     } catch (err) {
      console.log(err);
     }
  }
  useEffect(()=> {
    if(page === 1) return;
    loadMore();
},[page])

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

  return <div style={{marginTop:'50px'}}>
    <>
    
      <h1 className="course_heading">
        {/* <SearchIterm /> */}
          Students Educational Platform   
        <div>
         
        </div>
      </h1>
      <div>
<Row>

            {allCourses.map((course) => (
               <Col xs={24} xl={8} style={{marginTop:"5px", marginBottom:"5px",}}>
             <Link href={`/course/${course.slug}`}>
              <div className="cardComponent">
              <Card 
              hoverable 
              cover={
              <Avatar shape='square'
               style={{height:'200px', width:"680px", backgroundColor:'blueviolet'}}
               src="/images/learn.png"
                alt={course.name} />
              }
              >
              <Meta title={course.name} />
              </Card>
              </div>
            
             </Link>
           </Col>
            ))}
    
 </Row>
            {allCourses?.length < total && (
  <Row>
  <Col span={24} style={{textAlign:'center', padding:'10px'}}>
           <Button size='large' type='primary' 
           loading={loading}
           onClick={()=> setPage(page + 1)}
           >Load More Courses</Button>
       </Col>
 </Row>
 )}
        </div>
    </>
  
  </div>
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses/1`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Dashboard;
