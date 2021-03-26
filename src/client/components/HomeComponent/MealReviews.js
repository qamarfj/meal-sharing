import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

export default function MealReviews() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/reviews?meal_id=${id}`)
      .then((response) => response.json())
      .then((reviews) => {
        if (reviews.length > 0) {
          setReviews(reviews);
        }
      });
  }, [showForm]);

  const submitHandler = () => {
    setShowForm(true);
  };
  const updateShowForm = () => {
    setShowForm(false);
  };
  return (
    <div className="container">
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <>
              <div>
                id: {review.id} Meal ID: {review.meal_id} Title: {review.title}
              </div>
              <div>Description : {review.description} </div>
              <div>stars : {review.stars}</div>
              <div>Created Date: {review.created_date}</div>
              <hr />
            </>
          );
        })
      ) : (
        <div>no review Found </div>
      )}
      <button onClick={submitHandler}>Add Review</button>

      {showForm && <ReviewForm id={id} updateShowForm={updateShowForm} />}
    </div>
  );
}
