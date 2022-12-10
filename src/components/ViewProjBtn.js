import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faRoadSpikes, faCircleChevronLeft, faCircleChevronUp, faHouseMedicalCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ViewProjBtn(props) {
    console.log(props.txt)
    return(
        <a href={props.link} target="_blank" style={{textDecoration: "None"}}>
        <div className="ViewProjBtn" style={{
            backgroundColor: props.bg,
            color: props.color
        }}>{props.txt != undefined ? props.txt : "View Live"} <FontAwesomeIcon icon={faChevronRight} /></div>
        </a>
    );
}
export default ViewProjBtn;