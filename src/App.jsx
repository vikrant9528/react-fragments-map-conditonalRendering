// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"
function App() {
  let foodItems = ["sabji","Green vegetables","Roti","Salad","Milk","ghee"];
  // let foodItems = [];
  return (
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <Fooditems items={foodItems}/>
    </>
  );
}

export default App;
