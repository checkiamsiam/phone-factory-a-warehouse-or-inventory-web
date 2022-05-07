import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { BsArrowRight } from "react-icons/bs";
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const Items = () => {
  const [seeAll, setSeeAll] = useState(false);
  const navigate = useNavigate();
  const [products] = useProducts();
  const homePageProduct = products.slice(0, 6);
  return (
    <div>
      <h1 className='text-5xl text-blue-600 my-5 text-center '><span className='border-b-4 border-blue-300 border-dotted '>Products view</span></h1>
      <div className=' grid md:grid-cols-2 gap-5 mt-10 mb-5' >
        {!seeAll ? (homePageProduct.map(product => <ProductCard key={product._id} data={product}></ProductCard>)) :
          (products.map(product => <ProductCard key={product._id} data={product}></ProductCard>))}
      </div>
      <div className='md:flex md:justify-between'>


        <div>
          <button onClick={()=> navigate('/inventory')} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ml-10 transition duration-500 my-5 bg-red-500   text-left   flex items-center hover:scale-110'><BsArrowRight /> Manage Inventories</button>
          
        </div>
        <div>
          {!seeAll ? <button onClick={() => setSeeAll(!seeAll)} className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ml-10 transition duration-500 my-5 bg-red-500 md:mr-20  text-left   flex items-center hover:scale-110'> <BsArrowRight /> See all here</button> :
            <button onClick={() => setSeeAll(!seeAll)} className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ml-10 transition duration-500 my-5 md:mr-20 bg-red-500   text-left   flex items-center hover:scale-110'><BsArrowRight /> Hide overflow</button>}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Items;