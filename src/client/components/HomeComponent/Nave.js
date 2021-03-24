import React from "react";
import { Link } from "react-router-dom";
import style from "./Nave.module.css";
export default function Nave() {
  return (
    <div className={style.backgroundColor}>
      <Link to={"/"} className="naveBar">
        Home
      </Link>
      <Link to={"/meals"} className="naveBar">
        Meals
      </Link>
    </div>
  );
}
