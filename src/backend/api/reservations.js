const express = require("express");
const router = express.Router();
const knex = require("../database");

const dbReservationsHeleper = require("../models/dbReservationsHelepers");

router.get("/", async (request, response) => {
  try {
    const reservations = await dbReservationsHeleper.getAllReservations();
    response.json(reservations);
  } catch (error) {
    response.status(400).json(error);
  }
});
router.get("/:id", async (request, response) => {
  try {
    const reservations = await dbReservationsHeleper.getReservationById(
      request.params.id
    );
    response.json(reservations);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.post("/", async (request, response) => {
  try {
    const addedReservation = await dbReservationsHeleper.addReservation(
      request.body
    );
    response.json(addedReservation);
  } catch (error) {
    response.status(400).json(error);
  }
});
router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const reservationToUpdate = request.body;
    const updatedReservation = await dbReservationsHeleper.updateReservation(
      id,
      reservationToUpdate
    );

    response.json(updatedReservation);
  } catch (error) {
    response.status(400).json(error);
  }
});
router.delete("/:id", async (request, response) => {
  try {
    await dbReservationsHeleper.removeReservation(request.params.id);
    response.status(204).json({}); // respond back to request
  } catch (error) {
    response.status(400).json(error);
  }
});
module.exports = router;
