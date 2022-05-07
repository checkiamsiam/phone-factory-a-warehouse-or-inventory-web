import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const DetailsOfProduct = () => {
  const [restockPopupOpen, setRestcokPopupOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const [products, setProducts, recall, setRecall] = useProducts();
  const thisProduct = products.find(product => product._id === params.id);
  const [restockAmount, setRestockAmount] = useState(0)

  const handleRestockPopup = () => {
    setRestcokPopupOpen(true)
  }


  const handleRestock = (e) => {
    e.preventDefault()
    let newQuantity = parseInt(thisProduct.quantity) + parseInt(restockAmount)
    const updatedData = { name: thisProduct.name, img: thisProduct.img, body: thisProduct.body, price: thisProduct.price, quantity: newQuantity, supplier: thisProduct.supplier, sold: thisProduct.sold, added: thisProduct.added };
    const url = `http://localhost:5000/products/${thisProduct._id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(data => {
        setRecall(!recall)
        restockAmount(0)
      })
    setRestcokPopupOpen(!restockPopupOpen)
  }

  const handleDelivery = () => {
    const updatedData = { name: thisProduct.name, img: thisProduct.img, body: thisProduct.body, price: thisProduct.price, quantity: (parseInt(thisProduct.quantity) - 1), supplier: thisProduct.supplier, sold: (parseInt(thisProduct.sold) + 1), added: thisProduct.added };
    const url = `http://localhost:5000/products/${thisProduct._id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(data => setRecall(!recall))
  }

  const getRestockAmount = (e) => {
    setRestockAmount(e.target.value)
  }



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

                <button onClick={handleRestockPopup} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 ">ReStock</button>



              </td>
              <td></td>
              <td></td>
              <td className='text-center'>
                <button onClick={handleDelivery} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80">Delivered</button>
              </td>
            </tr>



          </tbody>
        </table>

        <button onClick={() => navigate('/inventory')} className='text-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ml-10 transition duration-500 my-5 bg-red-500      flex items-center hover:scale-110'><BsArrowRight /> Manage Inventories</button>
      </div>
      {/* modal item */}
      {restockPopupOpen && <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-1/4 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative md:top-1/3 md:left-1/3  p-4 w-full max-w-md h-full md:h-auto">

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={() => setRestcokPopupOpen(!restockPopupOpen)} type="button" className="absolute text-red-600 top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg  p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipruler="evenodd"></path></svg>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-blue-600 dark:text-white">Restock Amount ?</h3>
              <form className="space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                  <input onChange={getRestockAmount} type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter here" required />
                </div>


                <button onClick={handleRestock} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ReStock</button>

              </form>
            </div>
          </div>
        </div>
      </div>}
      {/* end of modal */}
    </div>
  );
};

export default DetailsOfProduct;