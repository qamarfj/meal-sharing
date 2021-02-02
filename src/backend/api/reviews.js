const express = require("express");
const router = express.Router();
const knex = require("../database");

const dbReviewsHeleper = require("../models/dbReviewsHelepers");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reviews = await dbReviewsHeleper.getAllReviews();

    response.json(reviews);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (request, response) => {
  try {
    const reviews = await dbReviewsHeleper.getReviewById(request.params.id);
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const addStatus = await dbReviewsHeleper.addReview(request.body);
    response.json(addStatus);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (request, response) => {
  try {
    if (request.params.id) {
      const id = request.params.id;
      const updateFields = request.body;
      const updateStatus = await dbReviewsHeleper.updateReview(
        id,
        updateFields
      );
      // select meal with id
      response.json(updateStatus);
    } else response.send("enter id");

    //response.json(request.body);
    // knex syntax for selecting things. Look up the documentation for knex for further info
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const deleteStatus = await dbReviewsHeleper.removeReview(request.params.id);

    response.json(deleteStatus); // respond back to request
  } catch (error) {
    throw error;
  }
});
module.exports = router;
