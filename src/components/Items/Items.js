import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { BsArrowRight } from "react-icons/bs";
import useProducts from '../../hooks/useProducts';

const Items = () => {
  const [seeAll, setSeeAll] = useState(false);
  const [products] = useProducts();
  const homePageProduct = products.slice(0, 6);
  return (
    <div>
      <h1 className='text-5xl text-blue-600 my-5 text-center '><span className='border-b-4 border-blue-300 border-dotted '>Products view</span></h1>
      <div className=' grid md:grid-cols-2 gap-5 mt-10 mb-5'>
        {!seeAll ? (homePageProduct.map(product => <ProductCard key={product._id} data={product}></ProductCard>)) :
          (products.map(product => <ProductCard key={product._id} data={product}></ProductCard>))}
      </div>

      <div className='flex justify-end'>
        {!seeAll ? <button onClick={() => setSeeAll(!seeAll)} className='transition duration-500 my-5 bg-red-500 mr-20  text-left  px-5 rounded flex items-center hover:scale-110'> <BsArrowRight /> see all</button> :
          <button onClick={() => setSeeAll(!seeAll)} className=' transition duration-500 my-5 bg-red-500 mr-20  text-left  px-5 rounded flex items-center hover:scale-110'><BsArrowRight /> Hide overflow</button>}
      </div>
      <hr />
    </div>
  );
};

export default Items;