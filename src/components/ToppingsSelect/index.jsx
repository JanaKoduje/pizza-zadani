import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const [selectedToppings, setSelectedToppings] = useState(toppings);

  const handleSelectChanged = (index) => {
    const newToppings = [...selectedToppings];
    newToppings[index].selected = !newToppings[index].selected;
    setSelectedToppings(newToppings);
  };

  const totalPrice = selectedToppings.reduce(
    (sum, { selected, price }) => (selected ? sum + price : sum),
    0
  );
  const selectedNumber = selectedToppings.reduce(
    (number, { selected }) => (selected ? number + 1 : number),
    0
  );
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedNumber}, total price: {totalPrice.toFixed(2)} {" "}
        Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onSelectedChange={() => handleSelectChanged(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
