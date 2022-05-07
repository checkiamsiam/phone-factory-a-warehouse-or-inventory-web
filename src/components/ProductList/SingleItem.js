import React from 'react';
import useProducts from '../../hooks/useProducts';
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link } from 'react-router-dom';

const SingleItem = ({data}) => {
  const [products, setProducts , recall , setRecall] = useProducts()
  const handleDeletion = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data =>  setRecall(!recall))
  }
  return (
    <tr data-aos="fade-up" className="transition duration-300 bg-white border border-grey-500 md:border-none block md:table-row hover:bg-blue-300">
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
        <button className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"><TiEdit /></button>
        <button onClick={() => handleDeletion(data._id)} className=" text-2xl ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"><RiDeleteBin5Line /></button>
      </td>
    </tr>
  );
};

export default SingleItem;