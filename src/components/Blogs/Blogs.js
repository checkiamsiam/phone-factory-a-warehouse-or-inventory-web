import React from 'react';

const Blogs = () => {
  return (
    <div className='my-5 py-20 md:px-32 px-5'>
      <h1 className='underline text-5xl mb-5 text-center text-blue-700'> Here is the top Q&A </h1>
      <div className="container mx-auto grid md:grid-cols-2 gap-5 ">
        <div className=" block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">Difference between javascript and nodejs?</h5>
          <p className="italic text-gray-700 dark:text-gray-400"><b>Answer:</b> Javascript is a high level programing language and node js is a javascript run time. javascript basically used in front end and node js used in back-end.</p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">When should you use nodejs and when should you use mongodb ?</h5>
          <p className="italic text-gray-700 dark:text-gray-400"><b>Answer:</b> I should use node js in my server side and mongodb should be use for Database. mongodb can store data and we can execute by using node js in my back-end code</p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">Differences between sql and nosql databases?</h5>
          <p className="italic text-gray-700 dark:text-gray-400"><b>Answer:</b> sql means sequel . in sql database we have to put out data in a sequel format but in nosql there is so easy to put data and get data. we can put our data in database as like a js object. </p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">What is the purpose of jwt and how does it work ?</h5>
          <p className="italic text-gray-700 dark:text-gray-400"><b>Answer:</b> jwt means javascript web token. its used for security purpose and it works like a token that are needed for using database by implement the system no one can't use data without token.</p>
        </div>
      </div>

    </div>
  );
};

export default Blogs;