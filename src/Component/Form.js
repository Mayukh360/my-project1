import React, { useState } from 'react'
import Card from './UI/Card';
// import './Form.css'
import classes from "./Form.module.css";
import Button from './Button.module.css';

export default function Form(props) {

    const [id, setId] = useState();
    const [price, setPrice] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState('');

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
        props.onFetch();
    };

    return (
        <div>
            <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                <label>Product Id</label>
                <input type="number" value={id} onChange={IdChangeHandler} />
                </div>
                <div className={classes.control}>
                <label>Selling Price</label>
                <input type="number" value={price} onChange={PriceChangeHandler} />
                </div>
                <div  className={classes.control}>
                <label>Product Name</label>
                <input type="text" value={name} onChange={NameChangeHandler} />
                </div>
                <div className={classes.control1}>
                <label>Choose a Category</label>
                <select value={category} onChange={categoryHandler}>
                    <option value="">--Select a category--</option>
                    <option value="electronics">Electronics</option>
                    <option value="food">Food</option>
                    <option value="skincare">Skincare</option>
                </select>
                <button className={Button.button} type="submit">ADD</button>
                </div>
                
            </form>
            </Card>
        </div>
    )
}
