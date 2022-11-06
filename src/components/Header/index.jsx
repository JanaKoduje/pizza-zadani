import React from "react";
import { usePrefs } from "../../prefs-context";

import "./style.css";

const Header = () => {
  const { veganOnly, toggleVeganOnly } = usePrefs();

  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <div className="topping">
        <button className="check" onClick={toggleVeganOnly}>
          {veganOnly ? "✓" : ""}
        </button>
        <span className="topping__content">Vegan only</span>
      </div>
    </header>
  );
};

export default Header;
