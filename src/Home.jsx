import Header from "./Header";
import Sidebar from "./Sidebar";
import Routing from "./Routing";
import LatestPhotos from "./LatestPhotos";

export default function Home() {
  return (
    <div className="main-section">
      <h1>Facebook Aplication</h1>
      <Header/>
      <div className="body-container">
       <Sidebar/>
       <Routing/>
       <LatestPhotos/>
      </div>
    </div>
  )
}
