import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
export default function Nave() {
  return (
    <div className="navBar1">
      <Link to={"/"} className="naveBar">
        Home
      </Link>
      <Link to={"/meals"} className="naveBar">
        Meals
      </Link>
      <Link to={"/reviews"} className="naveBar">
        All Reviews
      </Link>
      <Link to={"/addmeal"} className="naveBar">
        Add Meal
      </Link>
    </div>
  );
}
