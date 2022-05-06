import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { signOut } from 'firebase/auth';


const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [errorMessege, setErrorMessege] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [
    signInWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user4, loading4, error4] = useSignInWithFacebook(auth);
  const [sendPasswordResetEmail, sending, error5] = useSendPasswordResetEmail(auth);

  if (loading1 || loading2 || loading3 || loading4) {
    return <Loader></Loader>
  }

  if (sending) {
    toast('reset password email sending')
  }

  if (user1 || user2 || user3 || user4) {
    navigate(from, { replace: true })
  }

  error1 && console.log(error1.message);
  error2 && console.log(error2.message);
  error3 && console.log(error3.message);
  error4 && console.log(error4.message);
  error5 && console.log(error5.message);


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleFBSignin = async () => {
    await signInWithFacebook()
    await navigate(from, { replace: true });
  }
  const handleGoogleSignin = async () => {
    await signInWithGoogle()
    await navigate(from, { replace: true });
  }
  const handleGitSignin = async () => {
    await signInWithGithub()
    await navigate(from, { replace: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(email, password)
    if (user1?.emailVerified) {
      if (user1) {
        await navigate(from, { replace: true });
        return
      } else {
        await setErrorMessege('Your entire email or password is incorrect')
      }
      setEmail('')
      setPassword('')
    } else {
      await toast('your entire email is not verified')
      await navigate('/login')
    }

  }
  const handleReset = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      await toast('Reset mail sent.', {
        style: {
          border: '1px solid pink',
        },
      })
    } else {
      await toast('enter email first', {
        style: {
          border: '1px solid pink',
        },
      })
    }
  }

  return (
    <div data-aos="fade-down" data-aos-duration="3000" id='top' className="mt-20 mx-auto container flex items-center" >
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
            <form>
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
                  <input onChange={handleEmail} id="email" type="email" name='email' className="block pr-10 shadow appearance-none border-2 border-blue-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out" placeholder="you@example.com" required />
                </div>
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
                  <input onChange={handlePassword} name="password" id="password" type="password" placeholder='password' required className="block pr-10 shadow appearance-none border-2 border-blue-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out" />
                </div>
                <strong className="text-red-500 text-xs italic text-center">{errorMessege}</strong>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-end">

                  <div>
                    <button onClick={handleReset} className="font-bold  underline text-sm text-blue-500 hover:text-blue-800" href="#password-request">
                      forgot password
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-4 text-center">
                <button onClick={handleSubmit} className="transition duration-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                  Login
                </button>
              </div>
            </form>
            <h1 className='text-blue-500 italic text-center mt-10'>with social</h1>
            <hr />
            <div className='lg:flex justify-around my-5'>
              <button onClick={handleGoogleSignin} className='transition duration-500 flex items-center justify-center py-2 px-7 border-2 border-black rounded-full w-full mb-2 mx-2 hover:bg-blue-300 hover:text-white hover:scale-110'><FcGoogle />&nbsp;&nbsp;Google</button>
              <button onClick={handleFBSignin} className='transition duration-500 flex items-center justify-center py-2 px-7 border-2 border-transparent bg-blue-400 rounded-full w-full mb-2 mx-2 hover:bg-transparent hover:text-black  hover:border-black hover:scale-110'><BsFacebook />&nbsp;&nbsp;Facebook</button>
              <button onClick={handleGitSignin} className='transition duration-500 flex items-center justify-center border-2 border-transparent  py-2 px-7 bg-black text-lime-50 rounded-full w-full mb-2 hover:bg-transparent hover:text-black  hover:border-black mx-2 hover:scale-110'><AiOutlineGithub />&nbsp;&nbsp;Github</button>
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