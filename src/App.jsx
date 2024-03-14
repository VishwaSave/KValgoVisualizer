import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Sorting from "./Component/SortingAlgo/Sorting";
import LinkedListVisualizer from "./Component/LinkedList/LinkedList";
import Array from "./Component/Array/array";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting-algorithms" element={<Sorting />} />
        <Route path="/linkedlist-algorithms" element={<LinkedListVisualizer />} />
        <Route path="/array-algorithms" element={<Array />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
