import React, { useState } from 'react';


const IfPhoto = ({ user }) => {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <div>
      <img onClick={() => setOpenDropdown(!openDropdown)} id="avatar" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="  cursor-pointer absolute top-2 right-14 w-8 rounded-full" alt="usersPhoto" src={user.photoURL} />

      {openDropdown && <div id="userDropdown" class="z-10 absolute top-12 right-14 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{user.displayName}</div>
          <div class="font-medium truncate">{user?.email}</div>
        </div>
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
        </ul>
        <div class="py-1">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
        </div>
      </div>}
    </div>
  );
};

export default IfPhoto;
