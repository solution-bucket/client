import AuthorLayout from '../../../components/layout/AuthorLayout';
import EditPostComponent from '../../../components/posts/EditPostComponent';
function EditPost () {
    
  
    return (
       <AuthorLayout>
        <div style={{ marginTop:"40px"}}>
        <EditPostComponent page="author"/>
        </div>
       </AuthorLayout>
    )
}

export default EditPost;