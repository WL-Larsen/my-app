import { useEffect, useState } from "react";
import "./toggle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DarkMode() {
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const [toggled, setToggled] = useState(() => {
    return (
      localStorage.theme == "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    );
  });

  useEffect(() => {
    if (toggled) {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [toggled]);

  const handleClick = () => {
    setToggled(!toggled);
    toast.success("theme changed", {
      position: "top-right",
      autoClose: 1000,
      theme: "colored",
    });
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        className={`toggle-btn ${
          toggled ? "toggled" : ""
        } bg-[#8F88FF] md:bg-mv dark:bg-[#3A3A3A] top-[0px] 
          md:h-5 w-[55px] lg:h-[24px]`}
        onClick={handleClick}
      >
        <div className="thumb w-1 h-1 md:w-3 md:h-3 lg:w-4 lg:h-4"></div>
        <div className="thumb2 bg-[#3A3A3A] opacity-0 dark:opacity-100 duration-500 w-1 h-1 md:w-3 md:h-3 lg:w-4 lg:h-4"></div>
      </button>
      <p className="pl-1 flex items-center text-[#8F88FF] md:text-mv font-int text-[8px] md:text-xs lg:text-[15px] font-bold dark:text-white">
        {toggled ? "DARK MODE" : "LIGT MODE"}
      </p>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default DarkMode;
