import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Component/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
