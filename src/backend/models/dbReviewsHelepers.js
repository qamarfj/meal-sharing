const knex = require("../database");
module.exports = {
  getAllReviews: async (id) => {
    if (id) {
      return await knex("reviews").select("*").where("meal_id", "=", id);
    } else {
      return await knex("reviews").select("*");
    }
  },
  getReviewById: async (id) => {
    const reviews = await knex("reviews").select("*").where("id", "=", id);
    return reviews[0];
  },
  addReview: async (review) => {
    const addedReviewsId = await knex("reviews").insert(review);
    const addedReview = await knex("reviews")
      .select("*")
      .where("id", "=", addedReviewsId[0]);
    return addedReview; // respond back to request
  },
  updateReview: async (id, updateReview) => {
    const review = await knex("reviews").select("id").where("id", "=", id);
    if (review.length > 0) {
      await knex("reviews").update(updateReview).where("id", review[0].id);
      return await knex("reviews").select("*").where("id", "=", id);
    } else {
      return "do not exist";
    }
  },
  removeReview: async (id) => {
    return await knex("reviews").where("id", "=", id).del();
  },
};
