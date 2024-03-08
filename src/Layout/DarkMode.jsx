import { useEffect, useState } from "react";
import './toggle.css';



function DarkMode() {
  const [toggled, setToggled] = useState(false);
  const element = document.documentElement
  console.log(localStorage.theme)
  

  useEffect(() => {
    switch (toggled) {
      case false:
        element.classList.add("dark");
        localStorage.setItem("theme", true)       
        break;
      case true:
        element.classList.remove("dark");
        localStorage.setItem("theme", false)
        break;
      default:
        localStorage.setItem("theme")
        break;
    }
  }, [toggled]);

  const handleClick = ()=>{
    setToggled(!toggled)
  }
  return (
    <div className="App">
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""} dark:bg-[#3A3A3A]`}
        onClick={handleClick}
      >
        <div className="thumb"></div>
        <div className="thumb2 bg-[#8F88FF] dark:bg-[#3A3A3A]"></div>
      </button>
    </div>
  );
}

export default DarkMode;
