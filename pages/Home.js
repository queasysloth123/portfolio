import ProjectPreview from '../components/ProjectPreview';

import proj1 from '../imgs/proj1.png'
import proj2 from '../imgs/proj2.png'
import proj3 from '../imgs/proj3.png'
import proj4 from '../imgs/proj4.png'

function Home() {
  return (
    <div className="Home">
      <div className='Landing-Section'>
        <div className='Welcome-Msg'>
          <h1>Hi, I'm ______!</h1>
          <h3>CS1300 UI/UX designer</h3>
        </div>
      </div>
      <div className='Projects-Section'>
        <h1>My Projects</h1>
        <ProjectPreview img={proj1} url="/craigslist-redesign"/>
        <ProjectPreview img={proj2} url="/discz-design"/>
        <ProjectPreview img={proj3} url="/valorant-shop"/>
        <ProjectPreview img={proj4} url="/snackpass-interface-review"/>
      </div>
    </div>
  );
}

export default Home;
