import React, { useState } from "react";
import MealForm from "./MealForm";

export default function AddMeal({ setAddedNewmeal }) {
  const [meal, setMeal] = useState({});
  const [showForm, setShowForm] = useState(false);

  const submitHandler = () => {
    setShowForm(true);
  };
  const updateShowForm = () => {
    setShowForm(false);
    setAddedNewmeal();
  };
  return (
    <div className="container">
      <button onClick={submitHandler}>Add New Meal</button>

      {showForm && <MealForm updateShowForm={updateShowForm} />}
    </div>
  );
}
