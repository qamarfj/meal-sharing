const express = require("express");
const router = express.Router();
const knex = require("../database");

const dbReviewsHeleper = require("../models/dbReviewsHelepers");

router.get("/", async (request, response) => {
  try {
    const reviews = await dbReviewsHeleper.getAllReviews(request.query.meal_id);
    response.json(reviews);
  } catch (error) {
    response.status(400).json(error);
  }
});
router.get("/:id", async (request, response) => {
  try {
    const review = await dbReviewsHeleper.getReviewById(request.params.id);
    response.json(review);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.post("/", async (request, response) => {
  try {
    request.body.created_date = new Date();
    const addedReview = await dbReviewsHeleper.addReview(request.body);
    response.json(addedReview);
  } catch (error) {
    response.status(400).json(error);
  }
});
router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const updateReview = request.body;
    const updatedReview = await dbReviewsHeleper.updateReview(id, updateReview);
    response.json(updatedReview);
  } catch (error) {
    response.status(400).json(error);
  }
});
router.delete("/:id", async (request, response) => {
  try {
    await dbReviewsHeleper.removeReview(request.params.id);
    response.status(204).json({}); // respond back to request
  } catch (error) {
    response.status(400).json(error);
  }
});
module.exports = router;
