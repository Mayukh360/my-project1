import React, { useState, useEffect } from "react";
import "./Item.css";
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
        <label>Products :</label>
        <li><h1>Electronics</h1></li>
        {electronicsItems.map((item, index) => (
          <div key={index} className="item">
            <div className="item"> <h4>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</h4>
              <button onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}

        <li><h1>Food</h1></li>
        {foodItems.map((item, index) => (
          <div key={index} className="item">
            <div className="item"> <h4>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</h4>
              <button onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}
        <li><h1>Skincare</h1></li>
        {skinCareItems.map((item, index) => (
          <div key={index} className="item" >
            <div className="item" > <h4>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</h4>
              <button onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}
      </ul>
    </div>
  );
}
