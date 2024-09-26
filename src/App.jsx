// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let foodItems = ["Dal","Green vegetables","Roti","Salad","Milk","ghee"];
  // let foodItems = [];
  // let emptyMessage = foodItems.length===0? <h3>I am still hungry</h3>:null;
 

  // if(foodItems.length===0){
  //   return <h2>I am still hungry</h2>;
  // }
  return (
    //shortcut tareeka of react fragment
  //  <React.Fragment>
  
  <>
      <h1>Healthy Foods</h1>
      {/* ternary opertator use by variable*/}
      {/* {emptyMessage} */}

      {/* done the same work by using logical operators */}
      {foodItems.length===0&&<h3>I am still hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item,index) => (
          <li key={index} className="list-group-item">{item}</li> 
      ))}
      </ul>
      {/* // </React.Fragment> */}
      </>
  );
}

export default App;
