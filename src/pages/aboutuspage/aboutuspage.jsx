import React, { useEffect, useState } from "react";
import FoodLoader from "../../components/loader/loader";
import Team from "../../components/team/team";
import "./aboutuspage.css";
export default function Aboutuspage() {


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay to demonstrate the loader
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Set the desired delay time in milliseconds
    }, []);
  return (
    <div class="main_container11" id="home11">
 {isLoading ? (
        <FoodLoader />
      ) : (
        <>
      <div class="banner_image">
        <div class="banner_content">
          <h1>
            Only we can change your life.
            <br />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            nisi, iure magnam omnis corrupti dolorum.
          </p>
        </div>
      </div>

      <div class="about" id="about">
        <h1 class="title">About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          ipsam labore quos quam, tempora recusandae nemo laudantium, ad vitae
          vel repellendus dolores placeat. Velit distinctio natus, facilis quia!
          Voluptas nam, animi quidem doloremque mollitia accusamus voluptatum
          quos totam consequatur. Temporibus rerum recusandae nobis vel
          architecto beatae esse facilis repellat. Et repellat similique ad ab
          harum doloribus dolorum. Iste suscipit blanditiis vero qui aliquid
          omnis quasi, delectus vel adipisci et ratione maiores soluta facilis
          earum voluptate.
        </p>
        <div class="btn">
          <a href="#">Learn More</a>
        </div>
      </div>

     

     
     
           
           
         

    <Team/>

      <div class="contactus" id="contactus">
        <h1 class="title">Contact Us</h1>
        <div class="form_wrapper">
          <div class="form_input">
            <input type="text" placeholder="Email" />
          </div>
          <div class="form_input">
            <input type="text" placeholder="Subject" />
          </div>
          <div class="form_input">
            <textarea placeholder="Message"></textarea>
          </div>
          <div class="btn">
            <a href="#">Submit</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <a href="#">@ wizerd_server</a>
      </div>
</>
)}

    </div>
  );
}
