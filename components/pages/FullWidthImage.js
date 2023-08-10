import Typed from 'react-typed';

const FullWidthImage =({
title="TUtorial Camp", 
subtitle="Learning new skills  keep you ahead", 
fullWidthImage ="/images/laptop-computer.jpg"})=> (
<>
<div className="FullWidthImage" >
<img src={fullWidthImage} alt="Tutorial "
  style={{width:"130%",
  overflow:'auto',
height:'500px',
objectFit:'cover'
}}

  />
  
</div>
  

  <div style={{ textAlign:'center',color:'#fff', marginTop:'-340px', fontSize:'55px', textShadow:'2px 2px 4px #000000'}}>
  
 <h6 style={{color:'#fff'}}>{title}</h6>
 <p style={{ fontSize: '18px', marginTop:'50px',color:'#fff'}}>{subtitle}

 </p>
 
  </div>
  <div className="coding">
   
  <Typed
          strings={[
            "Let's Help You Code your First Computer Program.",
            "function myFunction(){ }",
            "let greeting = 'Greeting 👋 From Ephraim';",
              " console.log(greeting)}",
              "OutPut:",
              "Greeting 👋 From Ephraim 🍧🍕",
          ]}
          typeSpeed={150}
          backSpeed={1}
          loop
          
          />
  </div>
  
</>
)
export default FullWidthImage;

function myFunction() {
  let greeting = "Hello World";
  console.log(greeting)
  
}
myFunction();