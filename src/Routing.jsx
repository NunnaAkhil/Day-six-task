
import { Routes,Route } from 'react-router-dom';
import SocialFeed from "./SocialFeed";
import About from './About';
import Friends from "./Friends";
import Photos from "./Photos";
import Videous from "./Videous"

export default function Routing() {
  return (
    <div className='timeline-container'>
        <Routes>
        <Route path="home" element={<SocialFeed/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='friends' element={<Friends/>}/>
        <Route path='photos' element={<Photos/>}/>
        <Route path='videos' element={<Videous/>}/>
        </Routes>
    </div>
  )
}

