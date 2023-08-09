import { Modal, Form, Input, Button} from 'antd'
import { EditOutlined } from '@ant-design/icons';

import React from 'react'

const CategoryUodateModal = ({visible, setVisible, handleUpdate, loading,updatingCategory}) => {
  return (
    <Modal title="Updating category" visible={visible} 
    footer={null} onCancel={()=> setVisible(false)}
    
    >
         <Form onFinish={handleUpdate} fields={[
           {
            name:["name"], value: updatingCategory.name
           }
         ]}>
            <Form.Item name="name">
              <Input
                prefix={<EditOutlined className="site-form-item-icon" />}
                placeholder="Give it a name"
              />
            </Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Update category
            </Button>
          </Form>
    </Modal>
  )
}

export default CategoryUodateModal
