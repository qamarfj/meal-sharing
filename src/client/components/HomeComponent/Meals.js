import React from "react";
import AutoComplete from "./AutoComplete";
import MealDetail from "./MealDetail";

export default function Meals({ meals }) {
  return (
    <>
      <div className="search">
        <AutoComplete meals={meals} />
      </div>
      <div className="main">
        {meals &&
          meals.map((meal) => {
            return (
              <div className="meal-text" key={meal.id}>
                <MealDetail meal={meal} />
              </div>
            );
          })}
      </div>
    </>
  );
}
