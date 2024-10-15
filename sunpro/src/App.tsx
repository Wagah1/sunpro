import Navbar from "./components/Navbar.tsx";
import Intro from "./components/intro.tsx";
import Services from "./components/Services.tsx";

const App = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Navbar />
    </div>
  );
};

export default App;
