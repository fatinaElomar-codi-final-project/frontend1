import { FaShoppingCart, FaCalendarAlt, FaUsers } from "react-icons/fa";
import "./services.css";
import Order from "../../images/order.svg";
import Plate2 from "../../images/plate2.png";
import Plate1 from "../../images/plate1.png";
import Plate from "../../images/plate.png";
// import Offer from "../../images/offer.png";

export default function Services() {
  return (
  <div className="back-services">
  <h1 className="services-big-title">Embrace the Excitement of Our Latest Offerings
</h1>
    <div className="servicesbody">
      <section className="main-plate1">
        <div className="content-plate">
          <p className="plate-title">Circle Crispy Chicken</p>
          <p className="plate-sub-description">Discover the flavors of Italy</p>
          <p className="plate-description">
          Circle Crispy Chicken is a mouthwatering dish made with tender
            chicken pieces coated in a crispy and seasoned batter. It is known
            for its golden brown color and irresistible crunch. The chicken is
            marinated in a special blend of spices, Circle Crispy
            Chicken is sure to satisfy your cravings for a delightful and
            satisfying meal.
          </p>
        </div>
        <div className="content-plate">
          <img
            className="plate-img1"
            src={Plate2}
            alt="new plate"
          />
        </div>
        <div className="content-plate">
          <p className="plate-title">Italian Pasta</p>
          <p className="plate-sub-description">
            Deliciously crispy and flavorful
          </p>
          <p className="plate-description">
          Italian pasta is a staple in Italian cuisine, known for its diverse
            shapes, flavors, and textures. It has been a fundamental part of
            Italian culinary tradition for centuries. Pasta dishes can vary
            greatly depending on the region and local preferences. From
            spaghetti and penne to lasagna and ravioli, there is a pasta shape
            to suit every taste.

          
          </p>
          <span className="newplate">New flavors</span>

        </div>
      </section>

      <section className="main-plate1">
        <div className="content-plate">
          <img
            className="plate-img1"
            src={Plate}
            alt="new plate"
          />
        </div>
        <div className="content-plate other content">
          <p className="plate-title">Arabic Shawarma</p>
          <p className="plate-sub-description">A Middle Eastern delicacy</p>
          <p className="plate-description">
            Experience the authentic flavors of the Middle East with our Arabic
            Shawarma. Our tender and succulent slices of marinated meat
            (chicken, beef, or lamb) are slow-roasted on a vertical spit,
            resulting in a flavorful and juicy delight. Served in warm pita
            bread, our shawarma is accompanied by a medley of fresh toppings,
            including tahini sauce, pickles, tomatoes, and onions, to create a
            harmonious blend of textures and tastes.
          </p>
          {/* <img className="newplate" src={Offer}/>New flavors */}

        </div>
        <div className="content-plate">
          <img
            className="plate-img1"
            src={Plate1}
            alt="new plate"
          />
        </div>
      </section>
    </div>
    </div>
  );
}
