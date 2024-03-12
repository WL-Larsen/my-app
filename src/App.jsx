
import { useState } from 'react';
import './App.css'
import Hero from './Components/Hero';
import Skils from './Components/Skills';
import Profile from './Components/Profile';
import Project from './Components/Project';


function App() {
  return (
    <>
    <Hero />
    <Skils/>
    <Profile/>
    <Project/>
    </>
  )
}

export default App;