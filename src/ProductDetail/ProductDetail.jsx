import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = ({products}) => {
    const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10)); 

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details-page">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <div className="product-details-content">
        <h2 className="product-details-name">{product.name}</h2>
        <p className="product-details-description">{product.description}</p>
        <p className="product-details-price">Price: ${product.price}</p>
        <Link to="/" className="go-back">Go Back</Link>
      </div>
    </div>
  )
}

export default ProductDetail;
