// CoffeNavigation.tsx

import "./CoffeeNavigation.css";
import coffeeList from "../../assets/CoffeeList.mp4";

import CoffeeHero from "./CoffeeHero/CoffeeHero";
import CoffeeTradition from "./CoffeeTradition/CoffeeTradition";
import CoffeeAlchemy from "./CoffeeAlchemy/CoffeeAlchemy";
import CoffeeBrass from "./CoffeeBrass/CoffeeBrass";
import CoffeeCollection from "./CoffeeCollection/CoffeeCollection";
import CoffeeFooter from "./CoffeeFooter/CoffeeFooter";
import CoffeeNavbar from "./CoffeeNavbar/CoffeeNavbar";

function CoffeNavigation() {
  return (
    <div className="luxury-coffee-wrapper">

      {/* VIDEO BACKGROUND */}
      <video
        className="luxury-coffee-video"
        autoPlay
        playsInline
      >
        <source
          src={coffeeList}
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="luxury-coffee-overlay"></div>

      {/* SCROLLABLE CONTENT */}
      <div className="luxury-coffee-scroll-container">
        <CoffeeNavbar />
        <CoffeeHero />
        <CoffeeTradition />
        <CoffeeAlchemy />
        <CoffeeBrass />
        <CoffeeCollection />
        <CoffeeFooter />
      </div>

    </div>
  );
}

export default CoffeNavigation;