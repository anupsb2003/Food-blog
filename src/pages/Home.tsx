import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import DosaContent from "../components/DosaContent/DosaContent";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DosaContent />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;