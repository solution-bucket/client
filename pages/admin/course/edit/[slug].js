import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../../../components/layout/AdminLayout";
import CourseCreateForm from "../../../../components/course/CourseCreateForm";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { List, Avatar, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateLessonForm from "../../../../components/course/UpdateLessonForm";

const { Item } = List;

const savedContent = ()=> {
  if(process.browser) {
      if(localStorage.getItem('description')) {
          return JSON.parse(localStorage.getItem("description"));
      }
  }
}
const savedWhatToexpect = ()=> {
  if(process.browser) {
      if(localStorage.getItem('whatToexpect')) {
          return JSON.parse(localStorage.getItem("whatToexpect"));
      }
  }
}
const CourseEdit = () => {
  // state
  const [values, setValues] = useState({
    name: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
  });
  const [description, setDescription] = useState(savedContent())
  const [whatToexpect, setWhatToexpect] = useState(savedWhatToexpect())
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  // state for lessons update
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({});

  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  // router
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/course/${slug}`);
    console.log(data);
    if (data) setValues(data);
    if (data && data.image) setImage(data.image);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(values);
      const { data } = await axios.put(`/course/${slug}`, {
        ...values,
        description,
      });
      toast("Course updated!");
      router.push("/admin/course/create");
    } catch (err) {
      toast(err.response.data);
    }
  };

  const handleDrag = (e, index) => {
    // console.log("ON DRAG => ", index);
    e.dataTransfer.setData("itemIndex", index);
  };

  const handleDrop = async (e, index) => {
    // console.log("ON DROP => ", index);

    const movingItemIndex = e.dataTransfer.getData("itemIndex");
    const targetItemIndex = index;
    let allLessons = values.lessons;

    let movingItem = allLessons[movingItemIndex]; // clicked/dragged item to re-order
    allLessons.splice(movingItemIndex, 1); // remove 1 item from the given index
    allLessons.splice(targetItemIndex, 0, movingItem); // push item after target item index

    setValues({ ...values, lessons: [...allLessons] });
    // save the new lessons order in db
    const { data } = await axios.put(`/course/${slug}`, {
      ...values,
    });
    // console.log("LESSONS REARRANGED RES => ", data);
    toast("Lessons has been rearranged successfully");
  };

  const handleDelete = async (index) => {
    const answer = window.confirm("Are you sure you want to delete?");
    if (!answer) return;
    let allLessons = values.lessons;
    const removed = allLessons.splice(index, 1);
    // console.log("removed", removed[0]._id);
    setValues({ ...values, lessons: allLessons });
    // send request to server
    const { data } = await axios.put(`/course/${slug}/${removed[0]._id}`);
    console.log("LESSON DELETED =>", data);
  };

  /**
   * lesson update functions
   */

 
  const handleUpdateLesson = async (e) => {
    // console.log("handle update lesson");
    e.preventDefault();
    const { data } = await axios.put(
      `/course/lesson/${slug}/${current._id}`,
      current
    );
    setVisible(false);
    // update ui
    if (data.ok) {
      let arr = values.lessons;
      const index = arr.findIndex((el) => el._id === current._id);
      arr[index] = current;
      setValues({ ...values, lessons: arr });
      toast("Lesson updated");
    }
  };

  return (
    <AdminLayout>
      <div style={{ marginTop:'120px'}}>
      <h4 className="jumbotron text-center text-primary square createCourse">Update Course</h4>
      {/* {JSON.stringify(values)} */}
      <div className="pt-3 pb-3">
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          editPage={true}
          description={description}
          setDescription={setDescription}
        />
      </div>
      
      <hr />

      <div className="row pb-5">
        <div className="col lesson-list">
          <h4>{values && values.lessons && values.lessons.length} Lessons</h4>
          <List
            onDragOver={(e) => e.preventDefault()}
            itemLayout="horizontal"
            dataSource={values && values.lessons}
            renderItem={(item, index) => (
              <Item
                draggable
                onDragStart={(e) => handleDrag(e, index)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <Item.Meta
                  onClick={() => {
                    setVisible(true);
                    setCurrent(item);
                  }}
                  avatar={<Avatar>{index + 1}</Avatar>}
                  title={item.title}
                ></Item.Meta>

                <DeleteOutlined
                  onClick={() => handleDelete(index)}
                  className="text-danger float-right"
                />
              </Item>
            )}
          ></List>
        </div>
      </div>

      <Modal
        title="Update lesson"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <UpdateLessonForm
          current={current}
          setCurrent={setCurrent}
          handleUpdateLesson={handleUpdateLesson}
          progress={progress}
          uploading={uploading}
          
        />
      </Modal>
      </div>
    </AdminLayout>
  );
};

export default CourseEdit;
