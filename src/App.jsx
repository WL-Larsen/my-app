import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="scroll-container">
      <div className="scroll-item">
        <Hero />
      </div>

      <div className="scroll-item">
        <Skills />
      </div>

      <div className="scroll-item">
        <Profile />
      </div>

      <div className="scroll-item">
        <Project />
      </div>

      <div className="scroll-item">
        <Footer />
      </div>
    </div>
  );
}

export default App;
