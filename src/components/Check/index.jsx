import React, { useState } from "react";
import "./style.css";

import { usePrefs } from "../../prefs-context";

const Check = ({ checked, onChange, vegan }) => {
  const { veganOnly } = usePrefs();

  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button
      className={`check ${veganOnly && !vegan ? "check--disabled" : ""}`}
      onClick={handleClick}
      disabled={veganOnly && !vegan}
    >
      {checked ? "✓" : ""}
    </button>
  );
};

export default Check;
