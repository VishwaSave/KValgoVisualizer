import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Sorting from "./Component/SortingAlgo/Sorting";
import LinkedListVisualizer from "./Component/LinkedList/linkedlist";
import BST from "./Component/BST/bst";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting-algorithms" element={<Sorting />} />
        <Route path="/linkedlist-algorithms" element={<LinkedListVisualizer />} />
        <Route path="/bst-algorithms" element={<BST />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
