import ProfileImage from "./assets/Profile.png";

export default function Timelines(props) {
    return (
        <div className='social-feed-container'>
          <div className='social-feed-header'>
            <div className='social-feed-icon-container'> 
            <img className='timeline-image' src={ProfileImage} />
            <div>
            <p>{props.title}</p>
            <p>1 min</p>
            </div>
            </div>
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>
          <div>
              <p>Lorem ipsum is a dummy text</p>
          </div>
          <div>
              <img src={props.image}/>
          </div>
        </div>
      )
}
