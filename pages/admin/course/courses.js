import { useState,useContext, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { AuthContext } from "../../../context/auth";
const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(auth) loadCourses();
  }, [auth]);

  const loadCourses = async () => {
    const { data } = await axios.get("/instructor-courses");
    setCourses(data);
  };

  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  return (
    <AdminLayout>
     <h1 style={{ color:'blue', margin:'2rem', backgroundColor:"black",
      height:'50px', width:'335px', textAlign:'center'}}>Instructor Dashboard</h1>
      {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}

      {courses &&
        courses.map((course) => (
          <>
            <div  className="rowcontent" >
            

              <div className="media-body">
                <div>
                  <div className="col">
                    <Link
                      href={`/admin/course/view/${course?.slug}`}
                      className="pointer"
                    >
                      <a className="text-primary">
                        <h3 className="pt-2 headers">{course?.name}</h3>
                      </a>
                    </Link>
                    <p style={{ marginTop: "-10px" }}>
                      {course?.lessons.length} Lessons
                    </p>

                    {course?.lessons.length < 5 ? (
                      <p style={myStyle} className="text-warning">
                        At least 5 lessons are required to publish a course
                      </p>
                    ) : course?.published ? (
                      <p style={myStyle} className="text-success">
                        Your course is live in the marketplace
                      </p>
                    ) : (
                      <p style={myStyle} className="text-success">
                        Your course is ready to be published
                      </p>
                    )}
                  </div>

                  <div className="text-center">
                    {course?.published ? (
                      <Tooltip title="Published">
                        <CheckCircleOutlined className=" pointer text-success" />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Unpublished">
                        <CloseCircleOutlined className=" pointer text-warning" />
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </AdminLayout>
  );
};

export default InstructorIndex;
