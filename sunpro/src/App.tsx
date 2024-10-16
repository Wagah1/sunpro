import Navbar from "./components/Navbar.tsx";
import Intro from "./components/intro.tsx";
import Services from "./components/Services.tsx";
import Popular from "./components/Popular.tsx";
import Offers from "./components/Offers.tsx";

const App = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Popular />
      <Offers />
      <Navbar />
    </div>
  );
};

export default App;
