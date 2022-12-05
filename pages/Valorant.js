import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faRoadSpikes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import headerImg from '../imgs/proj3.png'

import filters1 from '../imgs/valorant/filters1.png'
import filters2 from '../imgs/valorant/filters2.png'
import filters3 from '../imgs/valorant/filters3.png'
import filters4 from '../imgs/valorant/filters4.png'

import itemCard from '../imgs/valorant/itemcard.png'
import cart from '../imgs/valorant/cart.png'

function Valorant() {
  return (
    <div className="Valorant ProjectTemplate">
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
            The purpose of this project is to develop a fully functional and interactive interfaces, using interface components and internal state data.
            The designed interface should display a collection of similarly-formatted data to is sort, filter, and aggregate.
          </p>
          <p>I chose recreate Valorant's in-game weapon shop.</p>
        </div>

        <div class="ProjectSection">
          <h1>Goal and Value</h1>
          <p>The goal of the application is to allow users who play Valorant to know how much a cart of in-game guns would cost. The value of this application is to help players know what sequence of guns to buy without overspending between game rounds.</p>
        </div>

        <div class="ProjectSection">
          <h1>Layout</h1>
          <h3>Item Cards</h3>
          <p>
            Each item card represents all the purchasable items in the game.
          </p>
          <div className="ImgCaptionWrapper">
            <div className='ImageCaption'>
              <div class="ImgCaptionImg"><img src={itemCard}></img></div>
              <p>Each item should display its necessary information (image, name, category, fire rate, and price) along with a <b>BUY</b> button.</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <h3>Filters and Sorting</h3>
          <p>
            I had the different types of filters and sorting methods placed in expandable and collapsable sections so that users don't feel overwhelmed with all the different options.
            I decided to follow conventional placement and display the filters and sorting section on the left for intuitive navigation.
            I then chose the most appropriate input types that fit the nature of each component.
          </p>

          <div className="ImgCaptionWrapper">
            <div className='ImageCaption'>
              <div class="ImgCaptionImg"><img src={filters2}></img></div>
              <p><b>Sort By</b> utilizes radio buttons since data should only be sorted by one category at a time.</p>
            </div>

            <div className='ImageCaption'>
              <div class="ImgCaptionImg"><img src={filters3}></img></div>
              <p><b>Price Range</b> is dictated by a two-pointer slider to define both the minimum and maximum prices to display.</p>
            </div>

            <div className='ImageCaption'>
              <div class="ImgCaptionImg"><img src={filters4}></img></div>
              <p><b>Categories</b> uses checkboxes for determining what type of weapon should be shown on the site.</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <h3>Shopping Cart</h3>
          <p>The shopping car is conveniently placed right below the filters to minimize number of side panels. </p>
          <div className="ImgCaptionWrapper">
            <div className='ImageCaption'>
              <div class="ImgCaptionImg"><img src={cart}></img></div>
              <div>
                <p> I used the card concept to represent each item in the shopping cart, which contains its image, name, and unit price, and quantity. </p>
                <p> I gave users the ability to change the quantity of each cart item as well as the ability to clear their cart for convenience. </p>
              </div>
            </div>
          </div>
        </div>


        <div class="ProjectSection">
          <h1>Conclusion</h1>
          <h3>Final thoughts!</h3>
          <p> In taking on this project, I gained a better understanding of how to choose components that would best algin the nature of a desired functionality.
            I also learned the importance of abstracting my code to ease the transition towards future project expansions.</p>
        </div>
      </div>
    </div>
  );
}

export default Valorant;
