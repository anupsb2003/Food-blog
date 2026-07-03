import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
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
      <Contact />
      <Footer />
    </>
  );
}

export default Home;