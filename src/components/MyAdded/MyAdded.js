import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import ProductCardForMyAdded from '../ProductCardForMyAdded/ProductCardForMyAdded';

const MyAdded = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [products, setProducts, recall, setRecall] = useProducts();
  const myAddedProducts = products.filter(product => product.added === user.uid);
  return (
    <div className='my-20'>
      <h1 className='text-5xl text-blue-400 text-center my-5'><span className='border-b-2 border-dashed border-blue-700'>Your Added Products</span></h1>
      <div className=' md:grid md:grid-cols-3 md:px-20 gap-3'>
        {myAddedProducts.map(p => <ProductCardForMyAdded key={p._id} pData={p} recall={recall} setRecall={setRecall} ></ProductCardForMyAdded>)}
      </div>
      {/* { !myAddedProducts && <h1 className='text-3xl text-center text-red-500 my-6 '>You Was't Added Anything</h1>} */}

      <div className='text-right md:ml-20 ml-14'>
        <button onClick={() => navigate('/inventory')} className='text-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ml-10 transition duration-500 my-5 bg-red-500      flex items-center hover:scale-110'><BsArrowRight /> Manage Inventories</button>
      </div>
    </div>
  );
};

export default MyAdded;