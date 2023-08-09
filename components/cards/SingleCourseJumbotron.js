import SingleCourse from "../../pages/course/[slug]";
import { currencyFormatter } from "../../utils/helpers";
import { ThemeContext } from '../../context/theme';
import { ShareSocial }  from "react-share-social";

import { Badge, Modal, Button } from "antd";
import { LoadingOutlined,ShareAltOutlined, UploadOutlined ,SafetyOutlined, UserOutlined, CalendarOutlined } from "@ant-design/icons";
import { useState, useContext } from "react";


const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handleFreeEnrollment,
  enrolled,
  setEnrolled,
}) => {
  // destructure
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
  } = course;
  const [visible, setVisible] = useState(false);  // visibility state
  const [share, setShare] = useState(false);  // visibility state
  const [whatYouWillLearn, setWhatYouWillLearn] = useState(false);  // visibility state
  const [showMore, setShowMore] = useState(false);
const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className="">
     
      <div className="rowContent">
      <div>
          <img className="courseImage" src="/images/learn.png" />
          <Button
           
           onClick={() => setShare(true)}
           className="textCenter"
           type="secondary"
           shape="round"
           icon={<ShareAltOutlined />}
           size="large"
         >
         Share
         </Button>

          </div>
          <h1>{name}</h1>
          <div style={{marginRight:"88%"}}>
          <Button
           
           onClick={() => setVisible(true)}
           className="textCenter"
           type="warning"
           shape="round"
           icon={<UploadOutlined />}
           size="large"
         >
        Read the course description before enrolling
         </Button>
       
          </div>
        <div>
          {/* category */}
         <Badge
            count={category}
            style={{ backgroundColor: "#03a9f4" }}
          
          />
           {/* author */}
         <p><UserOutlined/>{instructor.name}</p>
          {/* updated at */}
          <p>Last udpated <CalendarOutlined/>{new Date(updatedAt).toLocaleDateString()}  {loading ? (
            <div>
              <LoadingOutlined />
            </div>
          ) : (
            <Button
           
              type="danger"
              shape="round"
              icon={<SafetyOutlined />}
              size="large"
              disabled={loading}
              onClick={handleFreeEnrollment}
            >
              {user
                ? enrolled.status
                  ? "Go to course"
                  : "Enroll"
                : "Login to enroll"}
            </Button>
          )}</p>
           <div className="jumbotron-content singlecourse-content">
          {/* title */}
          <div style={{ display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>
          {/* price */}
             
          </div>
          <div className="flexCourses">
          <div>
       
            </div>
          <div>
        <Modal
           width={750}
            title="Read the course description before enrolling."
            centered
            open={visible}
            onCancel={() => setVisible(false)}
            footer={null}
            style={{height:'800px', overflow:"auto", color:'brown', backgroundColor:'#fff'}}
          >

              {showMore ?(<div className="courseBG" dark={theme === 'light' ? false : true} 
                 dangerouslySetInnerHTML={{ __html: description && description}}
                />
                
                ):( <span><div className="courseBG" dark={theme === 'light' ? false : true}   
                  dangerouslySetInnerHTML={{ __html:description && description.substring(0, 520) }}
                   />
                   
                   </span> ) 
                   
                  }
          <Button style={{ backgroundColor:'red', padding:'8px', textAlign:'center',alignItems:'center',borderRadius:'20px',color:'#fff'}} onClick={()=> setShowMore(!showMore)}>{showMore ? "show less" : "show more"}</Button>

                  </Modal>
                 
              </div>
              <div className="setWhatYouWillLearn" style={{marginRight:"80%",marginTop:"-30px"}} >    
             
          </div>
              

            
              <Modal
           width={750}
            title="Share it friends / family members."
            centered
            visible={share}
            onCancel={() => setShare(false)}
            footer={null}
          >
            <ShareSocial  style={{marginTop:"30px"}} url={process.browser && window.location.href} 
        socialTypes={['facebook','twitter','reddit','linkedin','email']}
        onSocialButtonClicked={ data => console.log(data)} 
      />
      </Modal>
     
          </div>
        </div>
      
            </div>
          {/* enroll button */}
         
        </div>
      </div>
  );
};

export default SingleCourseJumbotron;
