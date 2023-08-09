import axios from 'axios';
import Resizer from 'react-image-file-resizer';

 const resizeFile = (file)=> {
              return  new Promise((resolve) => {
                  Resizer.imageFileResizer(
                      file,
                      720,
                      400,
                      "JPEG",
                      100,
                      0,
                      (url)=> {
                          resolve(url);
                      },
                      "base64"
                  )
              });
              };
             export const uploadImage = async(file)=> {
              console.log(file);
              try {
                  const image = await resizeFile(file);
                  //console.log("IMAGE BASE64: ==>", image);
                  const {data} = await axios.post("/upload-image", {image});
                  console.log("Upload file response", data);
                  return data;
              } catch (err) {
                  console.log(err)
              }
              }