import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../../components/layout/AdminLayout";
import axios from "axios";
import { Avatar, Tooltip, Button, Modal, List } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  UploadOutlined,
  QuestionOutlined,
  CloseOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import AddLessonForm from "../../../../components/course/AddLessonForm";
import { toast } from "react-hot-toast";
import Item from "antd/lib/list/Item";

const CourseView = () => {
  const [course, setCourse] = useState({});
  // for lessons
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: {},
  });
  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
  const [progress, setProgress] = useState(0);
  // student count
  const [students, setStudents] = useState(0);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  useEffect(() => {
    course && studentCount();
  }, [course]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/course/${slug}`);
    setCourse(data);
  };

  const studentCount = async () => {
    const { data } = await axios.post(`/instructor/student-count`, {
      courseId: course._id,
    });
    console.log("STUDENT COUNT => ", data);
    setStudents(data.length);
  };

  // FUNCTIONS FOR ADD LESSON
  const handleAddLesson = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/course/lesson/${slug}/${course.instructor._id}`,
        values
      );
     
      // console.log(data)
      setValues({ ...values, title: "", content: "", video: {} });
      setProgress(0);
      setUploadButtonText("Upload video");
      setVisible(false);
      setCourse(data);
      toast("Lesson added");
    } catch (err) {
      console.log(err);
      toast("Lesson add failed");
    }
  };

  const handlePublish = async (e, courseId) => {
    try {
      let answer = window.confirm(
        "Once you publsih your course, it will be live  for students to enroll"
      );
      if (!answer) return;
      const { data } = await axios.put(`/course/publish/${courseId}`);
      setCourse(data);
      toast("Congrats! Your course is live");
    } catch (err) {
      toast("Course publish failed. Try again");
    }
  };

  const handleUnpublish = async (e, courseId) => {
    try {
      let answer = window.confirm(
        "Once you unpublsih your course, it will no be available for users to enroll"
      );
      if (!answer) return;
      const { data } = await axios.put(`/course/unpublish/${courseId}`);
      setCourse(data);
      toast("Your course is unpublished");
    } catch (err) {
      toast("Course publish failed. Try again");
    }
  };

  return (
    <AdminLayout>
      <div style={{ marginTop:"80px", marginLeft:"6px"}}>
        {course && (
          <div>
            <div>
              <div className="media-body">
                <div className="row">
                  <div className="col">
                    <h2 className="mt-2 text-primary">{course?.name}</h2>
                    <p style={{ marginTop: "-10px" }}>
                      {course?.lessons && course?.lessons.length} Lessons
                    </p>
                    <p style={{ marginTop: "-15px", fontSize: "10px" }}>
                      {course?.category}
                    </p>
                  </div>

                 
                   <div className="smaillContent">
                   <div>
                    <Tooltip title={`${students} Enrolled`}>
                      <UserSwitchOutlined style={{margin: '10px'}}/>
                    </Tooltip>

                    <Tooltip title="Edit">
                      <EditOutlined
                      style={{margin: '10px', color:'gold'}}
                        onClick={() =>
                          router.push(`/admin/course/edit/${slug}`)
                        }
                      
                      />
                    </Tooltip>
                   {course?.lessons && course?.lessons.length < 5 ? (
                     
                     <Tooltip title="Min 5 lessons required to publish">
                       <QuestionOutlined style={{margin: '10px', color:'red'}} />
                     </Tooltip>
                   ) : course.published ? (
                     <Tooltip title="Unpublish">
                       <CloseOutlined
                         onClick={(e) => handleUnpublish(e, course._id)}
                         className="h5 pointer text-danger"
                       />
                     </Tooltip>
                   ) : (
                     <Tooltip title="Publish">
                       <CheckOutlined
                         onClick={(e) => handlePublish(e, course._id)}
                         className="h5 pointer text-success"
                       />
                     </Tooltip>
                   )}
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div>
                {/* <ReactMarkdown source={course.description} /> */}
              </div>
            </div>
            <div    style={{marginRight:"15%"}}>
              <Button
           
                onClick={() => setVisible(true)}
                className="textCenter"
                type="primary"
                shape="round"
                icon={<UploadOutlined />}
                size="large"
              >
                Add Lesson
              </Button>
            </div>

            <br />

            <Modal
           
             width={750}
              title="+ Add Lesson"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <AddLessonForm
                values={values}
                setValues={setValues}
                handleAddLesson={handleAddLesson}
                uploading={uploading}
                uploadButtonText={uploadButtonText}
                progress={progress}
              />
            </Modal>

            <div>
              <div>
                <h4>
                  {course && course.lessons && course.lessons.length} Lessons
                </h4>
                <List
                  itemLayout="horizontal"
                  dataSource={course && course.lessons}
                  renderItem={(item, index) => (
                    <Item>
                      <Item.Meta
                        avatar={<Avatar>{index + 1}</Avatar>}
                        title={item.title}
                      ></Item.Meta>
                    </Item>
                  )}
                ></List>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default CourseView;
