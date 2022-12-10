import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faRoadSpikes, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import headerImg from '../imgs/proj1.png'
import craigslistOriginal from '../imgs/craigslist-original.png'

import lofiDesktop from '../imgs/lofi-desktop.png'
import lofiTablet from '../imgs/lofi-tablet.png'
import lofiMobile from '../imgs/lofi-phone.png'

import hifiDesktop from '../imgs/hifi-desktop.png'
import hifiTablet from '../imgs/hifi-tablet.png'
import hifiMobile from '../imgs/hifi-phone.png'

import styleGuide from '../imgs/style-guide.png'
import Fade from 'react-reveal/Fade';

import NavBar from '../components/NavBar';
import ViewProjBtn from '../components/ViewProjBtn';

function Craigslist() {
  function scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="Craigslist ProjectTemplate">
      <NavBar/>
      <Fade bottom>
      <img src={headerImg} className="ProjectHeaderImg"></img>
      </Fade>
      <div className='ProjectBody'>
        <div class="ProjectSection">
          <h1>Project Overview</h1>
          <p>
            The purpose of this project is to experience what it's like to redesign a website.
            The task is to choose an existing website, analyze its usability flaws, create both low-fidelity and high-fidelity mockups that address those issues, and make the designs responsive.
          </p>
          <p>I chose to redesign <b>Craigslist</b> due to its unintuitive design and lack of visual hierarchy.</p>
        </div>
        <div class="ProjectSection">
          <h1>Understanding</h1>
          <p>After doing some research, I found that Craigslist is widely used by adults above the age of 40.
            With this is mind, improving the usability of their website would be beneficial to their users as many may experience difficulty in navigating through a technological environment.  </p>

        </div>
       
      
        
        <div class="ProjectSection">
          <h1>Identified Issues</h1>
          <p> Upon landing on the homepage, I immediately felt overwhelmed with all the text on the screen and noticed a list of other issues with the website's overall layout and design. </p>
          <div className='Issues'>
          <Fade left>
            <div>
              <h3>What's wrong?</h3>
              <ol class="obs-list">
                <li>no visual hierarchy</li>
                <li>lack of visual aid such as images and icons</li>
                <li>overload of information</li>
                <li>cannot search by categories</li>
                <li>repetition of links that can be consolidated</li>
                <li>difficult to spot account system</li>
                <li>does not identify with company name and logo</li>
              </ol>
              </div>
              </Fade>
              <div class="IssuesImage"><Fade right><img src={craigslistOriginal}></img></Fade></div>
          </div>

        </div>
        <div class="ProjectSection">
          <h1>Lo-fi Design</h1>
          <h3> Draft it out!</h3>
          <p> Below are my initial wireframes (for desktop, tablet, and mobile devices) that aims to address identified usability issues.</p>
          <Fade bottom>
          <div className="LoFiImgs">
            <img src={lofiDesktop}></img>
            <img src={lofiTablet}></img>
            <img src={lofiMobile}></img>
          </div>
          </Fade>
          
        </div>


        <div class="ProjectSection">
          <h1>Visual Style Guide</h1>
          <div className="Issues">
          <div class="IssuesImage"><Fade left><img src={styleGuide}></img></Fade></div>
            <Fade right>
            <div>
              <h3> Time to define some details!</h3>
              <p>
                I decided to stick with purple as my design's primary color to stay as close to Craigslist's original logo branding.
                I also increased the use of icons to provide more visual queues for users and enhance overall website navigation.
                </p>
              <p>
              Items can now be searched by category using the newly designed searchbar.
                Items are viewable with the following cards to address lack of visual hierarchy.</p>
            </div>
            </Fade>
          </div>
        </div>

        <div class="ProjectSection">
          <h1>Hi-fi Design</h1>
          <h3> Bring it all together!</h3>
          <p> Below are my highly defined mockups of the website on different devices. </p>
          <Fade bottom>
          <div className="HiFiImgs">
            <img src={hifiDesktop}></img>
            <img src={hifiTablet}></img>
            <img src={hifiMobile}></img>
          </div>
          </Fade>
          <ViewProjBtn bg="#622D7F" color="white" link="https://queasysloth123.github.io/responsive-design/"/>
        </div>

        <div class="ProjectSection">
          <h1>Conclusion</h1>
          <h3>Final thoughts!</h3>
          <p> In taking on this project, I was able grasp a better understanding of visual hierarchies and be able to implement them on this redesign project.
            I also learned how to architect a website such that it can easily transition between desktop, tablet, and mobile device views. </p>
        </div>
      </div>
    </div>
  );
}

export default Craigslist;
