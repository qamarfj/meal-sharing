import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Meal({ meals }) {
  const [meal, setMeal] = useState();
  const { id } = useParams();
  useEffect(() => {
    setMeal(meals.filter((meal) => meal.id.toString() === id)[0]);
  }, []);

  return (
    <div>
      {meal && (
        <>
          id: {meal.id} Title: {meal.title} description : {meal.description}
        </>
      )}
    </div>
  );
}
