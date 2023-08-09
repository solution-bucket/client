import AuthorLayout from "../../../components/layout/AuthorLayout";
import NewPostComponent from "../../../components/posts/NewPostComponent";
function NewPost () {
    
    return (
       <AuthorLayout>
        <div style={{ marginTop:"40px"}}>
        <NewPostComponent page="author" />
        </div>
       </AuthorLayout>
    )
}

export default NewPost;