import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/:jobslug/:companyslug" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
