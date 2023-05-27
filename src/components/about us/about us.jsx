import React, { useState } from "react";
import "./about us.css";
import Team from "../../images/team.webp";

export default function Aboutus() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleReadMore() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="about-principal">
      {/* <div className="bodyaboutus"> */}
        <div className="about-main-container">
          <div class="imgLoader-aboutus"></div>

          <div class="container-aboutus">
            <h1 class="title-aboutus">AboutUs</h1>

           

            <div class="book">
              <div class="gap"></div>
              <div class="pages">
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
              </div>
              <div class="flips">
                <div class="flip flip1">
                  <div class="flip flip2">
                    <div class="flip flip3">
                      <div class="flip flip4">
                        <div class="flip flip5">
                          <div class="flip flip6">
                            <div class="flip flip7"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      <div class="aboutus-description">
        Welcome to Wizerdserver, where passion for food meets exceptional
        dining. Our expert chefs create exquisite dishes using the finest
        ingredients sourced locally. Enjoy a warm and inviting ambiance as our
        friendly staff ensures a remarkable experience. We value sustainability
        and community, hosting special events that celebrate food and culture.
        Join us for a memorable culinary journey at Wizerdserver. Book your
        table today.
      </div>
    </div>
  );
}
