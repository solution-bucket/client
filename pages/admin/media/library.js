import AdminLayout from '../../../components/layout/AdminLayout';
import {Row,Col} from 'antd';
import MediaLibrary from '../../../components/media/MediaLibrary';


function AdminMediaLibrary () {
    return (
       <AdminLayout>
       <div style={{marginTop:'50px'}}>
       <Row>
              <Col span={24}>
               <div style={{padding: '100px', textAlign:'center'}}>
                   <MediaLibrary />
               </div>
              </Col>
       </Row>
        </div>
       </AdminLayout>
    )
}

export default AdminMediaLibrary;