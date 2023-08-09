import { List } from "antd";
import Link from "next/link";
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';

const PostList =({posts, handleDelete,handleEdit}) => {
    return (
              <List 
              itemLayout='horizontal'
              dataSource={posts}
              renderItem={(item) => (
                 <List.Item
                 actions={[
                     <a onClick={()=> handleEdit(item)}><EditOutlined/></a>,
                     <a  onClick={()=> handleDelete(item)}><DeleteOutlined/></a>
                 ]}
                 >
                     <List.Item.Meta 
                     title={item.title}
                     />
                 </List.Item>
              )}
              />
    )
}
export default PostList;