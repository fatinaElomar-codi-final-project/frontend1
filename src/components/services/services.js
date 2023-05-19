import { FaShoppingCart, FaCalendarAlt, FaUsers } from "react-icons/fa";
import "./services.css";
import Order from "../../images/order.svg";
import Reserve from "../../images/reserve1.png";
import Party from "../../images/party.png";

export default function Services() {
  return (
    <div className="services-main-container">
      {/* //////////////////////////////////// */}
      <h1 className="aboutus-title">Services</h1>
      <div className="card-container_services">
        <div>
          <div className="service-img">
            <img src={Reserve} alt="order"></img>
          </div>
        </div>
        <div className="services-content">
          <div>
            <p className="services-title">Order</p>
          </div>
          <p>Place an order and get it delivered to your doorstep.</p>
        </div>
      </div>
      {/* //////////////////////////////////////// */}
      <div className="card-container_services">
        <div>
          <div className="service-img">
            <img src={Party} alt="order" />
          </div>
        </div>

        <div className="services-content">
          <div>
            <p className="services-title">Reservation</p>
          </div>
          <p>Book a table and enjoy a delightful dining experience.</p>
        </div>
      </div>
      {/* //////////////////////////////////////// */}
      <div className="card-container_services">
        <div>
          <div className="service-img">
            <img src={Party} alt="order" />
          </div>
        </div>
        {/* /////////////////////////////////////// */}

        <div className="services-content">
          <div>
            <p className="services-title">Parties</p>
          </div>
          <p>Celebrate your special occasions with our party services.</p>
        </div>
      </div>
    </div>
  );
}
