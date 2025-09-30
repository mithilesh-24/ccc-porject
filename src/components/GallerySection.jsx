import React from "react";
import "../styles/GallerySection.css"; // Import CSS

// Import local images from assets folder
import Plant1 from "../assets/Gallery_1.png";
import Plant2 from "../assets/Gallery_2.png";
import Plant3 from "../assets/Gallery_3.png";
import Plant4 from "../assets/Gallery_4.png";
import Plant5 from "../assets/Gallery_5.png";


const galleryImages = [
  { id: 1, src: Plant1, alt: "A tall monstera plant in a terracotta pot" },
  { id: 2, src: Plant2, alt: "Various houseplants on a wooden sideboard" },
  { id: 3, src: Plant3, alt: "Houseplants on a white console table" },
  { id: 4, src: Plant4, alt: "A collection of indoor plants in a bright room" },
  { id: 5, src: Plant5, alt: "A large monstera deliciosa in a living room" },
];

function GallerySection() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery View</h2>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className={`gallery-item item-${image.id}`}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
