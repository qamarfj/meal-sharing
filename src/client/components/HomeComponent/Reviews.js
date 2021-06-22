import React, { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((reviews) => {
        if (reviews.length > 0) {
          setReviews(reviews);
        }
      });
  }, []);

  return (
    <div className="container">
      <h1>Reviews</h1>
      {reviews &&
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
        })}
    </div>
  );
}
