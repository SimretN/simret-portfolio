import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <section id="center">
      <div>
        <Hero />
        <h1>Hi My name is Simret</h1>
      </div>
    </section>
  );
}

export default App;
