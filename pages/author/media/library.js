import AuthorLayout from '../../../components/layout/AuthorLayout';
import {Row,Col} from 'antd';
import MediaLibrary from '../../../components/media/MediaLibrary';


function AuthorMediaLibrary () {
    return (
       <AuthorLayout>
       <div style={{marginTop:'50px'}}>
       <Row>
              <Col span={24}>
               <div style={{padding: '100px', textAlign:'center'}}>
                   <MediaLibrary page="author" />
               </div>
              </Col>
       </Row>
        </div>
       </AuthorLayout>
    )
}

export default AuthorMediaLibrary;