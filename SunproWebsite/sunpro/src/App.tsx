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
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="solarForm" element={<SolarOrderForm />} />
            <Route path="#footer" element={<Footer />} />
            <Route path="#servicesDiv" element={<Services />} />
          </Route>
          <Route path="/shop" element={<Shop />}>
            <Route path="#panels-container" element={<SolarPanels />} />
            <Route path="#inverters-container" element={<Inverters />} />
            <Route path="#batteries-container" element={<Batteries />} />
            <Route path="#heaters-container" element={<WaterHeaters />} />
            <Route path="#sunking-container" element={<Sunking />} />
            <Route path="#cctvKits-container" element={<CCTVKits />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
