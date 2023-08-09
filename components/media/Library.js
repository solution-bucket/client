import MediaLibrary from './MediaLibrary';
import {Tabs} from 'antd';
const {TabPane} = Tabs.TabPane;
//const TabPane = Tabs.TabPane

const Library = ()=> {
  function callback(key) {
    console.log(key);
  }
    return (
       <Tabs defaultActiveKey="0"
       style={{ display: "flex", justifyContent: "space-between" }} onChange={callback}>
               <TabPane   tab="Media Library"  key="2">
                 <MediaLibrary/>
                </TabPane>
                
        </Tabs>
                           
    )
}
export default Library;