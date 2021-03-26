import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
export default function MealForm({ updateShowForm }) {
  const meal = {
    title: "Marinated & Grilled 17-02",
    description: "Vegetables, a, peanuts & spicy dressing",
    location: "Vesterbro",
    max_reservations: 9,
    price: "150",
  };
  const checkoutSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    location: yup.string().required(),
    when: yup.date().required(),
    max_reservations: yup.number().required(),
    price: yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
      when: moment().format("YYYY-MM-DD"),
      max_reservations: "",
      price: "",
    },
    onSubmit: (values) => {
      saveMeal(values).then((data) => {
        alert(JSON.stringify(data));
        updateShowForm();
      });
    },
    validationSchema: checkoutSchema,
  });

  const saveMeal = async (meal) => {
    const response = await fetch("/api/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meal),
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
            placeholder="Enter title"
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
            placeholder="Enter description number"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            onChange={formik.handleChange}
            value={formik.values.location}
          />
          {formik.errors.location && formik.touched.location ? (
            <div>{formik.errors.location}</div>
          ) : null}

          <input
            type="datetime"
            id="when"
            name="when"
            placeholder="Enter when"
            onChange={formik.handleChange}
            value={formik.values.when}
          />
          {formik.errors.when && formik.touched.when ? (
            <div>{formik.errors.when}</div>
          ) : null}

          <input
            type="number"
            id="max_reservations"
            name="max_reservations"
            placeholder="Enter max_reservations"
            onChange={formik.handleChange}
            value={formik.values.max_reservations}
          />
          {formik.errors.max_reservations && formik.touched.max_reservations ? (
            <div>{formik.errors.max_reservations}</div>
          ) : null}
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price && formik.touched.price ? (
            <div>{formik.errors.price}</div>
          ) : null}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
