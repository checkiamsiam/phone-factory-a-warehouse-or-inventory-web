import React from 'react';
import { FaMoneyCheckAlt } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const WhyChoseUs = () => {
 const navigate = useNavigate();
  return (
    <div>
      <h1 className='md:text-5xl text-4xl text-blue-600 my-5 text-center '><span className='border-b-4 border-blue-300 border-dotted '>WHY CHOSE US</span></h1>
      <div className='md:flex  gap-4 w-4/5 mx-auto my-10'>
        <div className="cursor-pointer p-6 max-w-sm bg-transparent rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <FaMoneyCheckAlt className='text-9xl text-blue-400' />
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              FINANCING MADE EASY</h5>
            <p className="italic font-normal text-gray-700 dark:text-gray-400">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
        </div>
        <div className="cursor-pointer p-6 max-w-sm bg-transparent rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <SiBrandfolder className='text-9xl text-blue-400' />
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              WIDE RANGE OF BRANDS</h5>
            <p className="italic font-normal text-gray-700 dark:text-gray-400">With a robust selection of popular Mobile Phones on hand, as well as leading Mobile from Apple and Walton.</p>
          </div>
        </div>
        <div className="cursor-pointer p-6 max-w-sm bg-transparent rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <BsFillChatDotsFill className='text-9xl text-blue-400' />
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

              TRUSTED BY THOUSANDS</h5>
            <p className="italic font-normal text-gray-700 dark:text-gray-400">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
          </div>
        </div>
        <div className="cursor-pointer p-6 max-w-sm bg-transparent rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <MdOutlineHomeRepairService className='text-9xl text-blue-400' />
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

              PHONE SERVICE & MAINTENANCE</h5>
            <p className="italic font-normal text-gray-700 dark:text-gray-400">Our service department maintain your Mobile to stay safe on the hand for many more years.</p>
          </div>
        </div>
      </div>
      <button onClick={()=> navigate('/about')} className='flex relative md:left-[40%] left-[25%] my-5 gap-2 py-2 px-5 rounded-md text-white items-center transition duration-500 bg-blue-400 hover:bg-blue-500'> <FcAbout className='bg-white' /> LEARN MORE US</button>
    </div>
  );
};

export default WhyChoseUs;