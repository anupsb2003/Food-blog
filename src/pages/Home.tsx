import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DosaScrollAnimation from "../components/DosaScrollAnimation/DosaScrollAnimation";
import FoodTicker from "../components/FoodTicker/FoodTicker";
import ManifestoSection from "../components/ManifestoSection/ManifestoSection";
import ContentPillars from "../components/ContentPillars/ContentPillars";
import LatestEntries from "../components/LatestEntries/LatestEntries";
import LabelLab from "../components/LabelLab/LabelLab";
import PhotoEssay from "../components/PhotoEssay/PhotoEssay";
import AboutSection from "../components/AboutSection/AboutSection";
import FieldNotes from "../components/FieldNotes/FieldNotes";
import Newsletter from "../components/Newsletter/Newsletter";
function Home() {
  return (
    <>
      <Navbar />
      <DosaScrollAnimation />
      <FoodTicker/>
      <ManifestoSection />
      <ContentPillars />
      <LatestEntries />
      <LabelLab />
      <PhotoEssay />
      <AboutSection />
      <FieldNotes />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;