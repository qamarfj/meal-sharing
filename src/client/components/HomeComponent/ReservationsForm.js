import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
export default function ReservationsForm({ id, upateShowForm }) {
  const reservation = {
    number_of_guests: 1,
    meal_id: id,
  };
  const checkoutSchema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    phone: yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {
      reservation.contact_phonenumber = values.phone;
      reservation.contact_email = values.email;
      reservation.contact_name = values.name;
      saveReservation().then((data) => {
        alert(JSON.stringify(data));
        upateShowForm();
      });
    },
    validationSchema: checkoutSchema,
  });

  const saveReservation = async () => {
    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });
    return response.json();
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div>{formik.errors.email}</div>
          ) : null}{" "}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
