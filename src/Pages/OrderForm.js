import { useState } from "react";
import Topping from "../Components/Topping";

const initialForm = {
  name: "",
  size: "",
  cheese: false,
  pepperoni: false,
  jalapenos: false,
  pineapple: false,
  special: "",
};

const toppings = ["cheese", "pepperoni", "jalapenos", "pineapple"];

export default function OrderForm() {
  const [orderForm, setOrderForm] = useState(initialForm);

  const onChange = (e) => {
    console.log(e.target.value);
    const { checked, value, name, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setOrderForm({ ...orderForm, [name]: valueToUse });
  };

  return (
    <div>
      <h1>Order Form</h1>
      <form id="pizza-form">
        <label>
          Name:
          <input
            onChange={onChange}
            value={orderForm.name}
            name="name"
            id="name-input"
            type="text"
          />
        </label>
        <label>
          Size:
          <select
            onChange={onChange}
            value={orderForm.size}
            name="size"
            id="size-dropdown"
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <div>
          Toppings:
          {toppings.map((topping, index) => {
            return (
              <Topping
                orderForm={orderForm}
                name={topping}
                onChange={onChange}
                key={index}
              />
            );
          })}
        </div>
        <textarea
          onChange={onChange}
          name="special"
          id="special-text"
          rows="5"
          cols="50"
          maxLength="25"
        />
        <button id="order-button">Order</button>
      </form>
    </div>
  );
}
