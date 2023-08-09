import {useContext} from 'react';
import {AuthContext} from '../../context/auth';
import {Input, Button, List}  from 'antd';
const {TextArea} = Input;
const CommentForm = ({comment,setComment, loading, handleSubmit})=> {
              const [auth, setAuthContext] = useContext(AuthContext);
           
  return(
      <>
          <br/>
          <TextArea 
          placeholder='Leave a comment ...'
          value={comment}
          rows='4'
          onChange={(e)=> setComment(e.target.value)} 
          disabled={auth?.user === null && auth?.token  === ""}
          maxLength={200}
          />
         
          <Button  
          disabled={comment === ''}
          loading={loading} 
          style={{marginTop:"4px"}}
          onClick={handleSubmit}
           type='primary'>Leave Comment</Button>
     </>
   )
}

export default CommentForm;