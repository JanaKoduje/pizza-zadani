import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const [selectedToppings, setSelectedToppings] = useState(toppings);
  const [count, setCount] = useState([]);

  const handleSelectChanged = (index, select) => {
    const newToppings = [...selectedToppings];
    newToppings[index].selected = select;
    setSelectedToppings(newToppings);

    const newCount = newToppings.filter((top) => top.selected === true);
    setCount(newCount);
  };

  const price = count.reduce((previous, object) => {
    return previous + object.price;
  }, 0);

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {count.length}, total price: {price.toFixed(2)} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onSelectedChange={(select) => handleSelectChanged(index, select)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
