import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const DetailsOfProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [products] = useProducts();
  const thisProduct = products.find(product => product._id === params.id);
  return (
    <div data-aos="fade-up" className='my-20 px-5'>
      <div className="mx-auto flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={thisProduct?.img} alt='Product Photo' />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Details OF <span className='text-pink-400'>{thisProduct?.name}</span></h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{thisProduct?.body}</p>
          <button className="flex justify-center  items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded text-2xl"><TiEdit className='text-3xl' /> <span>Edit</span></button>
        </div>
      </div>
      <h5 className="text-blue-500 mb-2 text-3xl font-bold tracking-tight  dark:text-white text-center underline">Stock Updates</h5>
      <div data-aos="fade-up" className="mx-auto mt-5 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <table className="min-w-full border-collapse block md:table ">
          <thead className="block md:table-header-group">
            <tr className="px-2 border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="text-center bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Supplier(Brand)</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-centerblock md:table-cell">Price(BDT)</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-centerblock md:table-cell">Sold Quantity</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Available Quantity</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">


            <tr className="transition duration-300 bg-white border border-grey-500 md:border-none block md:table-row hover:bg-blue-300">
              <td className="p-2 md:border md:border-grey-500  block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Supplier:</span><span className='font-extrabold'>   </span>  {thisProduct?.supplier}</td>
              <td className="p-2 md:border md:border-grey-500  block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Price(BDT):</span><span className='font-extrabold'>&#2547; </span>{thisProduct?.price}</td>
              <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Sold Quantity:</span>{thisProduct?.sold}</td>
              <td className="p-2 md:border md:border-grey-500  block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Available Quantity:</span>{thisProduct?.quantity}</td>

            </tr>

            <tr>
              <td className='text-center py-2'>

              <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 ">ReStock</button>
              </td>
              <td></td>
              <td></td>
              <td className='text-center'>
              <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80">Delivered</button>
              </td>
            </tr>



          </tbody>
        </table>

          <button onClick={()=> navigate('/inventory')} className='text-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ml-10 transition duration-500 my-5 bg-red-500      flex items-center hover:scale-110'><BsArrowRight /> Manage Inventories</button>
      </div>

    </div>
  );
};

export default DetailsOfProduct;