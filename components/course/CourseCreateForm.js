import { useContext,useState, useEffect } from 'react';
import { Row,Col, Input,Select,Modal, Button, Image } from 'antd';
import dynamic from "next/dynamic";

// import ReactQuill  from ('react-quill');
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
const { Option } = Select;



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
const CourseCreateForm = ({
  setDescription,
  description,
  handleSubmit,
  handleChange,
  values,
  setValues,
 
}) => {
  
  const children = [];
  for (let i = 9.99; i <= 100.99; i++) {
    children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>);
  }
  return (
    <>
      {values && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Course Name"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
          
             <ReactQuill  
            value={description}
             modules={modules}  theme="snow" 
            onChange={(v) => { 
              setDescription(v)
                localStorage.setItem("description", JSON.stringify(v));
             }}
            placeholder="Tutorial description goes here..." 
            />
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <Select
                  style={{ width: "100%" }}
                  size="large"
                  value={values.paid}
                  onChange={(v) => setValues({ ...values, paid: v, price: 0 })}
                >
                  <Option value={true}>Paid</Option>
                  <Option value={false}>Free</Option>
                </Select>

              
            {values.paid && (
              <div className="form-group">
                <Select
                  defaultValue="$9.99"
                  style={{ widht: "100%" }}
                  onChange={(v) => setValues({ ...values, price: v })}
                  tokenSeparators={[,]}
                  size="large"
                >
                  {children}
                </Select>
              </div>
            )}
           
         
              </div>
            </div>

          </div>

          <div className="form-group">
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Category"
              value={values.category}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col">

              <Button
                onClick={handleSubmit}
                disabled={values.loading || values.uploading}
                className="btn btn-primary"
                loading={values.loading}
                type="primary"
                size="large"
                shape="round"
              >
                {values.loading ? "Saving..." : "Save & Continue"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default CourseCreateForm;
