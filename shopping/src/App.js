import "./App.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Bookmark from "./pages/Bookmark";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products/list" element={<Products />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
