import AdminLayout from '../../../components/layout/AdminLayout';
import EditPostComponent from '../../../components/posts/EditPostComponent';
function EditPost () {
    
  
    return (
       <AdminLayout>
        <div style={{ marginTop:"40px"}}>
        <EditPostComponent/>
        </div>
       </AdminLayout>
    )
}

export default EditPost;