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
import NavBar from '../components/NavBar';
import ViewProjBtn from '../components/ViewProjBtn';
import Fade from 'react-reveal/Fade';
function Valorant() {
  return (
    <div className="Valorant ProjectTemplate">
      <NavBar/>
      <Fade bottom><img src={headerImg} className="ProjectHeaderImg"></img></Fade>
      <div className='ProjectBody'>
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
              <div class="ImgCaptionImg"><Fade left><img src={itemCard}></img></Fade></div>
              <Fade right><p>Each item should display its necessary information (image, name, category, fire rate, and price) along with a <b>BUY</b> button.</p></Fade>
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
              <div class="ImgCaptionImg"><Fade left><img src={filters2}></img></Fade></div>
              <Fade right> <p><b>Sort By</b> utilizes radio buttons since data should only be sorted by one category at a time.</p></Fade>
             
            </div>

            <div className='ImageCaption'>
              <div class="ImgCaptionImg"><Fade left><img src={filters3}></img></Fade></div>
              <Fade right><p><b>Price Range</b> is dictated by a two-pointer slider to define both the minimum and maximum prices to display.</p></Fade>
            </div>

            <div className='ImageCaption'>
              <div class="ImgCaptionImg"><Fade left><img src={filters4}></img></Fade></div>
              <Fade right><p><b>Categories</b> uses checkboxes for determining what type of weapon should be shown on the site.</p></Fade>
            </div>
          </div>
          <br></br>
          <br></br>
          <h3>Shopping Cart</h3>
          <p>The shopping car is conveniently placed right below the filters to minimize number of side panels. </p>
          <div className="ImgCaptionWrapper">
            <div className='ImageCaption'>
              <div class="ImgCaptionImg"><Fade left><img src={cart}></img></Fade></div>
              <Fade right>
              <div>
                <p> I used the card concept to represent each item in the shopping cart, which contains its image, name, and unit price, and quantity. </p>
                <p> I gave users the ability to change the quantity of each cart item as well as the ability to clear their cart for convenience. </p>
              </div>
              </Fade>
            </div>
          </div>
        </div>

        <div class="ProjectSection">
          <h1>Component Architecture</h1>
          <h3>How Data is Passed Down Through Components</h3>
          <p> 
            <b>Filters</b> takes in <b>weaponData</b> because it needs access to all weapon information in order to sort and filter.  <b>Filters</b> also takes in <b>itemsToDisplay</b>, and <b>setItemsToDisplay</b> to read and modify what and how items should be shown on the page.</p>
            <ul>
              <li><b>SortBy</b> takes in <b>sortBy</b> and <b>changeSortBy</b></li>
              <li><b>PriceRange</b> takes in <b>costRange</b> and <b>changeCostRange</b></li>
              <li><b>Categories</b> takes in <b>checkedCategories</b> and <b>changeCheckedCategories</b></li>
            </ul>
          <p>
            In addition to its basic information, <b>WeaponItem</b> also takes in an <b>addItem</b> function, which gives the buy button for each weapon card functionality.
          </p>
          <p>
          Similarly, <b>CartItem</b> takes in basic information of the weapon added to the cart. I also pass in an <b>incItem</b> and <b>decItem</b> to increase and decrease the quantity values of any item in the cart.
          </p>
        </div>

        <div class="ProjectSection">
          <h1>States</h1>
          <h3>How the User Triggers State Changes</h3>
          <p> 
          <b>sortBy</b> is a state that keeps track of what the shopping list of weapons are currently being sorted by, such as name, price, category, and fire rate. Since the items can only be sorted by one type at a time, I only used one variable, which is triggered by the checking of the radio buttons under the Sort By category.
          </p>
          <p><b>itemsToDisplay</b> is an array of all the purchasable weapons and its basic info that keeps track of their sorted order, which changes accordingly when any of the following states are changed: <b>sortBy</b>, <b>costRange</b> and <b>checkedCategories</b>. <b>itemsToDisplay</b> is used to display the weapons in the shopping list in a specific order.</p>
          <p><b>costRange</b> is a state that keeps track of the price range filter. This state has two values, which correspond to the minimum and maximum prices of the weapons that the user wants to view. This array of values are triggered by moving both sliders of the slider input under the Price Range section.</p>
          <p><b>checkedCategories</b> is an object state that keeps track of all weapon categories and whether or not it is checked in the filters section. It's structured such that the key is the category name and its value is a boolean that corresponds to the the checked state of its checkbox.</p>
          <p>The <b>cart</b> state is a dictionary keeps track of the items that are currently in the cart, where its key is the item name and the value is its count. This is triggered when the user clicks "BUY" on a weapon card or if the user clicks the add and minus buttons in the shopping cart.</p>
          <p>The <b>total</b> state is an integer that keeps track of the total price of the cart items (aggregate). This state is triggered the ways that <b>cart</b> is triggered (mentioned above).</p>
          <ViewProjBtn bg="#EB565B" color="white" link="https://queasysloth123.github.io/development/"/>
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
