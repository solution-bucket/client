import UploadFile from './UploadFile';
import {Tabs} from 'antd';
const {TabPane} = Tabs.TabPane;
//const TabPane = Tabs.TabPane

const UploadMedia = ()=> {
  function callback(key) {
    console.log(key);
  }
    return (
       <Tabs defaultActiveKey="0">
               <TabPane  tab="Upload File" key="1">
                 <UploadFile/>
               </TabPane>
        </Tabs>
                           
    )
}
export default UploadMedia;