import React from 'react';
import { onConfirm } from 'react-confirm-pro';
import toast from 'react-hot-toast';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const ProductCardForMyAdded = ({ pData, recall, setRecall }) => {
  const navigate = useNavigate();

 

  const OnConfirmDelete = (id) => {
    onConfirm({
      title: (
        <h3>
          Are you sure?
        </h3>
      ),
      description: (
        <p>Do you really want to delete this item? This process cannot be undone.</p>
      ),
      onSubmit: () => {
        fetch(`http://localhost:5000/products/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => setRecall(!recall))
          .then(toast('Delete Successfully'))

      },
      onCancel: () => {
        toast("Your Deletion was Canceled")
      },
    })
  };
  console.log(pData);
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-3">
      <div className="flex flex-col items-center py-10">
        <img className="mb-3 w-32 h-32 rounded-full shadow-lg" src={pData.img} alt="product image" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{pData.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"><b>Available:</b> {pData.quantity}</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <button onClick={() => navigate(`/inventory/${pData._id}`)} className="flex items-center text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"><TiEdit />Details</button>
          <button onClick={() => OnConfirmDelete(pData._id)} className="flex items-center text-xl ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"><RiDeleteBin5Line />Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardForMyAdded;