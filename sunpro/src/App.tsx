import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Shop from "./Shop";
import Navbar from "./components/Navbar.tsx";
import SolarOrderForm from "./components/SolarOrderForm.tsx";
import Sunking from "./components/Sunking.tsx";
import SolarPanels from "./components/Solar-panels.tsx";
import Inverters from "./components/Inverters.tsx";
import Batteries from "./components/Batteries.tsx";
import WaterHeaters from "./components/WaterHeaters.tsx";
import CCTVKits from "./components/CCTVKits.tsx";
import Footer from "./components/Footer.tsx";
import Services from "./components/Services.tsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="home" index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="solarForm" element={<SolarOrderForm />} />
          </Route>
          <Route path="/shop" element={<Navbar />}>
            <Route path="panels" element={<SolarPanels />} />
            <Route path="inverters" element={<Inverters />} />
            <Route path="batteries" element={<Batteries />} />
            <Route path="water-heaters" element={<WaterHeaters />} />
            <Route path="sunking" element={<Sunking />} />
            <Route path="cctv-kits" element={<CCTVKits />} />
          </Route>
          <Route path="/home" element={<Navbar />}>
            <Route path="footer" element={<Footer />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
