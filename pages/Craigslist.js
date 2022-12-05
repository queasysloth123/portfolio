import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faRoadSpikes } from '@fortawesome/free-solid-svg-icons';
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

function Craigslist() {
  return (
    <div className="Craigslist ProjectTemplate">
      <div className="NavBar">
        <Link to="/">
          <FontAwesomeIcon className="BackIcon" icon={faChevronLeft} size="xl" />
        </Link>
        <h1>Name</h1>
      </div>
      <div className='ProjectBody'>
        <img src={headerImg}></img>
        <div class="ProjectSection">
          <h1>Project Overview</h1>
          <p>
            The purpose of this project is to experience what it's like to redesign a website.
            The task is to choose an existing website, analyze its usability flaws, create both low-fidelity and high-fidelity mockups that address those issues, and make the designs responsive.
          </p>
          <p>I chose to redesign <b>Craigslist</b> due to its unintuitive design and lack of visual hierarchy.</p>
        </div>

        <div class="ProjectSection">
          <h1>Identified Issues</h1>
          <p> Upon landing on the homepage, I immediately felt overwhelmed with all the text on the screen and noticed a list of other issues with the website's overall layout and design. </p>
          <p>More specifically, the home page exhibits the following issues: </p>
          <div className='Issues'>
            <ol class="obs-list">
              <li>does not follow conventional layout of mainstream online marketplaces, which can induce difficulty in navigation</li>
              <li>has no visual hierarchy to highlight more important points of the page. Majority of text are the same blue and small font size</li>
              <li>does not include visual aid such as images and icons to help with navigation and keep user attention</li>
              <li>has an overload of information for both the subcategories and locations</li>
              <li>cannot search by categories, which can generate unwanted results</li>
              <li>has a repetition of links that can be consolidated into few links</li>
              <li>makes it difficult to spot account system</li>
              <li>does not identify with company name and logo</li>
            </ol>
            <div class="IssuesImage"><img src={craigslistOriginal}></img></div>
          </div>
          <p>After doing some research, I found that Craigslist is widely used by adults above the age of 40.
            With this is mind, improving the usability of their website would be beneficial to their audience as many may experience difficulty in navigating through a technological environment.  </p>

        </div>

        <div class="ProjectSection">
          <h1>Lo-fi Design</h1>
          <h3> Draft it out!</h3>
          <p> Below are my initial wireframes (for desktop, tablet, and mobile devices) that aims to address previously mentioned usability issues.</p>
          <div className="LoFiImgs">
            <img src={lofiDesktop}></img>
            <img src={lofiTablet}></img>
            <img src={lofiMobile}></img>
          </div>
        </div>


        <div class="ProjectSection">
          <h1>Visual Style Guide</h1>
          <div className="Issues">
            <div>
              <h3> Time to define some details!</h3>
              <p>
                I decided to stick with Craigslist's purple as the primary color.
                I also increase the use of icons to provide visual queues for users to enhance website navigation.
                Items can now be searched by category using the newly designed searchbar.
                Items are viewable by with the following cards with the use of visual hierarchy.</p>
            </div>
            <div class="IssuesImage"><img src={styleGuide}></img></div>
            {/* <img src={styleGuide}></img> */}
          </div>
        </div>

        <div class="ProjectSection">
          <h1>Hi-fi Design</h1>
          <h3> Bring it all together!</h3>
          <p> Below are my highly defined mockups of the website on different devices. </p>
          <div className="HiFiImgs">
            <img src={hifiDesktop}></img>
            <img src={hifiTablet}></img>
            <img src={hifiMobile}></img>
          </div>
          <a href="https://queasysloth123.github.io/responsive-design/" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
        </div>

        <div class="ProjectSection">
          <h1>Conclusion</h1>
          <h3>Final thoughts!</h3>
          <p> In taking on this project, I was able grasp a better understanding of visual hierarchies and be able to implement them on this redesign project.
            I also learned how to architect a website such that it can easily transition among desktop, tablet, and mobile device views. </p>
        </div>
      </div>
    </div>
  );
}

export default Craigslist;
