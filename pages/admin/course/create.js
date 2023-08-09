import { useState } from "react";
import axios from "axios";
import AdminLayout from "../../../components/layout/AdminLayout";
import CourseCreateForm from "../../../components/course/CourseCreateForm";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};
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
const CourseCreate = () => {
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
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  // router
  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(values);
      const { data } = await axios.post("/course", {
        description,
        ...values,
      });
      toast("Great! Now you can start adding lessons");
      router.push("/admin/course/courses");
    } catch (err) {
      toast(err.response.data);
    }
  };

  return (
    <AdminLayout>
      <h1 className="createCourse">Create Course</h1>
      <div  style={{ margin:"2%"}}>
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          uploadButtonText={uploadButtonText}
          setDescription={setDescription}
          description={description}
        
        />
      </div>
    </AdminLayout>
  );
};

export default CourseCreate;
