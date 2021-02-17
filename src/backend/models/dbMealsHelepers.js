const { select } = require("../database");
const knex = require("../database");
module.exports = {
  getAllMeals: async () => {
    return await knex("meals").select("*");
  },
  getMealById: async (id) => {
    return await knex("meals").select("*").where("id", "=", id);
  },
  getMealBymaxPrice: async (maxPrice) => {
    return await knex("meals").select("*").where("price", "<", maxPrice);
  },
  getMealCreatedAfter: async (startDate) => {
    return await knex("meals").where(
      "created_date",
      ">",
      Date.parse(startDate)
    );
  },
  getAllMealsByLimit: async (limit) => {
    return await knex("meals").limit(limit);
  },
  getMealsavailableReservations: async () => {
    return await knex
      .select("meals.*")
      .from("meals")
      .join(
        knex("meals")
          .select({ id: "meals.id" }, "meals.max_reservations")
          .from("meals")
          .join("reservations", function () {
            this.on("meals.id", "=", "reservations.meal_id");
          })
          .sum({ sum: ["reservations.number_of_guests"] })
          .groupBy("meals.id")
          .as("M_R"),
        function () {
          this.on("M_R.id", "=", "meals.id")
            .andOn("meals.max_reservations", ">", "M_R.sum")
            .andOn("meals.when", ">", Date.now());
        }
      );
  },
  addMeal: async (meal) => {
    const addedMealsId = await knex("meals").insert(meal);
    // respond back with added meal
    return await knex("meals").select("*").where("id", "=", addedMealsId[0]);
  },
  updateMeal: async (id, updateMeal) => {
    const meal = await knex("meals").select("id").where("id", "=", id);
    //if meal dosenot exists
    if (meal.length > 0) {
      await knex("meals").update(updateMeal).where("id", meal[0].id);
      const updatedmeal = await knex("meals").select("*").where("id", "=", id);
      return updatedmeal;
    } else {
      return "id does not exist";
    }
  },
  removeMeal: async (id) => {
    return await knex("meals").where("id", "=", id).del();
  },
};
