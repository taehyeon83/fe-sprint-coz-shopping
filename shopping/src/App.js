import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <Item />
      <Footer />
    </div>
  );
}

export default App;
