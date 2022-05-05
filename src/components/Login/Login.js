import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";


const Login = () => {
  return (
    <div id='top' className="mt-20 mx-auto container flex items-center" >
      <div className="w-full pt-2 p-4">

        <div className="mx-auto md:p-6 md:w-1/2">
          <div className="flex flex-wrap justify-between">
            <h1 className="text-2xl text-blue-500 hover:text-blue-500 transition duration-500 p-4">
              <i className="fas fa-sign-in-alt fa-fw fa-lg flex items-center">
                <BiLogIn /> &nbsp;&nbsp;
                Log-in
              </i>
            </h1>
            <Link to="/" className="flex items-center  text-blue-400 hover:text-blue-600 transition duration-500">
              <FcHome /> &nbsp;&nbsp;
              Back to Home
              <i className="fas fa-chevron-circle-left fa-fw"></i>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form method="POST" action="#login">
              <div className="mb-8">
                <label htmlFor="username" className="flex items-center block text-gray-700 text-sm font-bold mb-2">
                  <span className="text-red-500">&nbsp;*</span>
                  <AiOutlineMail />&nbsp;
                  Email:
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                  <input id="email" type="email" name='email' className="block pr-10 shadow appearance-none border-2 border-blue-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out" placeholder="you@example.com" required />
                </div>
                <strong className="text-red-500 text-xs italic">email adress is not matching</strong>
              </div>

              <div className="mb-8">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  <span className="text-red-500">&nbsp;*</span>
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <input name="password" id="password" type="password" placeholder='password' required className="block pr-10 shadow appearance-none border-2 border-blue-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out" />
                </div>
                <strong className="text-red-500 text-xs italic">password maybe incorrect</strong>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-end">
                  
                  <div>
                    <a className="font-bold  underline text-sm text-blue-500 hover:text-blue-800" href="#password-request">
                      forgot password
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-4 text-center">
                <button className="transition duration-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                  Login
                </button>
              </div>
            </form>
            <h1 className='text-blue-500 italic text-center mt-10'>with social</h1>
            <hr />
            <div className='lg:flex justify-around my-5'>
              <button className='transition duration-500 flex items-center justify-center py-2 px-7 border-2 border-black rounded-full w-full mb-2 mx-2 hover:bg-blue-300 hover:text-white hover:scale-110'><FcGoogle />&nbsp;&nbsp;Google</button>
              <button className='transition duration-500 flex items-center justify-center py-2 px-7 border-2 border-transparent bg-blue-400 rounded-full w-full mb-2 mx-2 hover:bg-transparent hover:text-black  hover:border-black hover:scale-110'><BsFacebook />&nbsp;&nbsp;Facebook</button>
              <button className='transition duration-500 flex items-center justify-center border-2 border-transparent  py-2 px-7 bg-black text-lime-50 rounded-full w-full mb-2 hover:bg-transparent hover:text-black  hover:border-black mx-2 hover:scale-110'><AiOutlineGithub />&nbsp;&nbsp;Github</button>
            </div>
            <hr />
            <div className="mt-8">
              <p className="text-sm text-center">
                don't have any account?  &nbsp;&nbsp;
                <Link className="underline font-bold text-sm text-blue-500 hover:text-blue-800" to="/signup">
                  sign up
                </Link>
              </p>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;