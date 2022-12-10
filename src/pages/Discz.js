import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faRoadSpikes, faCircleChevronLeft, faCircleChevronUp, faHouseMedicalCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import headerImg from '../imgs/proj2.png'

import lofi1_2 from '../imgs/discz/lofi1/axolotl_page_2.png'
import lofi1_3 from '../imgs/discz/lofi1/axolotl_page_3.png'
import lofi1_1 from '../imgs/discz/lofi1/axolotl_page_1.png'
import lofi1_4 from '../imgs/discz/lofi1/axolotl_page_4.png'

import lofi2_2 from '../imgs/discz/lofi1/cat-2.png'
import lofi2_3 from '../imgs/discz/lofi1/cat-3.png'
import lofi2_1 from '../imgs/discz/lofi1/cat-1.png'
import lofi2_4 from '../imgs/discz/lofi1/cat-4.png'
import lofi2_5 from '../imgs/discz/lofi1/cat-5.png'
import lofi2_6 from '../imgs/discz/lofi1/cat-6.png'

import lofi3_1 from '../imgs/discz/lofi1/Lemur-1.png'
import lofi3_2 from '../imgs/discz/lofi1/Lemur-2.png'
import lofi3_3 from '../imgs/discz/lofi1/Lemur-3.png'

import lofi4_1 from '../imgs/discz/lofi1/sloth-1.png'
import lofi4_2 from '../imgs/discz/lofi1/sloth-2.png'
import lofi4_3 from '../imgs/discz/lofi1/sloth-3.png'
import lofi4_4 from '../imgs/discz/lofi1/sloth-4.png'
import lofi4_5 from '../imgs/discz/lofi1/sloth-5.png'
import lofi4_6 from '../imgs/discz/lofi1/sloth-6.png'

import styleGuide from '../imgs/discz/style-guide.png'

import hifi1_welcome from '../imgs/discz/hifi1/Welcome.png'

import hifi1_playlist1 from '../imgs/discz/hifi1/Playlists.png'
import hifi1_playlist2 from '../imgs/discz/hifi1/Playlists-2.png'

import hifi1_profile from '../imgs/discz/hifi1/Profile.png'

import hifi1_discover1 from '../imgs/discz/hifi1/Discover-main.png'
import hifi1_discover2 from '../imgs/discz/hifi1/Search.png'
import hifi1_discover3 from '../imgs/discz/hifi1/Discover-matching-tutorial.png'

import lofi2_discover1 from '../imgs/discz/lofi2/final-discover-1.png'

import lofi2_discover2 from '../imgs/discz/lofi2/final-discover-3.png'
import lofi2_discover3 from '../imgs/discz/lofi2/final-discover-4.png'

import hifi2_discover1 from '../imgs/discz/hifi2/Discover-home.png'
import hifi2_discover2  from '../imgs/discz/hifi2/Search-1.png'
import hifi2_discover3  from '../imgs/discz/hifi2/Search-3.png'
import hifi2_discover4  from '../imgs/discz/hifi2/Search-2.png'

import improve1 from '../imgs/discz/improve1.png'

import NavBar from '../components/NavBar';
import ViewProjBtn from '../components/ViewProjBtn';
import Fade from 'react-reveal/Fade';
function Discz() {

  function scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="Discz ProjectTemplate">
      <NavBar/>
      <Fade bottom><img src={headerImg} className="ProjectHeaderImg"></img></Fade>

      <div className='ProjectBody'>
        <div class="ProjectSection">
          <h1>Project Overview</h1>
          <p>
            The purpose of this project is design an interactive interface for an emerging startup while undergoing the full process of a iterative design.
            This project was completed in collaboration with three other students.
            For our Iterative Design project, we choose <b>Discz</b> from Y combinator.
          </p>
        </div>
        <div class="ProjectSection">
          <h1>Understanding</h1>
          <p>
          The core concept behind Discz is that it is a Spotify-integrated music discovery platform built to help you find your next favorite artists and songs. It's main functionality is the ability to build playlists at the swipe of a finger and find new music via custom recommendations catered to your taste! You can swipe through song snippets to find music you love and add it to your spotify playlists.
          </p>

        </div>
  

        <div class="ProjectSection">
          <h1>Design Goal</h1>
          <p>
            We wanted to ensure that our designs remained true to Discz's main vision, which is to allow users to discover music in a meaningful way and customize their personal social profile.
          </p>

        </div>
      </div>
      <div class="SectionHeader">
      <Fade bottom>
          <h1>Iteration 1</h1>
          </Fade>
        </div>

        <div className='ProjectBody' style={{paddingTop: "0", marginTop: "0"}}>
        <div class="ProjectSection DisczLofi">
          <h1>Lo-fi Design</h1>
          <h3> Draft it out!</h3>
          <p> Below are our initial four sets of wireframes, which were all created independently to focus on different design themes for discovery.</p>
          <Fade left>
          <h3>1. Horizontal sliding</h3>
          <div className="LoFiImgs">
            <img src={lofi1_1}></img>
            <img src={lofi1_2}></img>
            <img src={lofi1_3}></img>
            <img src={lofi1_4}></img>
          </div>
          </Fade>
          <Fade right>
          <h3>2. Vertical sliding</h3>
          <div className="LoFiImgs">
            <img src={lofi2_1}></img>
            <img src={lofi2_2}></img>
            <img src={lofi2_3}></img>
            <img src={lofi2_4}></img>
            <img src={lofi2_5}></img>
            <img src={lofi2_6}></img>
          </div>
          </Fade>
          <Fade left>
          <h3>3. Cover flow</h3>
          <div className="LoFiImgs">
            <img src={lofi3_1}></img>
            <img src={lofi3_2}></img>
            <img src={lofi3_3}></img>
          </div>
          </Fade>
          <Fade right>
          <h3>4. Matching</h3>
          <div className="LoFiImgs">
            <img src={lofi4_1}></img>
            <img src={lofi4_2}></img>
            <img src={lofi4_3}></img>
            <img src={lofi4_4}></img>
            <img src={lofi4_5}></img>
            <img src={lofi4_6}></img>
          </div>
          </Fade>
        </div>

        <div class="ProjectSection">
          <h1>Selected Design</h1>
          <div className="Issues">
            
            <div class="IssuesImage ChosenLofi"><Fade left><img src={lofi4_2}></img></Fade></div>
            
            <Fade right>
            <div>
            <h3> Who's the winner?</h3>
              <p>
              After discussing with my team, we concluded that the <b>Matching</b> theme would best suit Disc'z music discovery goals.
            
                </p>
              <p>
              User would be able to listen to one song at a time for about 20-30 seconds before they have to quickly make their judgement on whether or not they like that type of music.
            This mimics the matching process of popular online dating apps, which are known for their intuitive process and design.</p>
            </div>
            </Fade>
          </div>
        </div>

        <div class="ProjectSection">
          <h1>Style Guide</h1>
          <p>
            We decided to go with a light teal color as our design's primary color to emulate a feeling of calmness and adventure for the user.
            We also think that a black background would amplify a sense of intimacy for personal discovery.
          </p>
          <img src={styleGuide}></img>
        </div>

        <div class="ProjectSection">
          <h1>Hi-fi Design</h1>
          <h3> Bring it all together!</h3>
          <p> Below are our highly defined mockups of the mobile application. </p>

          <h3>Welcome Page</h3>
          <div className="HiFiImgs">
            <img src={hifi1_welcome}></img>
          </div>

          <h3>Playlists</h3>
          <div className="HiFiImgs">
            <img src={hifi1_playlist1}></img>
            <img src={hifi1_playlist2}></img>
          </div>

          <h3>Discover</h3>
          <div className="HiFiImgs">
            <img src={hifi1_discover1}></img>
            <img src={hifi1_discover2}></img>
            <img src={hifi1_discover3}></img>
          </div>

          <h3>Profile</h3>
          <div className="HiFiImgs">
            <img src={hifi1_profile}></img>
          </div>
        </div>


        <div class="ProjectSection">
          <h1>Testing & Feedback</h1>
          <p> We had other students play around with our hi-fi design and in the end asked them to give us their feedback, which we recorded and condensed into the following lists.</p>
          <div className='Feedback'>
        
            <div class="section-content">
            <Fade left>
          <h3>Pros</h3>
          <ul>
            <li>I like the overall layout and heirarchy.</li>
            <li>
              The navigation bar works well and shows which page you are on.
            </li>
            <li>I like the transition between pages.</li>
            <li>
              I like that you can see the album behind it, which shows that you
              should swipe in some direction to see the next album.
            </li>
          </ul>
          </Fade>
        </div>
           
          
        
        <div class="section-content">
        <Fade right>
          <h3>Cons</h3>
          <ul>
            <li>Discover and the playlists screens are too similar.</li>
            <li>
              Not sure what the "Create" button is supposed to do. It should go
              to a Create page.
            </li>
            <li>
              Recommendations and recent listening are within the settings
              option of the app, which is a bit unintuitive. I thought the
              recommendations were all the songs you haven't listened to.
            </li>
            <li>
              I was confused about the "Skipping" function in the Discover page.
              Does skipping count as liking or disliking?
            </li>
            <li>
              I'm confused about the cancel button in the player screen (the X).
            </li>
          </ul>
          </Fade>
          </div>
        
        
            
          </div>
        </div>
        </div>

        <div class="SectionHeader">
          <Fade bottom><h1>Iteration 2</h1></Fade>
        </div>
        <div className='ProjectBody' style={{paddingTop: "0", marginTop: "0"}}>
        <div class="ProjectSection">
          <h1>Lo-fi</h1>
          <h3> What to fix?</h3>
          <div className="Issues" style={{marginTop: "100px"}}>
          <div class="IssuesImage ChosenLofi"><Fade left><img src={improve1}></img></Fade></div>
            <Fade right>
            <div>
            <h3> Discover Landing Page</h3>
              <p>
              We noticed that a lot of people were unable to tell the difference between the playlist and discovery page. 
            To address this, we thought of turning the discovery page to be a collection of radio stations. </p>
            <p>
            Each radio station will be a new channel for discovering music and all have its own vibe, which is represented with a disc-shape rather than a square image.
                </p>
            </div>
            </Fade>

          </div>
          <div className="Issues" style={{marginTop: "200px"}}>
            <Fade left>
            <div>
            <h3> Creating Radios </h3>
              <p>
              Our testers also emphasized that creating a new station in discovery was confusing with the all the tags. 
              </p>
              <p>
            Instead, we decided to prompt users with a new page where they can select 3-6 music of their choice prior to seeing the search page to roughly define their radio.
            We decided to display 6 empty discs that would inform the user that they are creating a new discovery station rather than using tags as seen in our previous design.
                </p>
            </div>
            </Fade>
          <div class="IssuesImage ChosenLofi"><div className="LoFiImgs">
            <Fade right>
            <img src={lofi2_discover2}></img>
            <img src={lofi2_discover3}></img>
            </Fade>
          </div> </div>
          </div>
        </div>

        <div class="ProjectSection">
          <h1>Hi-fi Design</h1>
          <h3> Redesign!</h3>
          <p> Here are the those changes in our hifi designs. </p>

          <h3>Discover</h3>
          <div className="HiFiImgs">
            <img src={hifi2_discover1}></img>
            <img src={hifi2_discover2}></img>
            <img src={hifi2_discover3}></img>
            <img src={hifi2_discover4}></img>
          </div>
          <ViewProjBtn bg="black" color="white" link="https://www.figma.com/proto/MHnH6ab4yutVx0YXSZ5fOs/DISCZ-Redesign?node-id=56%3A470&starting-point-node-id=56%3A470"/>
        </div>

        <div class="ProjectSection">
          <h1>Conclusion</h1>
          <h3> Final Thoughts!</h3>
          <p> 
            Overall, I found this project challenging yet exciting at the same time. 
            I was able to experience the full process of designing a mobile application for a company along side my colleagues, 
            as well as develop my design and critical thinking skills.
            One key takeaway that I got from this project is that there is always room for improvement.
            </p>
        </div>
          
      </div>

    </div>
  );
}

export default Discz;
