import { useParams } from "react-router";

export default function Confirmation() {
  const { data } = useParams();
  const obj = JSON.parse(data);
  return (
    <div id="confirmation-div">
      <h1>Confirmation</h1>
      <h2>Thanks {obj.name}!</h2>
      <p>Your order has been processed and will arrive shortly!</p>
      <h3>Please review your order at the bottom.</h3>
      <p>Size: {obj.size}</p>
      <p>Cheese: {obj.cheese.toString()}</p>
      <p>Pepperoni: {obj.pepperoni.toString()}</p>
      <p>Jalapenos: {obj.jalapenos.toString()}</p>
      <p>Pineapple: {obj.pineapple.toString()}</p>
      <p>Extra Comments: {obj.special}</p>
    </div>
  );
}
