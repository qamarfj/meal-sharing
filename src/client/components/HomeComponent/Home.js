import React, { useEffect, useState } from "react";

export default function Home({ meals }) {
  return (
    <div className="main">
      <div className="heading">
        <h1>Meals sharing App</h1>
        <h3>All Meals</h3>
        <hr />
      </div>
      {meals &&
        meals.map((meal) => {
          return (
            <div key={meal.id}>
              <h3>{meal.title}</h3>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
