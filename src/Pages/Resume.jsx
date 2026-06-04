import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileAlt } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";


function Resume() {
  return (
    <div>

      <div className="py-20 bg-[#eef5fb]">

        <h3 className='text-center text-4xl font-bold text-[#1d3ea6] mb-16'>
          Create a Job-Winning Resume in Minutes
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 px-6">

          {/* CARD 1 */}

          <div className="w-full lg:w-[700px] bg-white border border-blue-100 rounded-[30px] shadow-lg p-10 text-center hover:scale-105 duration-300">

            <div className='w-24 h-24 mx-auto rounded-3xl bg-blue-100 flex items-center justify-center mb-6'>

              <FaFileAlt className='text-5xl text-[#2563eb]' />

            </div>

            <h4 className='text-3xl font-bold text-[#1d3ea6] mb-4'>
              Add your Information
            </h4>

            <p className='text-gray-500 text-lg mb-5'>
              Add pre-written examples to each section
            </p>

            <h5 className='text-[#2563eb] font-bold text-xl'>
              Step 1
            </h5>

          </div>

         

          <div className="w-full lg:w-[700px] bg-white border border-cyan-100 rounded-[30px] shadow-lg p-10 text-center hover:scale-105 duration-300">

            <div className='w-24 h-24 mx-auto rounded-3xl bg-cyan-100 flex items-center justify-center mb-6'>

              <LiaFileDownloadSolid className='text-5xl text-cyan-500' />

            </div>

            <h4 className='text-3xl font-bold text-[#1d3ea6] mb-4'>
              Download your Resume
            </h4>

            <p className='text-gray-500 text-lg mb-5'>
              Download and start applying
            </p>

            <h5 className='text-cyan-500 font-bold text-xl'>
              Step 2
            </h5>

          </div>

        </div>

      

        <div className='flex justify-center mt-16'>

          <Link to={'/form'}>

            <button className='px-14 py-4 rounded-2xl bg-gradient-to-r from-[#2343c4] to-[#11a8ff] cursor-pointer text-white text-xl font-semibold shadow-xl hover:scale-105 duration-300'>
              Let's Start
            </button>

          </Link>

        </div>

      </div>



    </div>
  )
}

export default Resume
