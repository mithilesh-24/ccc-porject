import React from "react";
import "../styles/TestimonialsAndBlog.css"; // Import the CSS file
import img1 from '../assets/Blog_!.png'
import img2 from '../assets/Blog_2.png'
import img3 from '../assets/Blog_3.png'

const testimonials = [
  {
    name: "Jessica Watson",
    quote:
      '"Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service."',
    avatarUrl: "https://placehold.co/50x50/d4e2d4/333333?text=JW",
    avatarClass: "avatar-1",
  },
  {
    name: "Kate Szu",
    quote:
      '"Great service, beautiful flowers, timely delivery. Highly recommend."',
    avatarUrl: "https://placehold.co/50x50/f7d9e3/333333?text=KS",
    avatarClass: "avatar-2",
  },
  {
    name: "Grace",
    quote:
      '"I am very happy with my purchase from this website, the plants were healthy and arrived on time."',
    avatarUrl: "https://placehold.co/50x50/fdecc8/333333?text=G",
    avatarClass: "avatar-3",
  },
];

const blogPosts = [
  {
    imageUrl: img1,
    title: "More productive with an atmosphere of greenery",
    excerpt:
      "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
    date: "January 20, 2023",
  },
  {
    imageUrl: img2,
    title: "The benefits of plants in your room",
    excerpt:
      "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being...",
    date: "January 10, 2023",
  },
  {
    imageUrl: img3,
    title: "Hobbyist plants in the house",
    excerpt:
      "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they...",
    date: "January 15, 2023",
  },
];

function TestimonialsAndBlog() {
  return (
    <div className="page-section">
      <section>
        <h2 className="section-title">What Do They Say About Us</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className={`testimonial-avatar ${testimonial.avatarClass}`}
                />
                <span className="testimonial-name">{testimonial.name}</span>
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Interesting Blog To Read</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.imageUrl} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">
                    <span className="blog-date-icon">🗓️</span>
                    {post.date}
                  </span>
                  <a href="#" className="blog-read-more">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TestimonialsAndBlog;
