import React, { useState } from "react";

export default function Items() {
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [electronicsValid, setElectronicsValid] = useState(false);
  const [foodValid, setFoodValid] = useState(false);
  const [skinCare, setSkinCareValid] = useState(false);

  const IdChangeHandler = (event) => {
    setId(event.target.value);
  };
  const PriceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const NameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const categoryHandler = () => {
    if(category==="electronics"){
      setElectronicsValid(true)
    }
    if(category==="food"){
      setFoodValid(true)
    }
    if(category==="skincare"){
      setSkinCareValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(id);
    console.log(price);
    console.log(name);
    console.log(category);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Product Id</label>
        <input type="number" onChange={IdChangeHandler} />
        <label>Selling Price</label>
        <input type="number" onChange={PriceChangeHandler} />
        <label>Product Name</label>
        <input type="text" onChange={NameChangeHandler} />
        <label>Choose a Category</label>
        <select onChange={categoryHandler}>
          <option value="electronics">Electronics</option>
          <option value="food">Food</option>
          <option value="skincare">Skincare</option>
        </select>
        <button type="submit">ADD</button>
      </form>
      <ul>
        <label>Products :</label>
        <li>Electronics</li>
        {setElectronicsValid && `Product ID : ${id }---Product Name : ${name}---- Product Price : ${price}`}<button>Delete</button>
       
        <li>Food</li>
        <li>Skincare</li>
      </ul>
    </div>
  );
}
