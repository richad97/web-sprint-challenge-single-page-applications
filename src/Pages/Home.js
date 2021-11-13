import { FaPizzaSlice } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home-section">
      <div id="banner-container"></div>
      <div id="order-container">
        <div>
          <FaPizzaSlice id="pizza-icon" />
          <p>Order Now</p>
        </div>
      </div>
    </section>
  );
}
