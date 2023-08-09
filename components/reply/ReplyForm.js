import {useContext} from 'react';
import {AuthContext} from '../../context/auth';
import {Input, Button, List}  from 'antd';
const {TextArea} = Input;


const ReplyForm = ({reply, setReply, loading, handleSubmitReply})=> {
const [auth, setAuthContext] = useContext(AuthContext);
           
  return(
      <>
          <br/>
          <TextArea 
          placeholder='Reply to this  comment ...'
         value={reply}
         onChange={(e)=> setReply(e.target.value)} 
         disabled={auth?.user === null && auth?.token  === ""}
/>
         
          <Button  
           disabled={reply === ''}
           loading={loading} 
          style={{marginTop:"4px"}}
          onClick={handleSubmitReply}
          type='primary'>send</Button>
     </>
   )
}

export default ReplyForm;