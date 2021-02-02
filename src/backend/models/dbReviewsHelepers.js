const knex = require("../database");
module.exports = {
  getAllReviews: async () => {
    return await knex("reviews");
  },
  getReviewById: async (id) => {
    return await knex("reviews").where("id", "=", id);
  },
  addReview: async (review) => {
    await knex("reviews").insert(review);
    return { success: true, message: "ok" }; // respond back to request
  },
  updateReview: async (id, updateFields) => {
    const review = await knex("reviews").select("id").where("id", "=", id);
    //if review dosenot exists
    if (!review) {
      return "do not exist";
    } else {
      await knex("reviews")
        .update("title", updateFields.title)
        .where("id", review[0].id);

      return { success: true, message: "ok" };
    }
  },
  removeReview: async (id) => {
    const review = await knex("reviews").select("id").where("id", "=", id);

    //if review dosenot exists
    if (!review) {
      return "do not exist";
    } else {
      await knex("reviews").where("id", "=", id).del();

      return { success: true, message: "ok" };
    }
  },
};
