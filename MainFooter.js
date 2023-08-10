import {FaTwitter, FaLinkedinIn } from "react-icons/fa";

import Typed from 'react-typed';

const Footer = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <footer style={{margingLeft:"20px"}} className='text-blue mp-20'>
      <div className='overflow-x-hidden -mb-0.5'>
          <div>
            <img className="developer" src='/images/developer.jpg' />
            <div className="obj">
            <p style={{fontSize:'12px', color:"#fff"}}>
               </p>
              <div style={{ color:"cyan", fontFamily:"monospace"}}>              
              <Typed
          strings={[
            "🖐️ HI THERE. 😎I'm Ephraim Momoh Jr, A Software Developer based in Monrovia, Liberia with decades of experiences working with modern techologies",
            " I strongly believed diverse pespective challenge conventional thinking and enhance problems-solving capabilities. ",
            "Would you mind us working togther? 👇Contact me immediately, I wiil be more than willing to listen and hear you perspectives.",
          ]}
          typeSpeed={150}
          backSpeed={1}
          loop
          
          />
              </div>
            </div>
      </div>
      </div>

      <div className='bg-[#1d4ed8] '>
        <div className='container px-5 py-20 mx-auto '>
          <div className='w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4'>
            
           
          </div>
        </div>

        <div className=''>
          <p className='container px-5 mx-auto text-white mt-2 '>
           CONTACT ME
          </p>

          <div className='container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between '>
            <div className='w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start '>
             

             
            </div>

            <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
            <a href='https://twitter.com/momoh_ephraim?t=agtzTjSCx7B-KDxjQIjsTQ&s=09'  target='_blank'
                rel='noopener noreferrer' className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaTwitter />
              </a>
             

              <a href='https://www.linkedin.com/in/ephraim-momoh-jr-629b02267'  target='_blank'
                rel='noopener noreferrer'className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaLinkedinIn />
              </a>

              <a className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
              <Mailto email="ephraimmomoh54@gmail.com" subject="Hello & Welcome" body="Do you have any Questions for Me ?">
              ✉️
             </Mailto>
              </a>
              📞+231-888-21-45-21
            </span>
          </div>
        </div>

        <div className='bg-[#001a36]'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-300 text-sm text-center sm:text-left'>
          <span style={{fontSize:'8px'}}>Copyright: {new Date().getFullYear()} &copy; All right reserve</span> 
            </p>
            <span style={{fontSize:'10px'}} className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
              Developed by Ephraim Momoh Jr 
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
