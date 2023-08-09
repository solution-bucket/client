import {useContext, useEffect, useState} from 'react';
import {Row, Col, Button, Image,Divider, Input} from 'antd';
import Media from '../components/media/MediaLibrary'
import UploadFile from '../components/media/UploadFile'
import { MediaContext } from '../context/media';
import axios from 'axios';
import { toast, Toast } from 'react-hot-toast';
import AdminLayout  from '../components/layout/AdminLayout';
import Library from '../components/media/Library';

const useHome = () => {
              //state
   const [media, setMedia] = useContext(MediaContext);
   const [title, setTitle] = useState('')
   const [subtitle, setSubTitle] = useState('')
   const [loading, setLoading] = useState(false)
   const [fullWidthImage, setFullWidthImage] = useState('');

   useEffect(()=> {
     loadHomePage();
   },[]);
   const loadHomePage =async ()=> {
       try {
              setLoading(true);
          const {data} = await axios.get("/page/home");
//           console.log(data);
        setTitle(data?.title);
        setSubTitle(data?.subtitle);
        setFullWidthImage(data?.fullWidthImage);
        setLoading(false);
       } catch (err) {
    console.log(err);
    setLoading(false);
       }
   }
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
   return{
              title, 
              subtitle,
              fullWidthImage,
              setTitle,
              setSubTitle,
              setFullWidthImage}
}
export default useHome;