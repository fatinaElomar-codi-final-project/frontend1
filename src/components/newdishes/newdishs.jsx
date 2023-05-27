import React from "react";
import "./newdish.css";
import Sweet1 from "../../images/sweet1.png";
import Sweet2 from "../../images/sweet2.png";
import Sweet3 from "../../images/sweet3.png";
import Sweet4 from "../../images/sweet4.png";
import Sweet5 from "../../images/sweet5.png";
import Sweet6 from "../../images/sweet6.png";

const arrayArrival = [
  {
    src: Sweet1,
    alt: "Crème Brûlée",
    name: "Crème Brûlée",
    // category: "Category 1",
    price: "$45.95",
  },
  {
    src: Sweet2,
    alt: "Banoffee Pie",
    name: "Banoffee Pie",
    price: "$20.95",
  },
  {
    src: Sweet3,
    alt: "cake",
    name: "Chocolate Lava Cake",
    price: "$12.50",
  },
  {
    src: Sweet4,
    alt: "Chocolate Chip Cookies",
    name: "Love Cookies",
    // category: "Category 4",
    price: "$12.50",
  },
  {
    src: Sweet5,
    alt: "Strawberry Cheesecake",
    name: "Strawberry Cheesecake",
    // category: "Category 4",
    price: "$12.50",
  },
  {
    src: Sweet6,
    alt: "Donuts",
    name: "Donuts",
    price: "$12.50",
  },
 
];

function ArrivalhomePage() {
  return (
    <main className="about_parent">
      <hr className="about_hr" />
      <div className="about_container">
    
        <section className="about_our_blog_container">
          <div className="about_title_blog">
            <h2 className="ourBloc_title">our Desserts</h2>
          </div>
          <div className="about_mission_container">
            {arrayArrival.map((item, index) => (
              <div className="mission_box" key={index}>
                <img className="about_img" src={item.src} alt={item.alt} />
                <span className="pay-value">{item.price}</span>
                <div className="product-category">
                  <span className="product-name">{item.name}</span>
                  <span className="category-name">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
          <h3 ><a className="new-dish-title" herf="#">menu ⥴
</a></h3>
        </section>
      </div>
    </main>
  );
}

export default ArrivalhomePage;
