import { Link } from 'react-router-dom';
function ProjectPreview(props) {
  return (
    <div className="ProjectPreview">
      <img src={props.img}></img>
        {/* <Link to={props.url}>
            <img src={props.img}></img>
        </Link> */}
    </div>
  );
}

export default ProjectPreview;
