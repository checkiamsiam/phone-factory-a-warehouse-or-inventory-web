import React, { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import Loader from '../Loader/Loader';




const Signup = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)
    const [fistName, setfistName] = useState('')
    const [lastName, setLastName] = useState('')
    const [displayName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [signInWithGoogle, user2, loading2, error3] = useSignInWithGoogle(auth);
    const [signInWithGithub, user3, loading3, error4] = useSignInWithGithub(auth);
    const [signInWithFacebook, user4, loading4, error5] = useSignInWithFacebook(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (user1 || user2 || user3 || user4) {
        navigate('/')
    }
    if (loading1 || updating || loading2 || loading3 || loading4) {
        return <Loader></Loader>
    }

    error1 && console.log(error1.message);
    error2 && console.log(error2.message);
    error3 && console.log(error3.message);
    error4 && console.log(error4.message);
    error5 && console.log(error5.message);

    if (sending) {
        toast('Verification email sending')
    }

    const handleFistName = (e) => {
        setfistName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
        const fullName = fistName + ' ' + lastName;
        setName(fullName);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleAgreeTerms = () => {
        setAgree(!agree)
    }

    const handleCreateUser = async (e) => {
        await e.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName })
        await sendEmailVerification();
        await toast('verification email sent');
        await signOut(auth);
        await navigate('/login');

    }


    return (
        <div id='top' className="flex justify-center items-center  w-full  md:my-28 my-10">
            <div className="md:w-1/2 w-full bg-white rounded shadow-2xl hover:shadow-blue-300 p-8 m-4">
                <h1 className="block w-full text-center text-blue-800 text-2xl font-bold mb-6">Register</h1>
                <hr />
                <form className='mt-5'>
                    <div className="flex flex-col mb-4">
                        <label className="italic mb-2 font-bold text-lg text-gray-900" htmlFor="first_name">
                            <span className="text-red-500">&nbsp;*</span> First Name:</label>
                        <input onChange={handleFistName} className="border py-2 px-3 text-grey-800 outline-blue-400  " type="text" name="first_name" id="first_name" required placeholder='first name' />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="italic  mb-2 font-bold text-lg text-gray-900" htmlFor="last_name"><span className="text-red-500">&nbsp;*</span> Last Name:</label>
                        <input onChange={handleLastName} className="border py-2 px-3 text-grey-800 outline-blue-400" type="text" name="last_name" id="last_name" required placeholder='last name' />
                    </div>
                    <div className="flex flex-col mb-4 relative">
                        <label className="italic  mb-2 font-bold text-lg text-gray-900" htmlFor="email"><span className="text-red-500">&nbsp;*</span> Email:</label>
                        <div className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center pointer-events-none">
                            <AiOutlineMail />
                        </div>
                        <input onChange={handleEmail} className="border py-2 px-3 text-grey-800 outline-blue-400" type="email" name="email" id="email" required placeholder='email adress' />
                    </div>
                    <div className="flex flex-col mb-4 relative">
                        <label className="italic  mb-2 font-bold text-lg text-gray-900" htmlFor="password"><span className="text-red-500">&nbsp;*</span> Password:</label>
                        <div className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                    <input onChange={handlePassword} className="border py-2 px-3 text-grey-800 outline-blue-400" type="password" name="password" id="password" required placeholder='password' />
                    </div>
                    <div>
                        <label className="block mb-3 text-gray-500 font-bold" htmlFor="remember">
                            <input onChange={handleAgreeTerms} className="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                            <span className="text-sm">
                                &nbsp;&nbsp;agree terms and conditions
                            </span>
                        </label>
                    </div>
                    <button onClick={handleCreateUser} disabled={!agree} className="transition duration-500 w-full bg-blue-400 hover:bg-blue-600 text-white uppercase text-lg mx-auto p-3 rounded" type="submit">Create Account</button>
                </form>
                <h1 className='text-blue-500 italic text-center mt-10'>with social</h1>
                <hr />
                <div className='lg:flex justify-around my-5'>
                    <button onClick={() => signInWithGoogle()} className='transition duration-500 flex items-center justify-center py-2 px-7 border-2 border-black rounded-full w-full mb-2 mx-2 hover:bg-blue-300 hover:text-white hover:scale-110'><FcGoogle />&nbsp;&nbsp;Google</button>
                    <button onClick={() => signInWithFacebook()} className='transition duration-500 flex items-center justify-center py-2 px-7 border-2 border-transparent bg-blue-400 rounded-full w-full mb-2 mx-2 hover:bg-transparent hover:text-black  hover:border-black hover:scale-110'><BsFacebook />&nbsp;&nbsp;Facebook</button>
                    <button onClick={() => signInWithGithub()} className='transition duration-500 flex items-center justify-center border-2 border-transparent  py-2 px-7 bg-black text-lime-50 rounded-full w-full mb-2 hover:bg-transparent hover:text-black  hover:border-black mx-2 hover:scale-110'><AiOutlineGithub />&nbsp;&nbsp;Github</button>
                </div>
                <hr />
                <div className="mt-8">
                    <p className="text-sm text-center">
                        Already have an account?  &nbsp;&nbsp;
                        <Link className="underline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;