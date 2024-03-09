import { useEffect, useState } from "react";
import './toggle.css';



function DarkMode() {
  const [toggled, setToggled] = useState(false);
  const element = document.documentElement

  function onWindowMatch(){

  }

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
    <div className="App flex gap-[10px]">
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""} dark:bg-[#3A3A3A] top-[0px]`}
        onClick={handleClick}
      >
        <div className="thumb"></div>
        <div className="thumb2 bg-[#8F88FF] dark:bg-[#3A3A3A]"></div>
      </button>
        <p className='text-mv font-int text-[15px] font-bold dark:text-white'>
        {toggled ? "DARK MODE" : "LIGT MODE"}
        </p>
        
    </div>
    
  );
}

export default DarkMode;
