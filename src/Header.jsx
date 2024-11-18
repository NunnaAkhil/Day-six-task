import Button from 'react-bootstrap/Button';
import ProfileImage from "./assets/Profile.png"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-section'>
    <div className='header-container'>
      <div className='profile-container'>
      <img className="profile-image" src={ProfileImage}/>
      <p>Ravi</p>
      </div>
      <div className='edit-button-container'>
      <Button variant="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</Button>
      </div>
    </div>
    <div className='navbar-section'>
       <ul>
        <li><Link to ={"/home"}><i class="fa fa-black-tie" aria-hidden="true"></i> Timelines</Link></li>
        <li><Link to={"/about"}><i class="fa fa-user" aria-hidden="true"></i> about</Link></li>
        <li><Link to={"friends"}><i class="fa fa-user" aria-hidden="true"></i> friends</Link></li>
        <li><Link to={"/photos"}><i class="fa fa-picture-o" aria-hidden="true"></i> photos</Link></li>
        <li><Link to={"/videos"}><i class="fa fa-video-camera" aria-hidden="true"></i> Videos</Link></li>
       </ul>
      </div>
    </div>
  )
}
