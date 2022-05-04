import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 w-full mx-auto ">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={data?.img} alt="product image" />
      </a>
      <div className="px-5 pb-5">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{data?.name}</h5>
          <h5 className="text-lg italic font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{data?.body}</h5>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Supplier: {data?.supplier}</h5>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Quantity: {data?.quantity}</h5>
        
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${data?.price}</span>
          <Link to="/inventory/{data._id}" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;