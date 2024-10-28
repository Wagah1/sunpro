import Navbar from "./components/Navbar.tsx";
import Intro from "./components/Intro.tsx";
import Services from "./components/Services.tsx";
import Offers from "./components/Offers.tsx";
import Environment from "./components/Environment.tsx";
import Partners from "./components/Partners.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Environment />
      <Offers />
      <Partners />
      <Testimonials />
      <Footer />
      <Navbar />
    </div>
  );
};

export default App;
