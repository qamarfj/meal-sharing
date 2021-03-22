import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Meals({ meals }) {
  return (
    <div className="main">
      <h3>All Meals</h3>
      <hr />
      {meals &&
        meals.map((meal) => {
          return (
            <div key={meal.id}>
              <h3>{meal.title}</h3>
              <Link to={`/meals/${meal.id}`}>Detail</Link>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
