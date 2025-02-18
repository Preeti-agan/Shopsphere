// import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// const ProductList = ({products }) => {

//     const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All'); 

//   const categories = [...new Set(products.map(product => product.category))]; 
//   categories.unshift('All'); 
//   const filteredProducts = products.filter(product => {
//     const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
//     return nameMatch && categoryMatch;
//   });
//   return (
//     <div>
//       <h1>Product Listing</h1>

//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />

//       <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
//         {categories.map(category => (
//           <option key={category} value={category}>{category}</option>
//         ))}
//       </select>


//       <div className="product-list">
//         {filteredProducts.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-image"/>
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//             <Link to={`/product/${product.id}`} className="view-details-button">View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;



import React from 'react'
import './ProductList.css'
const ProductList = () => {
    const newArray=[
        {
           id:'1',
            image_src:'pic1.jpg',
            heading:"Cheese Burger",
            description:"Food provides the essential nutrients for overall health and well-being.",
            price:"12",

        },
        {
          id:'2',
           image_src:'pic2.jpg',
           heading:"Veggy Salad ",
           description:"Food provides the essential nutrients for overall health and well-being.",
           price:"13",

       },
       {
        id:'3',
         image_src:'pic3.jpg',
         heading:"Classic Burger",
         description:"Food provides the essential nutrients for overall health and well-being.",
         price:"16",

     },
     {
      id:'4',
       image_src:'pic4.jpg',
       heading:"Chicken Fry",
       description:"Food provides the essential nutrients for overall health and well-being.",
       price:"10",

   },
        
    ];
  return (
    <div className='mainn'>
        {newArray.map((note)=>(
       <div className="count">
        <div className='count1'>
        <img  className="img1"src={note.image_src}></img>
        </div>
        <div className='count2'>
        <h2 className='h2'>{note.heading}</h2>
        <p className='para'>{note.description}</p>
        <p className='para1'>${note.price}</p>
        </div>
       </div>
      ))}
    </div>
  )
}

export default ProductList;