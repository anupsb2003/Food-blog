import DosaNavbar from "./DosaNavbar/DosaNavbar";
import CrunchSection from "./CrunchSection/CrunchSection";
import DosaList from "./Dosa/DosaList"
import DosaFooter from "./DosaFooter/DosaFooter";
import FermentationSection from "./FermentationSection/FermentationSection";
import HolyTrinity from "./HolyTrinity/HolyTrinity";
function DosaNavigation(){
    return (
        <div>
            <DosaNavbar />
            <DosaList />
            <FermentationSection />
            <CrunchSection />
            <HolyTrinity />
            <DosaFooter />
        </div>
    )
}
export default DosaNavigation;