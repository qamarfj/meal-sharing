const express = require("express");
const router = express.Router();
const knex = require("../database");

const dbMealsHelepers = require("../models/dbMealsHelepers");
const dbReservationsHeleper = require("../models/dbReservationsHelepers");

router.get("/", queryHandler, async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await dbMealsHelepers.getAllMeals();
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

async function queryHandler(request, response, next) {
  if (Object.entries(request.query).length === 0) {
    next();
    return;
  } else {
    let meals;
    let key = Object.keys(request.query)[0]; // "plainKey"
    let value = Object.values(request.query)[0]; // "plain value"
    switch (key) {
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
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const addStatus = await dbMealsHelepers.addMeal(request.body);
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
      const updateStatus = await dbMealsHelepers.updateMeal(id, updateFields);
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
    const deleteStatus = await dbMealsHelepers.removeMeal(request.params.id);

    response.json(deleteStatus); // respond back to request
  } catch (error) {
    throw error;
  }
});
//GET api/meals/ query parameters
//maxPrice	Get meals that has a price smaller than maxPrice	Number	api/meals?maxPrice=90
/*router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const deleteStatus = await dbMealsHelepers.removeMeal(request.params.id);

    response.json(deleteStatus); // respond back to request
  } catch (error) {
    throw error;
  }
});
*/
module.exports = router;
