const knex = require("../database");
module.exports = {
  getAllReservations: async () => {
    return await knex("reservations");
  },
  getReservationById: async (id) => {
    return await knex("reservations").where("id", "=", id);
  },
  addReservation: async (reservation) => {
    await knex("reservations").insert(reservation);
    return { success: true, message: "ok" }; // respond back to request
  },
  updateReservation: async (id, updateFields) => {
    const reservation = await knex("reservations")
      .select("id")
      .where("id", "=", id);
    //if reservation dosenot exists
    if (!reservation) {
      return "do not exist";
    } else {
      await knex("reservations")
        .update("title", updateFields.title)
        .where("id", reservation[0].id);

      return { success: true, message: "ok" };
    }
  },
  removeReservation: async (id) => {
    const reservation = await knex("reservations")
      .select("id")
      .where("id", "=", id);

    //if reservation dosenot exists
    if (!reservation) {
      return "do not exist";
    } else {
      await knex("reservations").where("id", "=", id).del();

      return { success: true, message: "ok" };
    }
  },
};
