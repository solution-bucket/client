import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
import { AuthContext } from "../../context/auth";
import { toast } from "react-hot-toast";
import { ShareSocial }  from "react-share-social";
import { AiOutlineShareAlt } from "react-icons/ai";
import { ThemeContext } from '../../context/theme';
import { Button, Modal } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  UploadOutlined,
  QuestionOutlined,
  CloseOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
const SingleCourse = ({ course }) => {
  // state 
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});

  // context
  const [auth, setAuth] = useContext(AuthContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  const [showMore, setShowMore] = useState(false);
  
  useEffect(() => {
    if (auth?.user && course) checkEnrollment();
  }, [auth?.user, course]);

  const checkEnrollment = async () => {
    const { data } = await axios.get(`/check-enrollment/${course._id}`);
    console.log("CHECK ENROLLMENT", data);
    setEnrolled(data);
  };

  const router = useRouter();
  const { slug } = router.query;

 
  const handleFreeEnrollment = async (e) => {
    // console.log("handle free enrollment");
    e.preventDefault();
    try {
      // check if user is logged in
      if (!auth?.user) router.push("/signin");
      // check if already enrolled
      if (enrolled.status)
        return router.push(`/subscriber/course/${enrolled.course.slug}`);
      setLoading(true);
      const { data } = await axios.post(`/free-enrollment/${course._id}`);
      toast(data.message);
      setLoading(false);
      router.push(`/subscriber/course/${data.course.slug}`);
    } catch (err) {
      toast("Enrollment failed. Try again.");
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
        <SingleCourseJumbotron
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
        user={auth?.user}
        loading={loading}
        handleFreeEnrollment={handleFreeEnrollment}
        enrolled={enrolled}
        setEnrolled={setEnrolled}
      />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`);
  return {
    props: {
      course: data,
    },
  };
}

export default SingleCourse;
