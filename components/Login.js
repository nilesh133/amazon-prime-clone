import React from 'react'
import { signIn } from "next-auth/react";
import LoginBg from ".././public/images/LoginBg.png"
import Image from 'next/image';
const Login = () => {
  return (
    <div className='flex items-center justify-center bg-gradient-login'>
      <div className='relative w-full min-h-[100vh] z-[-10]'>
        <Image
          src={LoginBg}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='absolute flex items-center justify-center flex-col'>
        <h3 className='text-[40px] md:text-[55px] font-spartan font-bold text-white text-center px-4'>Unlimited movies, TV</h3>
        <h3 className='text-[40px] md:text-[55px] font-spartan text-white font-bold text-center px-4'>shows and more.</h3>
        <div onClick = {signIn} className='text-[25px] md:text-[30px] w-[60%] mt-2 bg-[#0f79af] hover:bg-[#379cce] py-3 px-16 font-spartan tracking-wider rounded-md font-bold text-white cursor-pointer flex items-center justify-center'>
          LOGIN
        </div>
      </div>

    </div>
  )
}

export default Login