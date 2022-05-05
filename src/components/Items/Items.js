import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ProductCard2 from '../ProductCard/ProductCard2';

const Items = () => {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  const homePageProduct = products.slice(0 , 6);
  return (
    <div className=' grid md:grid-cols-2 gap-5 my-10'>
      {homePageProduct.map(product => <ProductCard2 key={product._id} data={product}></ProductCard2>)}
    </div>
  );
};

export default Items;