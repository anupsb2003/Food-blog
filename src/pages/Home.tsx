import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import DosaContent from "../components/DosaContent/DosaContent";
import CoffeeContent from "../components/CoffeeContent/CoffeeContent";
import DosaScrollAnimation from "../components/DosaScrollAnimation/DosaScrollAnimation";
import CoffeeScrollAnimation from "../components/CoffeeScrollAnimation/CoffeeScrollAnimation";
import SpicesScrollAnimation from "../components/SpicesScrollAnimation/SpicesScrollAnimation";
function Home() {
  return (
    <>
      <Navbar />
      <DosaScrollAnimation />
      <SpicesScrollAnimation />
      <CoffeeScrollAnimation />
      {/* <CoffeeContent />
      <DosaContent /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;