import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Main />
          <Routes>
            <Route path="/" />
            <Route path="/productList" />
            <Route path="/bookmark" />
          </Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
