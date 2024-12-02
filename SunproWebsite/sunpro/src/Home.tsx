import Intro from "./components/Intro";
import ServiceArea from "./components/ServiceArea.tsx";
import Services from "./components/Services";
import Environment from "./components/Environment";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials.tsx";
import Footer from "./components/Footer.tsx";
import Roadmap from "./components/Roadmap.tsx";

const Home = () => (
  <div>
    <Intro />
    <ServiceArea />
    <Roadmap />
    <Services />
    <Environment />
    <Partners />
    <Testimonials />
    <Footer />
  </div>
);

export default Home;
