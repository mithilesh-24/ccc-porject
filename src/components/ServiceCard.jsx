import React from "react";
import "../styles/service.css";
import Type1 from "../assets/Type_1.png";
import Type2 from "../assets/Type_2.png";
import Type3 from "../assets/Type_3.png";

const ServiceCard = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-header">
          <h2>We Help Choose The Most Suitable Plants For You</h2>
          <p>
            Our selection includes a wide variety of flowers, from classic roses
            to exotic orchids, as well as a variety of lush indoor and outdoor
            plants and also offer unique floral arrangements that are perfect
            for any occasion, whether you're looking to brighten up your home or
            send a thoughtful gift.
          </p>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <div className="icon">
              <img src={Type1} alt="Indoor icon" />
            </div>
            <h3>Indoor Plants</h3>
            <p>
              Bring the beauty of nature to your outdoor spaces with our wide
              selection of outdoor plants.
            </p>
          </div>

          <div className="service-card active">
            <div className="icon">
              <img src={Type2} alt="Outdoor icon" />
            </div>
            <h3>Outdoor Plants</h3>
            <p>
              Bring a touch of greenery to your living spaces with our
              collection of indoor plants, perfect for purifying the air and
              adding a natural touch to your home.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">
              <img src={Type3} alt="Plants Pots icon" />
            </div>
            <h3>Plants Pots</h3>
            <p>
              Add a touch of style to your indoor or outdoor spaces with our
              collection of pots plants, available in a variety of sizes and
              designs to fit any decor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
