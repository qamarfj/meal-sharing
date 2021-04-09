import React from "react";
import AutoComplete from "./AutoComplete";

const meal = "https://i.ibb.co/b3sRTSN/meal4.jpg";
export default function Home({ meals }) {
  return (
    <>
      <div className="search">
        <AutoComplete meals={meals} />
      </div>
      <div
        className="bg_image"
        style={{
          backgroundImage: "url(" + meal + ")",
          backgroundSize: "cover",
          height: "70vh",
          opacity: 1,
          color: "green",
        }}
      >
        <h1>The Meal Hub</h1>
        <p>
          The Meal Hub provide you the opportunity to taste home cooked meal
          even you are on traveling.We make it possible by bringing together the
          hostes and visitors.
        </p>
        <p>
          You can view all Meals on our Meals page and you can chosse and book
          it.
        </p>
        <p>
          If you are cooking some delicious food, then we will encour you to
          share your meal here on our App.
        </p>
      </div>
    </>
  );
}
