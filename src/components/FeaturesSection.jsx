import React from "react";
import "../styles/FeaturesSection.css";
import img1 from "../assets/Quality_Product_logo_1.png";
import img2 from "../assets/Grow_Sprout_logo.png";
import img3 from "../assets/Temperature_logo.png";
import img4 from "../assets/Pruning_logo.png";
import mainimg from "../assets/Feature_Image.png";
const mainImageUrl = mainimg;

function FeaturesSection() {
  const features = [
    { icon: img1, title: "Quality Product", description: "Our flowers are of the highest quality, carefully selected and sourced from reputable suppliers." },
    { icon: img2, title: "Always Fresh", description: "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment." },
    { icon: img3, title: "Work Smart", description: "We work smart, using innovative techniques and technology to streamline our processes." },
    { icon: img4, title: "Excellent Service", description: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs." },
  ];

  return (
    <section className="features-section-container">
      {/* Left Image */}
      <div className="features-left-section">
        <img src={mainImageUrl} alt="Feature" />
      </div>

      {/* Right Feature Cards */}
      <div className="features-right-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
