import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className="about-us-container">
      <h1>About Shopsphere</h1>
      <p>
        Shopsphere is a cutting-edge product listing app designed to simplify and enhance the way you discover and explore products online.  We understand that finding the perfect item can be time-consuming and frustrating, so we've created a platform that brings all your favorite shops and products together in one convenient location.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to empower shoppers with a seamless and intuitive browsing experience. We strive to connect you with a diverse range of products from trusted sellers, making it easier than ever to find exactly what you're looking for, at the best prices.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><b>Comprehensive Product Listings:</b> Explore a vast catalog of products across various categories, all in one place.</li>
        <li><b>Intuitive Search and Filtering:</b> Quickly find what you need with our powerful search and filtering options. Refine your results by category, price range, brand, and more.</li>
        <li><b>Personalized Recommendations:</b> Discover new products you might love based on your browsing history and preferences.</li>
        <li><b>Secure and Reliable Platform:</b> We prioritize your security and ensure a safe and trustworthy shopping experience.</li>
        <li><b>User-Friendly Interface:</b> Our app is designed to be easy to use, even for first-time shoppers.</li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        We envision a future where shopping is effortless and enjoyable. Shopsphere is constantly evolving to provide the best possible experience for our users, and we're committed to adding new features and improvements to make your shopping journey even better.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? We'd love to hear from you! Contact us (+91 9816401850) or visit our location at (KHARAR).
      </p>

       <p>&copy; {new Date().getFullYear()} Shopsphere. All rights reserved.</p> {/* Add a copyright notice */}
    </div>
  )
}

export default About
