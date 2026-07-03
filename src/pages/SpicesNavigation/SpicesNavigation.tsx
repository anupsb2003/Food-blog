import "./SpicesNavigation.css";
import spicesList from "../../assets/SpicesList.mp4";
import SpicesHeroSection from "./SpicesHeroSection/SpicesHeroSection";
import SpicesOriginSection from "./SpicesOriginSection/SpicesOriginSection";
import SpicesCollection from "./SpicesCollection/SpicesCollection";
import SpicesEthical from "./SpicesEthical/SpicesEthical";
import SpicesNewsletter from "./SpicesNewsletter/SpicesNewsletter";
import SpicesFooter from "./SpicesFooter/SpicesFooter";
import SpicesNavbar from "./SpicesNavbar/SpicesNavbar";
function SpicesNavigation(){
    return(
        <div className="luxury-Spices-wrapper">

      {/* VIDEO BACKGROUND */}
      <video
        className="luxury-Spices-video"
        autoPlay
        playsInline
      >
        <source
          src={spicesList}
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="luxury-Spices-overlay"></div>

      {/* SCROLLABLE CONTENT */}
      <div className="luxury-Spices-scroll-container">
        <SpicesNavbar/>
            <SpicesHeroSection />
            <SpicesOriginSection />
            <SpicesCollection />
            <SpicesEthical />
            <SpicesNewsletter/>
            <SpicesFooter/>
        </div>

    </div>
    )
}
export default SpicesNavigation;
