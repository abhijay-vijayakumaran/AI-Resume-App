import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div>
    

<div className="min-h-screen bg-[#eef5fb] flex items-center justify-center px-4 sm:px-6 py-10">


  <div className="flex flex-col lg:flex-row items-center gap-10 bg-white border border-blue-100 shadow-2xl rounded-[35px] p-8 sm:p-10 lg:p-14 w-full max-w-5xl text-center lg:text-left">

    <div className="flex justify-center w-full lg:w-[35%]">

      <img
        className='w-[220px] sm:w-[280px] lg:w-full max-w-[320px] drop-shadow-2xl rounded-xl'
        src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif"
        alt=""
      />

    </div>


    <div className="w-full lg:w-[65%]">

      <p className='text-[#11a8ff] font-bold text-sm sm:text-lg tracking-[4px] uppercase mb-3'>

        Oh No!

      </p>

      <h3 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1d3ea6] leading-tight mb-6'>

        Looks like your lost

      </h3>

      <p className='text-gray-500 text-base sm:text-lg leading-8 mb-10'>

        The page you are looking for is not available

      </p>

      <Link
        to={'/'}
        className="
          inline-block
          bg-[#1d3ea6]
          px-8
          py-4
          text-white
          rounded-2xl
          font-semibold
          shadow-lg
          hover:bg-[#16358c]
          hover:scale-105
          duration-300
        "
      >

        Home

      </Link>

    </div>

  </div>

</div>

    </div>
  )
}

export default Pnf
