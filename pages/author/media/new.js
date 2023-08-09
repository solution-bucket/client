import AuthorLayout from '../../../components/layout/AuthorLayout';
import {Row,Col} from 'antd';
import UploadFile from '../../../components/media/UploadFile';
function NewMedia () {
    return (
       <AuthorLayout>
       <div style={{marginTop:'50px'}}>
       <Row>
              <Col span={24}>
               <div style={{padding: '100px', textAlign:'center'}}>
                   <UploadFile redirectToLibrary={true} page="author" />
               </div>
              </Col>
       </Row>
        </div>
       </AuthorLayout>
    )
}

export default NewMedia;