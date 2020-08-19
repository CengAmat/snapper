import React from "react";
import Header from "./Header";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <div id="app">
      <div class="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
