import React from "react";
import { usePrefs } from "../../prefs-context";

import "./style.css";

const Header = () => {
  const { veganOnly, changeVegans } = usePrefs();

  const handleVegan = () => {
    changeVegans();
  };

  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <div className="topping">
        <button className="check" onClick={handleVegan}>
          {veganOnly ? "✓" : ""}
        </button>
        <span className="topping__content">Vegan only</span>
      </div>
    </header>
  );
};

export default Header;
