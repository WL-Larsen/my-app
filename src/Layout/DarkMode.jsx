import { useEffect, useState } from "react";
import './toggle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function DarkMode() {
  const [toggled, setToggled] = useState(false);
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")


// tekrar bakılacak çalışmıyor
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

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
    setToggled(!toggled);
    toast.success('theme changed', {
      position: "top-right",
      autoClose: 1000,
      theme: "colored",
      });
  }

  

  return (
    <div className="App flex gap-[10px]">
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""} dark:bg-[#3A3A3A] top-[0px]`}
        onClick={handleClick} 
      >
        <div className="thumb"></div>
        <div className="thumb2 bg-[#3A3A3A] opacity-0 dark:opacity-100 duration-500"></div>
      </button>
        <p className='text-mv font-int text-[15px] font-bold dark:text-white'>
        {toggled ? "DARK MODE" : "LIGT MODE"}
        </p>
        <ToastContainer/>
    </div>
    
  );
}

export default DarkMode;
