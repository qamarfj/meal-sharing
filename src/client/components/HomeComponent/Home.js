import React from "react";
import MealDetail from "./MealDetail";

export default function Home({ meals }) {
  return (
    <div className="main">
      {meals &&
        meals.map((meal) => {
          return (
            <div className="meal-text" key={meal.id}>
              <MealDetail meal={meal} />
              <hr />
            </div>
          );
        })}
    </div>
  );
}
