import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home-section">
      <div id="banner-container"></div>
      <div id="order-container">
        <Link to="/pizza">
          <FaPizzaSlice id="pizza-icon" />
          <p>Order Now</p>
        </Link>
      </div>
    </section>
  );
}
