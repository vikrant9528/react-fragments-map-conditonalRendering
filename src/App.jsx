// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"
import Container from "./components/Container";
function App() {
  let foodItems = ["sabji","Green vegetables","Roti","Salad","Milk","ghee"];
  // let foodItems = [];
  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <Fooditems items={foodItems}/>
      </Container>

      <Container>
        <p>here is the list of healthy foods that are good for your health</p>
      </Container>
    </>
  );
}

export default App;
