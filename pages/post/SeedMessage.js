import { WhatsAppOutlined } from '@ant-design/icons'
import {Input, Button, List}  from 'antd';
import { number } from 'prop-types';
const {TextArea} = Input;
import { useState, useContext } from 'react';
import {AuthContext} from '../../context/auth';

const saveContact = ()=> {
  if(process.browser) {
      if(localStorage.getItem('post-contact')) {
          return JSON.parse(localStorage.getItem("post-contact"));
      }
  }
}

const textFieldInputLabelStyle = {
     fontSize: "0.9em",
     alignSelf: "center",
     justifySelf: "center",
   };
   
   const textFieldStyle = {
     width: "230px",
   };

const SendMessages = ({contact}) => {
     const [auth, setAuthContext] = useContext(AuthContext);

     const CHARACTER_LIMIT = 100;
   
     const [numberEmptyError, setNumberEmptyError] = useState(false);
     const [messageEmptyError, setMessageEmptyError] = useState(false);
   
     const [formData, setFormData] = useState({
       mobileNumber: "0888214521",
       message: "",
     });
   
     const { mobileNumber, message } = formData;
   
     const onChange = (e) => {
       e.preventDefault();
       setFormData({
         ...formData,
         [e.target.name]: e.target.value,
       });
     };
   
     const onSubmit = (e) => {
          e.preventDefault();
          if (mobileNumber.length < 1) {
            setNumberEmptyError(true);
            setTimeout(() => setNumberEmptyError(false), 3000);
          } else if (message.length < 1) {
            setMessageEmptyError(true);
            setTimeout(() => setMessageEmptyError(false), 3000);
          } else {
            // Regex expression to remove all characters which are NOT alphanumeric
             contact = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
        
            // Appending the phone number to the URL
            let url = `https://web.whatsapp.com/send?phone=${contact}`;
        
            // Appending the message to the URL by encoding it
            url += `&text=${encodeURI(message)}&app_absent=0`;
        
            // Open our newly created URL in a new tab to send the message
            window.open(url);
          }
        };
   
     return (
       <div className="communication">
         <div className="whatsapp-card app">
           <div className="title flex_middle">
             <div style={{ marginRight: "0.5em" }}>
             <WhatsAppOutlined  style={{color:'green', fontSize:'50px'}}/>
             </div>
             <div>Send Message</div>
           </div>
           {numberEmptyError && (
             <div className="errors">Mobile number cannot be empty!</div>
           )}
           {messageEmptyError && (
             <div className="errors">Message cannot be empty!</div>
           )}
           {!numberEmptyError && !messageEmptyError && (
             <div className="errors-null">.</div>
           )}
           <div className="search_contact app">
             <Input
               error={numberEmptyError}
               label="Mobile Number"
               placeholder="Mobile Number"
               name="mobileNumber"
               value={mobileNumber}
               onChange={onChange}
               size="small"
               disabled={auth?.user === null && auth?.token  === ""}
               style={{
                 margin: "1em 0em",
               }}
               inputProps={{
                 style: textFieldStyle,
               }}
               InputLabelProps={{
                 style: textFieldInputLabelStyle,
               }}
               required
             />
           </div>
           <div className="message app" style={{ marginTop: "1.5em" }}>
             <TextArea
          disabled={auth?.user === null && auth?.token  === ""}

             rows={5}
             cols={4}
               multiline
               maxRows={4}
               label="Message"
               placeholder="HI! can i get more info about ..." 
               size="small"
               InputLabelProps={{
                 style: textFieldInputLabelStyle,
               }}
               inputProps={{
                 style: {
                   width: "230px",
                   height: "90px",
                 },
                 maxLength: CHARACTER_LIMIT,
               }}
               FormHelperTextProps={{
                 style: {
                   margin: 0,
                   padding: "0 0 0 5px",
                   fontSize: 10,
                 },
               }}
               name="message"
               value={message}
               onChange={onChange}
               required
               error={message.length > CHARACTER_LIMIT - 1 || messageEmptyError}
             />
             <span>{
                 !(message.length > CHARACTER_LIMIT - 1)
                   ? `${message.length}/${CHARACTER_LIMIT}`
                   : "Max length exceeded"
               }</span>
           </div>
           <div style={{ marginTop: "1.5em" }}>
             <Button
             style={{height:'40px', borderRadius:"5px",color:"#FFF", width:"150px",backgroundColor:'green', padding:'10px'}}
               onClick={onSubmit}
               variant="outlined"
               color="success"
               size="small"
            disabled={message === '' }

             >
               Send
             </Button>
           </div>
         </div>
       </div>
     );
   };
   export default SendMessages;