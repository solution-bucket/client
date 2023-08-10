import { Row, Col } from "antd";
import ContactForm from "../components/comments/Contact";
const Contact =()=> {
  return(
  <div>
        <Row>
        <Col span={12} offset={6}>
                 <ContactForm/>
        </Col>
    </Row>
 </div>
   
  )
}
export default Contact;