import async from "async";
import React, { useState } from "react";

export default function ReservationsForm({ id, upateShowForm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const reservation = {
    number_of_guests: 1,
    meal_id: id,
    contact_phonenumber: "4578787878",
    contact_name: "tttttttttttttt",
    contact_email: "tttttta@mail.com",
  };

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
  const submitHandler = (e) => {
    e.preventDefault();

    saveReservation().then((data) => {
      alert(JSON.stringify(data));
      upateShowForm();
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Name" />
        <input type="phone" placeholder="Enter phone number" />
        <input type="email" placeholder="Enter email" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
