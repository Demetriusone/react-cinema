import React from "react";
// Styles
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => (
  <div className="App">
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
