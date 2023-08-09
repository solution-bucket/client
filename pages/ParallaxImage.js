const ParallaxImage = ({ url ="/images/winter.jpg",
 children, 
 paddingTop = '100px', 
 paddingBottom ='75px'})=>(
    <div style={{ backgroundImage:`url(${url})`,
    backgroundAttachment:'fixed',
    paddingTop:paddingTop,
    paddingBottom: paddingBottom,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundColor:'#ddd',
    display:'block',
    backgroundPosition:'center center'}}>
 {children}
    </div>
)

export default ParallaxImage;