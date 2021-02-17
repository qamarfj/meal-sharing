const knex = require("../database");
module.exports = {
  getAllReservations: async () => {
    return await knex("reservations").select("*");
  },
  getReservationById: async (id) => {
    return await knex("reservations").select("*").where("id", "=", id);
  },
  addReservation: async (reservation) => {
    const addedReservationsId = await knex("reservations").insert(reservation);
    // respond back with added reservation
    return await knex("reservations")
      .select("*")
      .where("id", "=", addedReservationsId[0]);
  },

  updateReservation: async (id, reservationToUpdate) => {
    const oldReservation = await knex("reservations")
      .select("*")
      .where("id", "=", id);

    if (oldReservation.length > 0) {
      await knex("reservations")
        .update(reservationToUpdate)
        .where("id", oldReservation[0].id);
      const updatedReservation = await knex("reservations")
        .select("*")
        .where("id", "=", id);
      return updatedReservation;
    } else {
      return "id does not exist";
    }
  },

  removeReservation: async (id) => {
    return await knex("reservations").where("id", "=", id).del();
  },
};
