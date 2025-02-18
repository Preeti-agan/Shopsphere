
import './App.css'
import { useState,useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Header from './Header/Header';
import Home from './Home/Home';
import ProductDetail from './ProductDetail/ProductDetail';
import About from './About/About';
import productsData from './Data/products.json'
import ProductList from './ProductList/ProductList';


function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    setProducts(productsData); 
  }, []);

  const filteredProducts = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
    return nameMatch && categoryMatch;
  });

  

  return (
    <>
    <Router>
      <div className="app-container">
        <Header
          setSearchTerm={setSearchTerm} 
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter} 
          products={products} 
        />
        {/* <ProductList></ProductList> */}
        <Routes>
          <Route path="/" element={<Home products={filteredProducts} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
      
        
    </>
  )
}

export default App
