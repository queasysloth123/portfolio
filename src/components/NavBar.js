import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBar() {
    function scrollUp() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
      
    return(
        <div className="NavBar">
        <FontAwesomeIcon className="UpIcon" icon={faCircleChevronUp} size="3x" onClick={scrollUp}/>
        <Link to="/">
          <FontAwesomeIcon className="BackIcon" icon={faChevronLeft} size="xl" />
        </Link>
      </div>
    );
}

export default NavBar;