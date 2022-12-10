import ProjectPreview from '../components/ProjectPreview';

import proj1 from '../imgs/proj1.png'
import proj2 from '../imgs/proj2.png'
import proj3 from '../imgs/proj3.png'
import proj4 from '../imgs/proj4.png'

import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

function scrollDown() {
  window.scrollTo({
    top: Math.round(window.innerHeight),
    left: 0,
    behavior: 'smooth'
  });
}


function Home() {
  
  return (
    <div className="Home">
      <div className='Landing-Section'>
      <Fade top cascade>
        <div className='Welcome-Msg'>
          <h1>Full Name</h1>
          <FontAwesomeIcon className="DownIcon bounce" icon={faChevronDown} size="2x" onClick={scrollDown} color="white"/>
          <h3>PRODUCT DESIGNER</h3>
          <div className='AboutPar'>
          <p>Passionate about crafting impactful and responsible designs</p>
          </div>
          
        </div>
      </Fade>

        
      </div>
      {/* <div className='Gradient'></div> */}
      {/* <h1>My Projects</h1> */}
      <div className='Projects-Section'>
      <h1>My Projects</h1>
        <Fade left>
        <ProjectPreview img={proj1} url="/craigslist-redesign"/>
        </Fade>
        <Fade right>
        <ProjectPreview img={proj2} url="/discz-design"/>
        </Fade>
        <Fade left>
        <ProjectPreview img={proj3} url="/valorant-shop"/>
        </Fade>
        <Fade right>
        <ProjectPreview img={proj4} url="/snackpass-interface-review"/>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
