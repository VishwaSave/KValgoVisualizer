import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Sorting from "./Component/SortingAlgo/Sorting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting-algorithms" element={<Sorting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
