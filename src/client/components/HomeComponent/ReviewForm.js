import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
export default function ReviewForm({ id, updateShowForm }) {
  const review = {
    meal_id: id,
  };
  const checkoutSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    stars: yup
      .string()
      .length(1, "Enter correct stars")
      .matches(/[0-5]+/gi, "Enter correct number")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      stars: "",
    },
    onSubmit: (values) => {
      review.title = values.title;
      review.description = values.description;
      review.stars = values.stars;
      saveReview().then((data) => {
        alert(JSON.stringify(data));
        updateShowForm();
      });
    },
    validationSchema: checkoutSchema,
  });

  const saveReview = async () => {
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    return response.json();
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <div>
          <input
            type="number"
            id="stars"
            name="stars"
            placeholder="Enter stars 1-5"
            onChange={formik.handleChange}
            value={formik.values.stars}
          />
          {formik.errors.stars && formik.touched.stars ? (
            <div>{formik.errors.stars}</div>
          ) : null}{" "}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
