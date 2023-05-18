import React, { useState } from "react";
import "./about us.css";
import Team from "../../images/team.webp";

export default function Aboutus() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleReadMore() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="about-main-container">
      <p className="aboutus-title">About Us</p>
      <div className="about-container">
        <div className="about-container-right">
          <div>
            <img className="img-about" src={Team} alt="about team" />
          </div>
        </div>
        <div className="about-container-left">
          <p className={`aboutus-content ${isExpanded ? "expanded" : ""}`}>
            Welcome to Wizard Server, your destination for fast and delicious
            food on the go! We pride ourselves on using only the finest
            ingredients to deliver exceptional taste and quality. Our menu
            offers a variety of options, including juicy burgers, mouthwatering
            sandwiches, crispy fries, and refreshing salads. We prioritize speed
            and efficiency without compromising on flavor, ensuring your order
            is prepared swiftly and accurately.
            {isExpanded ? (
              <>
                At Wizard Server, we believe in providing fast food that is also
                mindful of dietary preferences, offering vegetarian, vegan, and
                gluten-free choices. We prioritize customer satisfaction and
                strive to create a welcoming atmosphere where you can enjoy your
                meal and leave with a smile. Join us today and experience the
                perfect blend of fast service and delectable food. Come and
                discover why Wizard Server is more than just a fast food
                restaurant – we're your trusted partner in delivering tasty,
                convenient, and satisfying meals whenever you need them.
                <button className="read-more" onClick={toggleReadMore}>
                  Read Less
                </button>
              </>
            ) : (
              <button className="read-more" onClick={toggleReadMore}>
                Read More
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
