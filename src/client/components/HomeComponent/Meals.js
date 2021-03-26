import React from "react";
import { Link } from "react-router-dom";
import AutoComplete from "./AutoComplete";

export default function Meals({ meals }) {
  return (
    <div className="main">
      <div className="searchBar">
        <AutoComplete meals={meals} />
      </div>
      <h3>All Meals</h3>
      <hr />
      {meals &&
        meals.map((meal) => {
          return (
            <div key={meal.id}>
              <h3>{meal.title}</h3>
              <Link to={`/meals/${meal.id}`} className="naveBar">
                Detail
              </Link>{" "}
              : :{" "}
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
