import React from 'react'
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Badge, Space, Switch } from 'antd';


const About= () => {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);

  <Space
    direction="vertical"
    size="middle"
    style={{
      width: '100%',
    }}
  />
  return (
    <>
   
    <div className='developer_AboutContent'>
     <div className='developerCont'>
      <img src='/images/developer.jpg' className='developerMain'/>
      
      
      <h3>
      <div>
        
      
    </div>
    🖐️ HI THERE. 😎 I'm  Ephraim Momoh Jr, a software developer based in Monrovia, Liberia with decades of experiences working with modern techologies,
       My ultimate goal is to share knowledges and impacts the world using my experiences and expertise.
       But I'm  also open to conversations around Entreprenuership, Social impact initiatives, Diversity and inclusion.
        
      <span style={{ display:'flex', flexDirection:"column", justifyContent:"space-between"}}>
     <span style={{ display:'flex',flexDirection:"column", flexWrap:'wrap'}}>
     <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? "REACT JS || JAVA " : "NODE JS"} showZero color="green" />
      <Badge count={show ? "C++" : "NEXT JS"} />
      <Badge
        className="site-badge-count-109"
        count={show ? "HTML CSS JAVASCRIPT" : "MySQL|| SQL"}
        style={{
          backgroundColor: 'PURPLE',
        }}
      />
    </Space>
       
     </span>
      
      </span>
       
      </h3>
      <div>
        <Badge.Ribbon text="Call: +231 888214521" color="blue"></Badge.Ribbon>

        </div>
        <span className='socialLinks inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-end md:w-auto'>
             
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
             
            </span>
             <div>
                

             </div>
     </div>
    </div>
    <div className='about_image'>
    <img  src="/images/Learn.gif"/>

    </div>
    </>
  )
}

export default About;