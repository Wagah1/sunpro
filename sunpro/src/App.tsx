import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Shop from "./Shop";
import Navbar from "./components/Navbar.tsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="home" index element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
