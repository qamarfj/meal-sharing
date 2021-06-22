const express = require("express");
const router = express.Router();
const knex = require("../database");

const dbMealsHelepers = require("../models/dbMealsHelepers");
const dbReservationsHeleper = require("../models/dbReservationsHelepers");

router.get("/", queryHandler, async (request, response) => {
  try {
    const meals = await dbMealsHelepers.getAllMeals();
    response.json(meals);
  } catch (error) {
    response.status(400).json(error);
  }
});

async function queryHandler(request, response, next) {
  if (Object.entries(request.query).length === 0) {
    return next();
  } else {
    let meals;
    let key = Object.keys(request.query)[0]; // "plainKey"
    let value = Object.values(request.query)[0]; // "plain value"
    switch (key) {
      case "title":
        meals = await dbMealsHelepers.getMealByTitle(value);

        break;
      case "maxPrice":
        if (parseInt(value) >= 0)
          meals = await dbMealsHelepers.getMealBymaxPrice(value);
        else response.sendStatus(400);
        break;

      case "createdAfter":
        if (!isNaN(Date.parse(value)))
          meals = await dbMealsHelepers.getMealCreatedAfter(value);
        else response.sendStatus(400);
        break;
      case "limit":
        if (parseInt(value) >= 0)
          meals = await dbMealsHelepers.getAllMealsByLimit(value);
        else response.sendStatus(400);
        break;
      case "availableReservations":
        if (value === "true") {
          let current = new Date().toISOString();
          current = current.toString();
          meals = await dbMealsHelepers.getMealsavailableReservations(current);
        } else response.sendStatus(400);
        break;
    }
    response.json(meals);
    return;
  }
}

router.get("/:id", async (request, response) => {
  try {
    const meals = await dbMealsHelepers.getMealById(request.params.id);
    response.json(meals);
  } catch (error) {
    response.status(400).json(error);
  }
});

router.post("/", async (request, response) => {
  try {
    const addedMeal = await dbMealsHelepers.addMeal(request.body);
    response.json(addedMeal);
  } catch (error) {
    response.status(400).json(error);
  }
});
router.put("/:id", async (request, response) => {
  try {
    if (request.params.id) {
      const id = request.params.id;
      const updateMeal = request.body;
      const updatedmeal = await dbMealsHelepers.updateMeal(id, updateMeal);
      response.json(updatedmeal);
    } else response.send("enter id");
  } catch (error) {
    response.status(400).json(error);
  }
});
router.delete("/:id", async (request, response) => {
  try {
    await dbMealsHelepers.removeMeal(request.params.id);
    return response.status(204).json({});
  } catch (err) {
    if (err) {
      console.log(err);
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

module.exports = router;
