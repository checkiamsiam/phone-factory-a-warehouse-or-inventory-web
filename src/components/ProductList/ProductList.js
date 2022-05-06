import React from 'react';
import useProducts from '../../hooks/useProducts';
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import { MdPostAdd } from 'react-icons/md';

const ProductList = () => {
  const navigate = useNavigate();
  const [products] = useProducts();
  return (
    <div className='w-5/6 mx-auto rounded-lg shadow-lg my-20  '>
      <table className="min-w-full border-collapse block md:table ">
        <thead className="block md:table-header-group">
          <tr className="px-2 border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="text-center bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Name</th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-centerblock md:table-cell">Price(BDT)</th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-centerblock md:table-cell">Sold</th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Available</th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-centerblock md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">

          {products.map(product => <SigleItem key={product._id} data={product}></SigleItem>)}

          <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
            <td>

            <button onClick={() => navigate('/inventory')} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2 mb-4 ml-10 transition duration-500 my-5 bg-red-500 mr-20 text-center   flex hover:scale-110'><MdPostAdd className='mr-2'/> ADD Item</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td className='py-3 text-center text-blue-400 font-bold px-2'>
              Total: {products.length} Different Item
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};




const SigleItem = ({ data }) => {
  return (

    <tr className="transition duration-300 bg-white border border-grey-500 md:border-none block md:table-row hover:bg-blue-300">
      <td className="  p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className=" inline w-1/3 md:hidden font-bold">Name:</span>
        <Link to={`/inventory/${data._id}`} className=' cursor-pointer'>
          <img type='button' className=" mx-2 inline  cursor-pointer w-6 h-6 rounded-full" alt="productPhoto" src={data.img} />
          {data.name}
        </Link></td>
      <td className="p-2 md:border md:border-grey-500 text-center block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Price(BDT):</span><span className='font-extrabold'>&#2547; </span>{data.price}</td>
      <td className="p-2 md:border md:border-grey-500 text-center block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Sold:</span>{data.sold}</td>
      <td className="p-2 md:border md:border-grey-500 text-center block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Available:</span>{data.quantity}</td>
      <td className="p-2 md:border md:border-grey-500 text-center block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions:</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"><TiEdit /></button>
        <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"><RiDeleteBin5Line /></button>
      </td>
    </tr>
  );
};



export default ProductList;