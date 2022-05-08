import React from 'react';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { MdPostAdd } from 'react-icons/md';
import SingleItem from './SingleItem';


const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts , recall , setRecall] = useProducts()

  

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


          <tr data-aos="fade-up" className="bg-white border border-grey-500 md:border-none block md:table-row">
            <td className='py-3 text-center text-blue-400 font-bold px-2'>
              Total: {products.length} Different Item
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td className='text-center '>

              <button onClick={() => navigate('/inventory/add')} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2 mb-4  transition duration-500 my-5 bg-red-500 mx-2   flex hover:scale-110'><MdPostAdd className='mr-2' /> ADD Item</button>
            </td>
          </tr>


          {products.map(product => <SingleItem key={product._id} data={product} recallApi={recall} setRecallApi={setRecall}></SingleItem>)}


        </tbody>
      </table>

    </div>
  );
};








export default ProductList;