import React from "react";
import { Link } from "react-router-dom";
export default function MealDetail({ meal }) {
  return (
    <>
      <Link to={`/meals/${meal.id}`} className="naveBar">
        <img src="https://i.ibb.co/dDYTpHQ/meal.jpg" alt="meal" />
      </Link>
      <div key={meal.id}>
        <h3>{meal.title}</h3>
        <h4>{meal.description}</h4>
        <p>Price: {meal.price} Dkk</p>
      </div>
    </>
  );
}
