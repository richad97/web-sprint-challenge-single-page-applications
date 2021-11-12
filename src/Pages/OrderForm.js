import Topping from "../Components/Topping";

let toppings = ["cheese", "pepperoni", "jalapenos", "pineapple"];

export default function OrderForm() {
  return (
    <div>
      <h1>Order Form</h1>
      <form id="pizza-form">
        <label>
          Name:
          <input name="name-input" id="name-input" type="text" />
        </label>
        <label>
          Size:
          <select name="size-dropdown" id="size-dropdown">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <div>
          Toppings:
          {toppings.map((topping) => {
            return <Topping name={topping} />;
          })}
        </div>
        <textarea
          name="special-text"
          id="special-text"
          rows="5"
          cols="50"
        ></textarea>
        <button id="order-button">Order</button>
      </form>
    </div>
  );
}
