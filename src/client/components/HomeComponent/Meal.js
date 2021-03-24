import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReservationsForm from "./ReservationsForm";
export default function Meal({ meals }) {
  const [meal, setMeal] = useState();
  const [showForm, setShowForm] = useState(false);
  const [availeable, setavaileable] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log("fetching for available");
    fetch("/api/meals?availableReservations=true")
      .then((response) => response.json())
      .then((meals) => {
        const availeableMeals = meals.find((meal) => meal.id.toString() === id);
        if (availeableMeals) {
          setavaileable(meals);
        }
      });
  }, []);

  useEffect(() => {
    setMeal(meals.find((meal) => meal.id.toString() === id));
  }, []);

  const submitHandler = () => {
    setShowForm(true);
  };
  const upateShowForm = () => {
    setShowForm(false);
  };
  return (
    <div>
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
          {availeable && (
            <button onClick={submitHandler}>Reservar Table</button>
          )}
        </>
      )}
      {showForm && (
        <ReservationsForm id={meal.id} upateShowForm={upateShowForm} />
      )}
    </div>
  );
}
