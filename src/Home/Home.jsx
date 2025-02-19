import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = ({products}) => {
  return (
   <>


    <div className="pagee1">
      <div className="home-page">
        <img
          className="home-image"
          src="https://images.pexels.com/photos/10108219/pexels-photo-10108219.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Home" 
        />
      </div>
      <div className="page2">
        <h6 className='pagepre'><b>Shopsphere:</b><br></br> Your "One-Stop Shop" for "Everything You Need".</h6>
      </div>
    </div>


    
  <div className='section1'>
  <div data-aos="fade-up" data-aos-duration={2000}>
    <h1 className="exclusive"> SPECIAL OFFERS FOR EXCLUSIVE MATERIALS</h1>
  </div>
  </div>







    {/* <div className="product-list">
      
      
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
          </div>
        </div>
      ))}
    </div>
     */}
     <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    
    </>
    
  );
}

export default Home;
