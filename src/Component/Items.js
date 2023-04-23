import React, { useState } from "react";

export default function Items() {
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState('');
  const [electronicsItems, setElectronicsItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [skinCareItems, setSkinCareItems] = useState([]);

  const IdChangeHandler = (event) => {
    setId(event.target.value);
  };
  const PriceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const NameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const categoryHandler = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(id);
    console.log(price);
    console.log(name);
    console.log(category);
    const item = {
      id: id,
      price: price,
      name: name,
      category: category
    };

    localStorage.setItem(id, JSON.stringify(item));
    event.target.reset();
    setId('');
    setPrice('');
    setName('');
    setCategory('');
    window.location.reload();
  };

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
  React.useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = (id) => {
    localStorage.removeItem(id);
    fetchItems();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Product Id</label>
        <input type="number" value={id} onChange={IdChangeHandler} />
        <label>Selling Price</label>
        <input type="number" value={price} onChange={PriceChangeHandler} />
        <label>Product Name</label>
        <input type="text" value={name} onChange={NameChangeHandler} />
        <label>Choose a Category</label>
        <select value={category} onChange={categoryHandler}>
          <option value="">--Select a category--</option>
          <option value="electronics">Electronics</option>
          <option value="food">Food</option>
          <option value="skincare">Skincare</option>
        </select>
        <button type="submit">ADD</button>
      </form>
      <ul>
        <label>Products :</label>
        <li><h1>Electronics</h1></li>
        {electronicsItems.map((item, index) => (
          <div key={index}>
            <div> <h4>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</h4>
              <button onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}

        <li><h1>Food</h1></li>
        {foodItems.map((item, index) => (
          <div key={index}>
            <div> <h4>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</h4>
              <button onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}
        <li><h1>Skincare</h1></li>
        {skinCareItems.map((item, index) => (
          <div key={index}>
            <div> <h4>Product ID: {JSON.parse(item).id}---- Product Name: {JSON.parse(item).name}---- Product Price: {JSON.parse(item).price}</h4>
              <button onClick={() => deleteItem(JSON.parse(item).id)}>Delete</button></div>
          </div>
        ))}
      </ul>
    </div>
  );
}
