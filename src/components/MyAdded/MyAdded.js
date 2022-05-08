import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import ProductCardForMyAdded from '../ProductCardForMyAdded/ProductCardForMyAdded';

const MyAdded = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts, recall, setRecall] = useProducts();
  const myAddedProducts = products.filter(product => product.added === user.uid);
  return (
    <div className='my-20'>
      <h1 className='text-5xl text-blue-400 text-center my-5'><span className='border-b-2 border-dashed border-blue-700'>Your Added Products</span></h1>
      <div className=' md:grid md:grid-cols-3 md:px-20 gap-3'>
        {myAddedProducts.map(p => <ProductCardForMyAdded key={p._id} pData={p} recall={recall} setRecall={setRecall} ></ProductCardForMyAdded>)}
      </div>
    </div>
  );
};

export default MyAdded;