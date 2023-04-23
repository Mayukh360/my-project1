import React, { useState, useEffect } from "react";
import "./Item.css";
import classes from "./Delete.module.css"
import Form from "./Form";


export default function Items() {
  const [electronicsItems, setElectronicsItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [skinCareItems, setSkinCareItems] = useState([]);



  const fetchItems = () => {
    const items = Object.values(localStorage);
    const electronics = items.filter(item => JSON.parse(item).category === "electronics");
    const food = items.filter(item => JSON.parse(item).category === "food");
    const skinCare = items.filter(item => JSON.parse(item).category === "skincare");
    setElectronicsItems(electronics);
    setFoodItems(food);
    setSkinCareItems(skinCare);
  }

  // Call the fetchItems function on component mount to fetch and display items from local storage
  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = (id) => {
    localStorage.removeItem(id);
    fetchItems();
  }


  return (
    <div>
      <Form onFetch={fetchItems} />
      <ul>
        <h1>Products :</h1>
        <li><h3>Electronics</h3></li>
        {electronicsItems.map((item, index) => (
          <div key={index} className="item">
            <div className="item"> <p>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</p>
              <button className={classes.dltbutton} onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}

        <li><h3>Food</h3></li>
        {foodItems.map((item, index) => (
          <div key={index} className="item">
            <div className="item"> <p>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</p>
              <button className={classes.dltbutton} onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}
        <li><h3>Skincare</h3></li>
        {skinCareItems.map((item, index) => (
          <div key={index} className="item" >
            <div className="item" > <p>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</p>
              <button className={classes.dltbutton} onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}
      </ul>
    </div>
  );
}
