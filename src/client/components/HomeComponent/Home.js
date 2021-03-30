import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AutoComplete from "./AutoComplete";
import Meal from "./Meal";
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
