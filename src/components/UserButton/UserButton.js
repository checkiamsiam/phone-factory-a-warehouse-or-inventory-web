import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const UserButton = ({ user }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false)
  const firstLetter = user?.displayName?.slice(0, 1);

  return (
    <div>
      {user?.photoURL ? <img onClick={() => setOpenDropdown(!openDropdown)} id="avatar" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="  cursor-pointer absolute top-2 right-14 w-8 rounded-full" alt="usersPhoto" src={user.photoURL} /> :
      
      <h1 onClick={() => setOpenDropdown(!openDropdown)} className={`border-2 ${openDropdown && 'border-red-500'}  absolute top-1 right-14 w-8 bg-blue-500 cursor-pointer flex items-center justify-center rounded-full py-2 px-5`} >{firstLetter}</h1>}

      {openDropdown && <div id="userDropdown" className="z-10 absolute top-14 right-14 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{user.displayName}</div>
          <div className="font-medium truncate">{user?.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
          <li>
            <button onClick={()=> navigate('/inventory')} className="block mx-auto px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Manage Items</button>
          </li>
          <li>
            <button  className="block mx-auto px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Added</button>
          </li>
          <li>
            <button className="block mx-auto px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add New</button>
          </li>
          <li>
            <button className="block mx-auto px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</button>
          </li>
        </ul>
        <div className="py-1">
          <button onClick={()=> signOut(auth)} className="block mx-auto px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
        </div>
      </div>}
    </div>
  );
};

export default UserButton;
