import image1 from './assets/image1.jfif';
import image2 from './assets/image2.jfif';
import image3 from './assets/image3.jfif';
import image4 from './assets/image4.jfif';
import image5 from './assets/image5.jfif';
import image6 from './assets/image6.jfif';
import image7 from './assets/image7.jfif';

export default function LatestPhotos() {
  return (
    <div className='latest-photos-main-container'>
      <div className='latest-photo-section'>
        <p>Latest Photos</p>
        <ul>
          <li><img src={image1}/></li>
          <li><img src={image2}/></li>
          <li><img src={image3}/></li>
        </ul>
        <ul>
          <li><img src={image4}/></li>
          <li><img src={image5}/></li>
          <li><img src={image6}/></li>
        </ul>
        <ul>
          <li><img src={image7}/></li>
          <li><img src={image3}/></li>
          <li><img src={image5}/></li>
        </ul>
      </div>
    </div>
  )
}
