import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard2 = ({ data }) => {
  return (
    <div className="container z-0 " data-aos="zoom-in-up"
  >
      <div className="card shadow-md shadow-blue-300">
        <div className="imgBx">
          <img src={data?.img} alt="Product image" />
        </div>

        <div className="contentBx">

          <h2>{data?.name}</h2>

          <div className="size">
            <p className=" italic text-white ">{data?.body}</p>
            <p className="italic hover:before:content-['--'] text-white">Supplier: {data?.supplier}</p>
            <p className="italic hover:before:content-['--'] text-white">Quantity: {data?.quantity}</p>
            <p className="text-2xl font-bold text-blue-300 dark:text-white">${data?.price}</p>
          </div>

          <Link to="/inventory/{data._id}" >Manage Product</Link>
        </div>

      </div>
    </div>

  );
};

export default ProductCard2;