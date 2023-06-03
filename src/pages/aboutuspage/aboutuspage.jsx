import React, { useEffect, useState } from "react";
import FoodLoader from "../../components/loader/loader";
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

      <div class="services" id="services">
        <h1 class="title">Our Best Features</h1>
        <p className="aboutus-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsum
          neque, nobis ratione vitae eum quibusdam quidem culpa dolorum autem
          sequi. Rem at beatae debitis.
        </p>

        <div class="diff_services">
          <div class="diff_service_item">
            <img src="https://cdn.dribbble.com/users/2176836/screenshots/15033222/media/c6a85a5d32e02eb78068b524077c5f97.png?compress=1&resize=400x300&vertical=top" alt="Service_image" />
            <h3>Online Menu with Visuals</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              blanditiis.
            </p>
          </div>
          <div class="diff_service_item">
            <img src="https://www.rewardsnetwork.com/wp-content/uploads/2020/02/dine-in-delivery-takeout-2.jpg" alt="Service_image" />
            <h3>Delivery and Takeout </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              blanditiis.
            </p>
          </div>
          <div class="diff_service_item">
            <img src="https://studyfinds.org/wp-content/uploads/2019/07/AdobeStock_182960714-816x520.jpeg" alt="Service_image" />
            <h3>Online Reviews and Ratings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              blanditiis.
            </p>
          </div>
        </div>
      </div>

     
      <div class="ourteam" id="ourteam">
        <h1 class="title">our team</h1>
        <div class="ourteam_wrapper">
          <div class="team-1 team">
            {/* ////////////////////////////////////// */}
            <div class="team_member">
              <img src="https://www.thestaffcanteen.com/public/js/tinymce/plugins/moxiemanager/data/files/Handsome%20Chefs/18%20%40tomaikens.jpg" alt="Team_Image" />
            </div>
            <div class="team_member">
              <img src="https://img.freepik.com/free-photo/portrait-confident-male-chef-kitchen_23-2147863584.jpg" alt="Team_Image" />
            </div>
            <div class="team_member">
              <img src="https://img.freepik.com/premium-photo/portrait-handsome-chef_107420-17703.jpg?w=2000" alt="Team_Image" />
            </div>
          </div>
          {/* ///////////////////////////////////////////////// */}
          <div class="team-2 team">
            <div class="team_member">
              <img src="https://thumbs.dreamstime.com/b/female-chef-19271464.jpg" alt="Team_Image" />
            </div>
            <div class="team_member">
              <img src="https://i.imgur.com/dAyITbN.jpg" alt="Team_Image" />
            </div>
            <div class="team_member">
              <img src="https://i.imgur.com/1JxSNJ1.jpg" alt="Team_Image" />
            </div>
          </div>
        </div>
      </div>

    
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
