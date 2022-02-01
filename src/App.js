import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Designs from "./pages/Designs/Designs";
import Setouts from "./pages/Setouts/Setouts";
import EditSetouts from "./pages/EditSetouts/EditSetouts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-setouts/:id" element={<EditSetouts />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/setouts" element={<Setouts />} />
      </Routes>
    </div>
  );
}

export default App;
