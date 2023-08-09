import AdminLayout from '../../../components/layout/AdminLayout';
import {Row,Col} from 'antd';
import UploadFile from '../../../components/media/UploadFile';
function NewMedia () {
    return (
       <AdminLayout>
       <div style={{marginTop:'50px'}}>
       <Row>
              <Col span={24}>
               <div style={{padding: '100px', textAlign:'center'}}>
                   <UploadFile redirectToLibrary={true}/>
               </div>
              </Col>
       </Row>
        </div>
       </AdminLayout>
    )
}

export default NewMedia;