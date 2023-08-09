import { Button, Progress, Tooltip } from "antd";
import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";

const AddLessonForm = ({
  values,
  setValues,
  handleAddLesson,
  uploading,
  uploadButtonText,
  progress,
}) => {
  return (
    <div className="lessoncontainer">
      <form onSubmit={handleAddLesson}>
        <div className="lessonFlex">
        <input
          type="text"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          value={values.title}
          placeholder="Lesson Title"
          autoFocus
          required
        />

        <textarea
          cols="12"
          rows="7"
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          value={values.content}
          placeholder="Lesson content goes here..."
        />
        </div>
       

        

        {progress > 0 && (
          <Progress
            className="d-flex justify-content-center pt-2"
            percent={progress}
            steps={10}
          />
        )}

        <Button
        disabled={!values.content || !values.title}
          onClick={handleAddLesson}
          className="col mt-3"
          size="large"
          type="primary"
          loading={uploading}
          shape="round"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddLessonForm;
