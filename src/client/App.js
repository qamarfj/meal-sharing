import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/HomeComponent/Header";
import Home from "./components/HomeComponent/Home";
import TestComponent from "./components/TestComponent/TestComponent";
import "./App.css";
import Footer from "./components/HomeComponent/Footer";
import Meals from "./components/HomeComponent/Meals";
import Meal from "./components/HomeComponent/Meal";
import Nave from "./components/HomeComponent/Nave";
function App() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((meals) => {
        setMeals(meals);
      });
  }, []);

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
          <Route exact path="/meals/:id">
            <Meal meals={meals} />
          </Route>
          <Route exact path="/test-component">
            <TestComponent></TestComponent>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
