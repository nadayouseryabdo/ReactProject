import './about.css'
import aboutImg from '../../assets/images/about.svg'
function About() {

    return (
     <>
     <div className="about_container ">
     <div>
     <h1>About Me</h1>
     </div>
     <img src={aboutImg} alt="about"  />
     </div>
     </>
    );
  }
  export default About;