import {ThemeProvider} from '../context/theme';
import { AuthProvider } from '../context/auth';
import TopNav from '../components/TopNav';
import '../public/css/styles.css';
import  { Toaster } from 'react-hot-toast';
import {PostProvider} from '../context/post';
import {MediaProvider} from '../context/media';
import {SearchProvider} from '../context/search';
import Head from 'next/head';
 import 'react-quill/dist/quill.snow.css';
 import 'react-quill/dist/quill.bubble.css';
 function MyApp({ Component, pageProps }) {

    return<> 
    <SearchProvider>
    <ThemeProvider>
      <AuthProvider>
     <PostProvider>
   <MediaProvider>
   <TopNav/>
      <Toaster/>
        <Component {...pageProps} />
        {/* <Footer/> */}
   </MediaProvider>
     </PostProvider>
      </AuthProvider>
    </ThemeProvider>
    </SearchProvider>
    </>
  }
  export default MyApp;