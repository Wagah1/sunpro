import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import Shop from "../src/Shop";
import Navbar from "../src/components/Navbar";
import SolarOrderForm from "../src/components/SolarOrderForm";
import Sunking from "../src/components/Sunking.tsx";
import SolarPanels from "../src/components/Solar-panels.tsx";
import Inverters from "../src/components/Inverters.tsx";
import Batteries from "../src/components/Batteries";
import WaterHeaters from "../src/components/WaterHeaters";
import CCTVKits from "../src/components/CCTVKits";
import Footer from "../src/components/Footer";
import Services from "../src/components/Services";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/solarForm" element={<SolarOrderForm />} />
        <Route path="/#footer" element={<Footer />} />
        <Route path="/#servicesDiv" element={<Services />} />
        <Route path="/shop#panels-container" element={<SolarPanels />} />
        <Route path="/shop#inverters-container" element={<Inverters />} />
        <Route path="/shop#batteries-container" element={<Batteries />} />
        <Route path="/shop#heaters-container" element={<WaterHeaters />} />
        <Route path="/shop#sunking-container" element={<Sunking />} />
        <Route path="/shop#cctvKits-container" element={<CCTVKits />} />
      </Routes>
      <Component {...pageProps} />
    </BrowserRouter>
  );
}

export default MyApp;
