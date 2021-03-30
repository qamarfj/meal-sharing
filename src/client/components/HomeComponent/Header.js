import React, { useEffect, useState } from "react";
import Nave from "./Nave";

const banner_url = "https://i.ibb.co/4ZdRwPG/banner.jpg";
export default function Header({ setMeals }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`/api/meals?title=${search}`)
      .then((response) => response.json())
      .then((meals) => {
        setMeals(meals.reverse());
      });
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
        <img src={banner_url} alt="banner image" width="100%" height="300em" />
        <hr />
      </div>
    </>
  );
}
