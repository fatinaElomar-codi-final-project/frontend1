import React from 'react'
import"./team.css"
import Chef1 from "../../images/chef1.png"
import Chef2 from "../../images/chef2.png"
import Chef3 from "../../images/chef3.png"
import Chef4 from "../../images/chef4.png"

export default function Team() {
  return (
    <div>
     <section class="wrapper-full tab-container effectTab-header" >
      <div class="wrapper tab-item">
        <div class="custom-row">
          <div class="wrapper " align="center">
                      <a href="https://northsgate.com" target="_blank">
                        <h1 class="ti title">OUR BEST FEATURES</h1></a>
        
          </div>
          
          <div class="column-12 column-xs-12 column-sm-12 tab">
            <div class="custom-row">
              <div class="column-4 column-md-6 column-xs-12 hide-sm hide-md box-tab">
                <div class="effect effect-one">
                  <img src="https://cdn.dribbble.com/users/2176836/screenshots/15033222/media/c6a85a5d32e02eb78068b524077c5f97.png?compress=1&resize=400x300&vertical=top" class="img-fluid" />
                  <div class="tab-text">
                    <h2>Online Menu with Visuals</h2>
                    <p>Designed to help you complete your layout designing</p>
                    <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
                  </div>
                </div>
              </div>
              {/* /////////////////////////// */}
              <div class="column-4 column-md-6 column-xs-12 hide-sm hide-md box-tab">
                <div class="effect effect-one">
                  <img src="https://www.rewardsnetwork.com/wp-content/uploads/2020/02/dine-in-delivery-takeout-2.jpg" class="img-fluid" />
                  <div class="tab-text">
                    <h2>Delivery and Takeout</h2>
                    <p>Designed to help you complete your layout designing</p>
                    <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
                  </div>
                </div>
              </div>
              {/* ////////////////////// */}

              <div class="column-4 column-md-6 column-xs-12 hide-sm hide-md box-tab">
                <div class="effect effect-one">
                  <img src="https://studyfinds.org/wp-content/uploads/2019/07/AdobeStock_182960714-816x520.jpeg" class="img-fluid" />
                  <div class="tab-text">
                    <h2>Online Reviews and Ratings</h2>
                    <p>Designed to help you complete your layout designing</p>
                    <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
                  </div>
                </div>
              </div>            </div>
          </div>
        </div>
      </div>
    </section>

	 <section class="wrapper-full tab-container effectTab-header" id="style_11">
      <div class="wrapper tab-item">
        <div class="custom-row">
          <div class="wrapper " align="center">
             <a href="https://northsgate.com" target="_blank"> <h1 class="ti title">Meet our chefs</h1></a>
          </div>
          <div class="column-12 column-xs-12 tab">
            <div class="custom-row">
              <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
                <div class="effect effect-eleven">
                  <img src={Chef1} class="img-fluid"  />
                  <div class="tab-text">
                  <h2 className="chef-name">Chef John Doe</h2>
                    <p>Renowned culinary artist specializing in fusion cuisine and creative plating.</p>
                    <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
                  </div>
                </div>
              </div>
              <div class="column-4 column-sm-6 column-md-6 hide-xs box-tab">
                <div class="effect effect-eleven">
                  <img src={Chef2} class="img-fluid"  />
                  <div class="tab-text">
                  <h2 className="chef-name">Chef John Doe</h2>
                    <p>Master of savory dishes and expert in international cuisines.</p>
                    <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
                  </div>
                </div>
              </div>
              <div class="column-4 hide-xs hide-sm hide-md box-tab">
                <div class="effect effect-eleven">
                  <img src={Chef3} class="img-fluid"  />
                  <div class="tab-text">
                  <h2 className="chef-name"> Chef Michael Johnson</h2>
                    <p>Award-winning pastry chef with a passion for creating delightful desserts.</p>
                    <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
                  </div>
                </div>
              </div>
             
            
            
            </div>
          </div>
        </div>
      </div>
    </section>



    </div>
  )
}
