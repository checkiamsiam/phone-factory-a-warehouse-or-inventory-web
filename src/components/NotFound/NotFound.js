import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/not-found.png'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center  h-screen mt-20 mb-20 w-1/2 mx-auto">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div
            className="flex flex-col items-center justify-center md:py-24 lg:py-32"
          >
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>
            <p
              className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
            >
              <span className="text-red-500">Oops! shit man!!!</span> <br /> Page not found
            </p>
            <p className="mb-8  text-center text-gray-500 md:text-lg">
              The page you’re finding or looking for doesn’t exist or removed.
            </p>
            <Link
              to="/"
              className="px-6 py-2 text-sm font-semibold text-white rounded-lg bg-blue-500"
            >Go home</Link
            >
          </div>
          <div className="mt-4  w-3/4 mx-auto">
            <img
              className='w-full '
              src={notfound}
              alt="404"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;