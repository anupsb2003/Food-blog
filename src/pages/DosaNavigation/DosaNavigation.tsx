import DosaNavbar from "./DosaNavbar/DosaNavbar";
import CrunchSection from "./CrunchSection/CrunchSection";
import DosaList from "./Dosa/DosaList"
import DosaFooter from "./DosaFooter/DosaFooter";
import FermentationSection from "./FermentationSection/FermentationSection";
import HolyTrinity from "./HolyTrinity/HolyTrinity";
import dosaList from "../../assets/dosaList.mp4";
import "./dosaNavigation.css";
function DosaNavigation(){
    return (
        <div className="luxury-dosa-wrapper">

      {/* VIDEO BACKGROUND */}
      <video
        className="luxury-dosa-video"
        autoPlay
        playsInline
        loop
      >
        <source
          src={dosaList}
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="luxury-dosa-overlay"></div>

      {/* SCROLLABLE CONTENT */}
      <div className="luxury-dosa-scroll-container">
            <DosaNavbar />
            <DosaList />
            <FermentationSection />
            <CrunchSection />
            <HolyTrinity />
            <DosaFooter />
        </div>

    </div>
    )
}
export default DosaNavigation;