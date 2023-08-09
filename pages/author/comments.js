import UseComments from '../../components/comments/UserComments';
import AuthorLayout from '../../components/layout/AuthorLayout';


function Author () {
    return (
       <AuthorLayout>
              <div style={{marginTop:'50px'}}>
                 <UseComments/>
              </div>
        
       </AuthorLayout>
    )
}

export default Author;