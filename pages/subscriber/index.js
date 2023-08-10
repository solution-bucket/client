import SubscriberLayout from '../../components/layout/SubscriberLayout';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Tooltip,Carousel, Button  } from "antd";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined, UserAddOutlined } from "@ant-design/icons";
import { AuthContext } from '../../context/auth';

function Subscriber () {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useContext(AuthContext);
     const {user} = auth;
    const contentStyle1 = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };

    useEffect(()=> {
      if(auth?.token){
        loadCourse()
      }
    },[auth?.token])
    const loadCourse = async ()=> {
        try {
          setLoading(true);
          const {data} = await  axios.get('/user-courses');
          setCourses(data);
          setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
               return (
                <SubscriberLayout>
              <div style={{marginTop:'80px'}}>
                   <h1>🖐️ Hello <UserAddOutlined/>{' '} {auth?.user?.name}</h1>
                   {user?.courses?.length === 0 ? (
                    <>
                   <h3 style={{color:'orange'}}>There is no course for you now</h3>
                    <Carousel autoplay>
                      <div>
                        <h2><span style={{color:'blue'}}>Great!🖐️</span> so happy to meet you here, my hope is that we work and achieve together as team.</h2>
                        <h3 style={contentStyle1}>

                          The purpose of this platform is to exchange knownledge and grow  professionally 📘🌳
                          <Link
                  href={'/dashboard'}
                  className="pointer"
                >
                 <Button className='btn btn-primary'> Browse free course</Button>
                </Link>
                        </h3>
                      </div>
   
                     </Carousel>
                    </>
                   
                   ): null}
                   <hr/>
                   
                   {loading ? (
                    <SyncOutlined
                    spin
                     style={{ display:'block',textAlign:'center', fontSize:'70px',color:'blue'}}
                    />
                  
                ): courses && courses.map((course)=> (
                  
                  <Link
                  href={`/subscriber/course/${course?.slug}`}
                  className="pointer"
                >
                  <Tooltip title={`${course?.name}`}>
                    
                    <div key={course._id} >
                <img style={{width:'80px', height:'40px', borderRadius:'5px',objectFit:'cover'}} src="/images/laptop-computer.jpg" alt='course image'/>
                 <div className="col">
                  <Link
                    href={`/subscriber/course/${course.slug}`}
                    className="pointer"
                  >
                    <a>
                      <h5 className="mt-2 text-primary">{course.name}</h5>
                    </a>
                  </Link>
                  <p style={{ marginTop: "-10px" }}>
                    {course.lessons.length} lessons
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}
                  >
                    By {course.instructor.name}
                  </p>
                </div>
                <div className="col-md-3 mt-3 text-center" >
                     <Link href={`/subscriber/course/${course.slug}`} s>
                       <a>
                       <Tooltip title="START LEARNING NOW">
                         <PlayCircleOutlined style={{marginBottom:'20%', fontSize:"2rem"}} className="h2 pointer text-primary" />
                         </Tooltip>
                       </a>
                     </Link>
                   </div>
                  <hr/>

                    </div>
                  
                    </Tooltip>
                    </Link>
                 ))}
                 <hr/>
              </div>
        
       </SubscriberLayout>
    )
}

export default Subscriber;