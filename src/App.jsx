import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Project from "./Components/Project";
import Foter from "./Components/Footer";
import Hero2 from "./Components/Hero2";

function App() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Skills />
      <Profile />
      <Project />
      <Foter />
    </>
  );
}

export default App;
