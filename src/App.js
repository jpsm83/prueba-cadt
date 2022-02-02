import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Designs from "./pages/Designs/Designs";
import Setouts from "./pages/Setouts/Setouts";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/setouts" element={<Setouts />} />
      </Routes>
    </div>
  );
}
