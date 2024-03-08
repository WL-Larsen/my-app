import { useState } from "react";
import './toggle.css';

function Toggle() {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="App">
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <div className="thumb"></div>
      </button>
      
    </div>
  );
}

export default Toggle;
