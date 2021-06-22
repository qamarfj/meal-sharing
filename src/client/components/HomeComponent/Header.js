import React from "react";
import Nave from "./Nave";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>Meal Sharing App</h1>
        </div>
        <div className="header-left">
          <Nave />
        </div>
      </div>
    </>
  );
}
