import React from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
