import "./App.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./page/Main";
import Products from "./page/Product";
import Bookmark from "./page/Bookmark";
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
