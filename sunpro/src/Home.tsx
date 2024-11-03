import Intro from "./components/Intro";
import Services from "./components/Services";
import Environment from "./components/Environment";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";

const Home = () => (
  <div>
    <Intro />
    <Services />
    <Environment />
    <Partners />
    <Testimonials />
    <Footer />
    <Navbar />
  </div>
);

export default Home;
