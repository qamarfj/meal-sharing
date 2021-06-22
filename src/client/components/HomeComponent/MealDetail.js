import React from "react";
import { Link } from "react-router-dom";
export default function MealDetail({ meal }) {
  return (
    <>
      <div>
        <img src="https://i.ibb.co/dDYTpHQ/meal.jpg" alt="meal" />
      </div>
      <div key={meal.id}>
        <Link to={`/meals/${meal.id}`} className="naveBar">
          <h3>{meal.title}</h3>
        </Link>
        <h4>{meal.description}</h4>
        <p>Price: {meal.price} Dkk</p>
        <Link to={`/mealreviews/${meal.id}`} className="naveBar">
          Add Reviews to this Meal
        </Link>
      </div>
    </>
  );
}
