import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReservationsForm from "./ReservationsForm";

export default function Meal({ meals }) {
  const [meal, setMeal] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [available, setAvailable] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/meals?availableReservations=true")
      .then((response) => response.json())
      .then((meals) => {
        const availableMeals = meals.find((meal) => meal.id.toString() === id);
        if (availableMeals) {
          setAvailable(meals);
        }
      });
  }, []);

  useEffect(() => {
    setMeal(meals.find((meal) => meal.id.toString() === id));
  }, []);

  const submitHandler = () => {
    setShowForm(true);
  };
  const updateShowForm = () => {
    setShowForm(false);
  };
  return (
    <div className="container">
      {meal && (
        <>
          <h1>Meal Detail</h1>
          <div>
            id: {meal.id} Title: {meal.title}{" "}
          </div>
          <div>Description : {meal.description} </div>
          <div>Address : {meal.location}</div>
          <div>
            Date: {meal.when} Max. Reservations: {meal.max_reservations} Price :{" "}
            {meal.price} kr.
          </div>
          {available && <button onClick={submitHandler}>Reservar Table</button>}
        </>
      )}
      {showForm && (
        <ReservationsForm id={meal.id} updateShowForm={updateShowForm} />
      )}
    </div>
  );
}
