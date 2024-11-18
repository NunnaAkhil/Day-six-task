import Timelines from './Timelines';
import Image4 from "./assets/image2.jfif";
import Image5 from "./assets/image5.jfif";

export default function SocialFeed() {
  return (
    <div>
    <Timelines title={"Ravi"} image={Image4}/>
    <Timelines title={"Shankar"} image={Image5}/>
    </div>
  )
}
