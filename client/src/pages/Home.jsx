import React from 'react'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='uppercase text-center text-slate-800 font-bold font text-3xl pb-4'>Welcome to Vish-Auth.</h1>
      <p className=' pb-4'>Vish-Auth provides a robust and secure authentication solution built with the MERN stack, ensuring your users’ data is protected and their login experience is seamless.</p>
      <h3 className='font-semibold underline'>Features:</h3>
      <ul>
        <li><span className='font-semibold'>User Registration:</span> Easy and secure user sign-up process.</li>
        <li><span className='font-semibold'>Login and Logout:</span> Smooth and secure user login and logout functionality.</li>
        <li><span className='font-semibold'>Password Encryption:</span> Secure password storage using industry-standard encryption.</li>
        <li><span className='font-semibold'>Session Management:</span> Reliable session management to keep users logged in.</li>
        <li><span className='font-semibold'>Token-Based Authentication:</span> Secure and scalable token-based authentication (JWT).</li>
        <li><span className='font-semibold'>User Profile:</span> Manage and update user profiles effortlessly.</li>
      </ul>
      <h3 className='font-semibold underline pt-4'>Get Started</h3>
      <ul>
        <li>
        <span className='font-semibold'>1.Register:</span> Create a new account by providing your email and password.
        </li>
        <li><span className='font-semibold'>2.Login:</span> Access your account with secure authentication.</li>
        <li><span className='font-semibold'>3.Profile:</span> View and update your profile information.</li>
        <li><span className='font-semibold'>4.Logout:</span> Safely log out from your account.</li>
      </ul>
      <Footer/>
    </div>
    
  )
}
