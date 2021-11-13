import { useEffect, useState } from "react";
import * as yup from "yup";
import Topping from "../Components/Topping";
import axios from "axios";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .required("size is required")
    .oneOf(["small", "medium", "large"], "you must choose a size"),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  jalapenos: yup.boolean(),
  pineapple: yup.boolean(),
  special: yup.string(),
});

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
  const history = useHistory();

  const [orderForm, setOrderForm] = useState(initialForm);

  const [disabled, setDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    cheese: "",
    pepperoni: "",
    jalapenos: "",
    pineapple: "",
    special: "",
  });

  const setOrderFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  };

  const onChange = (e) => {
    const { checked, value, name, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setOrderFormErrors(name, valueToUse);
    setOrderForm({ ...orderForm, [name]: valueToUse });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/orders", orderForm)
      .then((resp) => {
        console.log(resp);
        const params = {
          name: resp.data.name,
          size: resp.data.size,
          cheese: resp.data.cheese,
          pepperoni: resp.data.pepperoni,
          jalapenos: resp.data.jalapenos,
          pineapple: resp.data.pineapple,
          special: resp.data.special,
        };
        history.push(`/confirmation/${JSON.stringify(params)}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    schema.isValid(orderForm).then((valid) => setDisabled(!valid));
  }, [orderForm]);

  return (
    <div>
      <h1>Order Form</h1>
      <form onSubmit={onSubmit} id="pizza-form">
        <label>
          Name:
          <input
            onChange={onChange}
            value={orderForm.name}
            name="name"
            id="name-input"
            type="text"
          />
          <p>{errors.name}</p>
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
          <p>{errors.size}</p>
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
          maxLength="50"
        />
        <button disabled={disabled} id="order-button">
          Order
        </button>
      </form>
    </div>
  );
}
