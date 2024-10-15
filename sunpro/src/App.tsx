import Navbar from "./components/Navbar.tsx";
import Intro from "./components/intro.tsx";
import Services from "./components/Services.tsx";
import Popular from "./components/Popular.tsx";

const App = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Popular />
      <Navbar />
    </div>
  );
};

export default App;
