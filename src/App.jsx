import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Sorting from "./Component/SortingAlgo/Sorting";
import LinkedListVisualizer from "./Component/LinkedList/LinkedList";
import BST from "./Component/BST/bst";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting-algorithms" element={<Sorting />} />
        <Route path="/linkedlist-algorithms" element={<LinkedListVisualizer />} />
        <Route path="/bst-algorithms" element={<BST />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
