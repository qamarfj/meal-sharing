import React, { useEffect, useState } from "react";
import AutoComplete from "./AutoComplete";

export default function Home({ meals }) {
  const [currentMeals, setCurrentMeals] = useState(meals);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search !== "") {
      fetch(`/api/meals?title=${search}`)
        .then((response) => response.json())
        .then((meals) => {
          setCurrentMeals(meals);
        });
    } else {
      setCurrentMeals(meals);
    }
  }, [search, meals]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="main">
      <div className="heading">
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="enter search here"
        />

        <h1>Meals sharing App</h1>
        <h3>All Meals</h3>
        <hr />
      </div>
      {currentMeals &&
        currentMeals.map((meal) => {
          return (
            <div key={meal.id}>
              <h3>{meal.title}</h3>
              <p>Price: {meal.price} Dkk</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
