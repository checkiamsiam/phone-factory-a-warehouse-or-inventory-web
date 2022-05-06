import React from 'react';
import { TiEdit } from 'react-icons/ti';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const DetailsOfProduct = () => {
  const params = useParams();
  console.log(params.id);
  const [products] = useProducts();
  const thisProduct = products.find(product => product._id === params.id);
  console.log(thisProduct);
  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={thisProduct?.img} alt='Product Photo' />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Details OF <span className='text-pink-400'>{thisProduct?.name}</span></h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{thisProduct?.body}</p>
          <button className="flex justify-center  items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded text-2xl"><TiEdit className='text-3xl'/> <span>Edit</span></button>
        </div>
      </div>

    </div>
  );
};

export default DetailsOfProduct;