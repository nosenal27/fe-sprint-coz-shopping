import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Products />
        <Routes>
          <Route path="/" />
          <Route path="/productList" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
