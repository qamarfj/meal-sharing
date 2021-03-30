import React, { useEffect, useState } from "react";
import Nave from "./Nave";

const image = "../../../../../public/banner.jpg";
export default function Header({ setMeals }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search !== "") {
      fetch(`/api/meals?title=${search}`)
        .then((response) => response.json())
        .then((meals) => {
          setMeals(meals);
        });
    }
  }, [search]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>Meal Sharing App</h1>
        </div>
        <div className="header-left">
          <div>
            <input
              type="text"
              onChange={onChangeHandler}
              placeholder="enter search here"
            />
          </div>
          <Nave />
        </div>
      </div>
      <div>
        <img src={image} alt="banner image" width="100%" height="300em" />
        <hr />
      </div>
    </>
  );
}
