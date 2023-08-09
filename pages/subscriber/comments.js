import UseComments from '../../components/comments/UserComments';
import SubscriberLayout from '../../components/layout/SubscriberLayout';

function Comments () {
    return (
       <SubscriberLayout>
              <div style={{marginTop:'50px'}}>
                  <UseComments/>
              </div>
        
       </SubscriberLayout>
    )
}

export default Comments;