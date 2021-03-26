import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/HomeComponent/Header";
import Home from "./components/HomeComponent/Home";
import "./App.css";
import Footer from "./components/HomeComponent/Footer";
import Meals from "./components/HomeComponent/Meals";
import Meal from "./components/HomeComponent/Meal";
import Nave from "./components/HomeComponent/Nave";
import Reviews from "./components/HomeComponent/Reviews";
import MealReviews from "./components/HomeComponent/MealReviews";
import AddMeal from "./components/HomeComponent/AddMeal";
function App() {
  const [meals, setMeals] = useState([]);
  const [addedNewMeal, setAddedNewmeal] = useState(false);

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((meals) => {
        setMeals(meals);
        if (addedNewMeal) setAddedNewmeal(false);
      });
  }, [addedNewMeal]);

  return (
    <>
      <Router>
        <Header />
        <Nave />
        <Switch>
          <Route exact path="/">
            <Home meals={meals} />
          </Route>
          <Route exact path="/meals">
            <Meals meals={meals} />
          </Route>
          <Route path="/meals/:id">
            <Meal meals={meals} />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/mealreviews/:id">
            <MealReviews />
          </Route>
          <Route path="/addmeal">
            <AddMeal setAddedNewmeal={() => setAddedNewmeal(true)} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
