import SolarPanels from "./components/Solar-panels.tsx";
import Inverters from "./components/Inverters.tsx";
import Footer from "./components/Footer.tsx";
import Batteries from "./components/Batteries.tsx";
import Sunking from "./components/Sunking.tsx";
import WaterHeaters from "./components/WaterHeaters.tsx";
import CCTVKits from "./components/CCTVKits.tsx";
import Offers from "./components/Offers";

const Shop = () => {
  return (
    <div>
      <SolarPanels />
      <Inverters />
      <Batteries />
      <WaterHeaters />
      <Sunking />
      <CCTVKits />
      <Offers />
      <Footer />
    </div>
  );
};

export default Shop;
