import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faRoadSpikes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import headerImg from '../imgs/proj4.png'

import kiosk from '../imgs/snackpass/kiosk.jpg'
import persona1 from '../imgs/snackpass/amy.jpg'
import persona2 from '../imgs/snackpass/joe.jpg'

import sb1 from '../imgs/snackpass/Sb1.png'
import sb2 from '../imgs/snackpass/Sb2.png'
import sb3 from '../imgs/snackpass/Sb3.png'
import sb4 from '../imgs/snackpass/Sb4.png'
import sb5 from '../imgs/snackpass/Sb5.png'
import sb6 from '../imgs/snackpass/Sb6.png'
import sb7 from '../imgs/snackpass/Sb7.png'
import sb8 from '../imgs/snackpass/Sb8.png'
import sb9 from '../imgs/snackpass/Sb9.png'
import sb10 from '../imgs/snackpass/Sb10.png'
import sb11 from '../imgs/snackpass/Sb11.png'


function Snackpass() {
  return (
    <div className="Snackpass ProjectTemplate">
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
            The purpose of this project is to gain a better understanding of user interaction on a chosen interface.
            The task is to interview these individuals about their experiences, create personas based on these users, and illustrate a storyboard for one of these personas.
          </p>
        </div>

        <div class="ProjectSection">
          <h1>Interface Description</h1>
          <p>Snackpass's kiosk offers a simple touch-screen interface for customers to place their orders without having to wait in line and talk to a cashier.</p>
          <div className="ImgCaptionWrapper">
            <div className='ImageCaption Kiosk'>
              <div class="ImgCaptionImg KiosImg"><img src={kiosk}></img></div>
              <div style={{ textAlign: "left" }}>
                <h3>How to use</h3>
                <ol style={{ paddingLeft: "20px" }}>
                  <li>Tap to start order</li>
                  <li>Scroll and select desired item</li>
                  <li>Choose toppings and sides</li>
                  <li>Add to cart</li>
                  <li>Continue to checkout</li>
                  <li>Pay and wait for order</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div class="ProjectSection">
          <h1>Key Observations</h1>
          <ul class="obs-list">
            <li>Customers often took a total of 3 minutes to place their order.</li>
            <li>Users are usually young adults or families.</li>
            <li>People generally use contactless payment.</li>
            <li>Order does not always go through.</li>
            <li>Kiosk has no line.</li>
          </ul>
        </div>

        <div class="ProjectSection">
          <h1>Interview Summary</h1>
          <p>All of the following questions were asked to 3 kiosk users. Their responses were recorded and summarized below.</p>
          <div className="ImgCaptionWrapper InterviewSummary" >
            <div className='ImageCaption'>
              <div style={{ textAlign: "left" }} className="ListSplit">
                <h3>Questions Asked</h3>
                <ol style={{ paddingLeft: "20px" }}>
                  <li>Why do you use the self-severing kiosk?</li>
                  <li>Have you had any difficulties using the kiosk? If so, please describe them.</li>
                  <li>Do you have the Snackpass mobile app? If so, why do you use the kiosk instead?</li>
                  <li>How does it feel to place your order without a cashier?</li>
                  <li>How do you feel about the layout of the kiosk?</li>
                </ol>
              </div>
              <div style={{ textAlign: "left" }} className="ListSplit">
                <h3>Responses</h3>
                <ol style={{ paddingLeft: "20px" }}>
                  <li>Customers often prefer ordering on the Snackpass kiosk because there is no line, no pressure, and it is easy to navigate.</li>
                  <li>Some downsides to using the kiosk include fast order timeouts, transaction failures, and the inability to earn Snackpass points.</li>
                  <li>Users have heard from friends that the kiosk offers discounts if mobile phone number is entered.</li>
                  <li>People feel like they are missing the social interaction that comes with ordering from a cashier.</li>
                  <li>The menu items are too big, which can make scrolling though all the options overwhelming.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="ProjectSection">
          <h1>Empathy Maps</h1>
          <h3>Personify the users!</h3>
          <p> I constructed two personas by creating a four-quadrant empathy map, describing what users think, feel, say, and do for one archetypal character ​that will represent part of the spectrum of observed users.</p>
          <div className="ImgCaptionWrapper InterviewSummary" >
            <div className='ImageCaption PersonaWrapper'>
              <div className="ListSplit PersonaImg">
                <h3>Indecisive Irene</h3>
                <img src={persona1}></img>
              </div>
              <div className="ListSplit PersonaCaption">
                <p>
                  Irene is a college student who likes to try new things. She decides to try boba for the first time and orders with Snackpass's kiosk. She proceeds to look through all the menu items, but the icons are too big and take up a lot of space, making the menu feel more overwhelming than it actually is. She also has dietary restrictions and wishes for a way to filter the menu or at least see common allergenic ingredients in each menu item before proceeding to select toppings/sides. Because Irene is taking to long to choose her order, the kiosk times out and terminates her session. Irene tries again, and ends up getting brown sugar boba with soy milk.
                </p>
              </div>
            </div>
          </div>
          <div className="ImgCaptionWrapper InterviewSummary" >
            <div className='ImageCaption PersonaWrapper'>
              <div className="ListSplit PersonaImg">
                <h3>Consistent Cory</h3>
                <img src={persona2}></img>
              </div>
              <div className="ListSplit PersonaCaption">
              <p>
              Cory is a college student who doesn't like to try new things. He decides to get boba again for the 2nd time today before going to his next class. He sees the long line to the cashier and becomes worried that he won't get his drink in time. He, instead, orders on Snackpass's kiosk, selecting the first item on the menu. He pays for his drink, and is offered a discount if he enters his phone number. He is disappointed that he link it to his Snackpass account because he is one gift away from hatching an egg with his friend. He enters his number, but his order fails to go through. Cory is upset, tries again, and successfully orders his drink.
            </p>
              </div>
            </div>
          </div>
        </div>

        <div class="ProjectSection">
          <h1>Storyboard</h1>
          <p>I decided to create a storyboard for Cory to showcase his boba-buying journey using the Snackpass self-ordering kiosk.</p>
          <div className="Storyboard">
            <div className="SBFrame">
              <img src={sb1}></img>
              <p>Cory realizes that he's thirsty for a drink during in class.</p>
            </div>
            <div className="SBFrame">
              <img src={sb2}></img>
              <p>Cory waits until after class to walk to Tiger Sugar before going to his next class.</p>
            </div>
            <div className="SBFrame">
              <img src={sb3}></img>
              <p>He sees a long line to the cashier and doesn't think he'll be able to make it in time for his next class.</p>
            </div>
            <div className="SBFrame">
              <img src={sb4}></img>
              <p>As he leaves, he sees Snackpass's self-ordering kiosk.</p>
            </div>
            <div className="SBFrame">
              <img src={sb5}></img>
              <p>He approaches it, and taps to start his order.</p>
            </div>
            <div className="SBFrame">
              <img src={sb6}></img>
              <p>He realizes it's a self-ordering kiosk, and begins to find his go-to drink.</p>
            </div>
            <div className="SBFrame">
              <img src={sb7}></img>
              <p>He finds it, and chooses his toppings.</p>
            </div>
            <div className="SBFrame">
              <img src={sb8}></img>
              <p>Joe then proceeds to the checkout page and reviews his order.</p>
            </div>
            <div className="SBFrame">
              <img src={sb9}></img>
              <p>He pays with his credit card with contactless payment.</p>
            </div>
            <div className="SBFrame">
              <img src={sb10}></img>
              <p>He receives his order number and waits for his drink to be made.</p>
            </div>
            <div className="SBFrame">
              <img src={sb11}></img>
              <p>Joe gets his drink in less than 2 minutes, skipping the long line, and walks to his next class.</p>
            </div>
          </div>
        </div>

        <div class="ProjectSection">
          <h1>Conclusion</h1>
          <h3>Final thoughts!</h3>
          <p> 
            This project taught me the importance of understanding my target audience's needs and wants first before attempting to develop a product. 
            Every individual has their own personal preferences, but they can all be generalized and narrowed down into a few personas. 
            Having these representational personas makes the target goals of the product much clearer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Snackpass;
