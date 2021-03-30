import React from "react";
import { Link } from "react-router-dom";
import MealDetail from "./MealDetail";

export default function Meals({ meals }) {
  return (
    <div className="main">
      {meals &&
        meals.map((meal) => {
          return (
            <div className="meal-text" key={meal.id}>
              <MealDetail meal={meal} />
              <Link to={`/mealreviews/${meal.id}`} className="naveBar">
                Add Reviews to this Meal
              </Link>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
