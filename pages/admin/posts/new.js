import AdminLayout from "../../../components/layout/AdminLayout";
import NewPostComponent from "../../../components/posts/NewPostComponent";
function NewPost () {
    
    return (
       <AdminLayout>
        <div style={{ marginTop:"40px"}}>
        <NewPostComponent />
        </div>
       </AdminLayout>
    )
}

export default NewPost;