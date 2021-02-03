const knex = require("../database");
module.exports = {
  getAllMeals: async () => {
    return await knex("meals").select("*");
  },
  getMealById: async (id) => {
    return await knex("meals").select("*").where("id", "=", id);
  },
  addMeal: async (meal) => {
    await knex("meals").insert(meal);
    return { success: true, message: "ok" }; // respond back to request
  },
  updateMeal: async (id, updateFields) => {
    const meal = await knex("meals").select("id").where("id", "=", id);
    //if meal dosenot exists
    if (!meal) {
      return "do not exist";
    } else {
      await knex("meals")
        .update("title", updateFields.title)
        .where("id", meal[0].id);

      return { success: true, message: "ok" };
    }
  },
  removeMeal: async (id) => {
    const meal = await knex("meals").select("id").where("id", "=", id);

    //if meal dosenot exists
    if (!meal) {
      return "do not exist";
    } else {
      await knex("meals").where("id", "=", id).del();

      return { success: true, message: "ok" };
    }
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
};
