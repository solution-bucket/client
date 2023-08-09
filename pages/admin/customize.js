import {useContext, useEffect, useState} from 'react';
import {Row, Col, Button, Image,Divider, Input} from 'antd';
import Media from '../../components/media/MediaLibrary'
import UploadFile from '../../components/media/UploadFile'
import { MediaContext } from '../../context/media';
import axios from 'axios';
import { toast, Toast } from 'react-hot-toast';
import AdminLayout  from '../../components/layout/AdminLayout';
import Library from '../../components/media/Library';
import useHome from '../../hooks/useHome';
const Customize = () => {
              //state
   const [media, setMedia] = useContext(MediaContext);
   // const [title, setTitle] = useState('')

   // const [subtitle, setSubTitle] = useState('')
   const [loading, setLoading] = useState(false)
   // const [fullWidthImage, setFullWidthImage] = useState('');
   const { 
      title, 
      subtitle,
      fullWidthImage,
      setTitle,
      setSubTitle,
      setFullWidthImage} = useHome();

//    useEffect(()=> {
//      loadHomePage();
//    },[]);
//    const loadHomePage =async ()=> {
//        try {
//               setLoading(true);
//           const {data} = await axios.get("/page/home");
// //           console.log(data);
//         setTitle(data.title);
//         setSubTitle(data.subtitle);
//         setFullWidthImage(data.fullWidthImage);
//         setLoading(false);
//        } catch (err) {
//     console.log(err);
//     setLoading(false);
//        }
//    }
   const handleSave = async ()=> {
     try {
              setLoading(true);
           const {data} = await axios.post('/page', {
              page:"home",
              title,
              subtitle,
              fullWidthImage: media?.selected?._id
           });
           setLoading(false);
           toast.success("you have successfully updated your site");
           console.log(data);
           setLoading(false);
     } catch (err) {
    console.log(err);
    toast.error("Updating error")

     }
   }
   return <AdminLayout>
              <div style={{marginTop:'50px'}}>
              <Row>
                 <Col span={24}>
                      <Divider>
                              <h2>Customize Home Page</h2>
                              <p>set full width image title and subtitle</p>
                      </Divider>
                 </Col>
                 <Col span={18}>
                            <UploadFile/>
                            <Input style={{ margin:'20px 0px 20px 0px'}}
                            size="large"
                            placeholder='Give it a title'
                            value={title}
                            onChange={((e)=>  setTitle(e.target.value))}
                            />
                            <Input
                            size="large"
                            placeholder='Subtitle'
                            value={subtitle}
                            onChange={((e)=>  setSubTitle(e.target.value))}
                            />
                            <Button type='primary' onClick={handleSave}
                            style={{ margin:'20px 0px 20px 0px'}}
                            loading={loading}
                            block
                            >Save</Button>
                 </Col>
                 <Col span={6}>
                            <div style={{margin:'40px 0px 0px 20px'}}>
                              {media?.selected? (
                                 <Image width="100%" src={media?.selected?.url} />
                              ): fullWidthImage ? (
                               <Image width="100%" src={fullWidthImage?.url} />
                              ): ''}
                            </div>
                            <Library/>
                 </Col>
              </Row>
              </div>
             </AdminLayout>
}
export default Customize;