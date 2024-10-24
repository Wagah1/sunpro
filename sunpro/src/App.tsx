import Navbar from "./components/Navbar.tsx";
import Intro from "./components/Intro.tsx";
import Services from "./components/Services.tsx";
import Offers from "./components/Offers.tsx";
import Environment from "./components/Environment.tsx";
import Partners from "./components/Partners.tsx";

const App = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Environment />
      <Offers />
      <Partners />
      <Navbar />
    </div>
  );
};

export default App;
