import React, { useState } from 'react';
import logo from '../../images/mobile.png'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="z-20 bg-[rgba(247,244,244,0.65)] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" class="flex items-center">
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="logo of this inventory website" />
            <span class="self-center text-xl font-semibold italic font-mono whitespace-nowrap dark:text-white">Phone-Factor</span>
          </Link>
          <button onClick={() => setOpen(!open)} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {!open ? <svg className="md:w-7 md:h-7 w-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg> :
              <svg className="md:w-7 md:h-7 w-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
          </button>
        </div>
      </nav>
      {open && <div className='h-[90vh] w-full absolute  flex justify-center items-center z-10 bg-[rgba(54,53,52,0.65)] '>
        <ul class="py-1 md:w-1/5 text-center" aria-labelledby="dropdown">
          <li>
            <a href="#" class="block py-2 px-4 md:text-lg text-sm text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-red-700">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 md:text-lg text-sm text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-red-700">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 md:text-lg text-sm text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-red-700">Inventory</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 md:text-lg text-sm text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-red-700">Blogs</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 md:text-lg text-sm text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-red-700">Contact us</a>
          </li>
          <li>
            <button type="button" class="mt-3 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 ">Sign out</button>
          </li>
        </ul>
      </div>}
    </div>
  );
};

export default Header;