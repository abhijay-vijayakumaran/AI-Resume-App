import React, { useEffect, useState } from 'react'

import { Box, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { deleteDownloadsAPI, getDownloadsAPI } from '../services/allAPI'



function History() {

  const [resume, setResume] = useState([])

  useEffect(() => {
    getDownloads()
  }, [])

  const getDownloads = async () => {
    try {
      const result = await getDownloadsAPI()
      console.log(result)
      setResume(result.data)

    } catch (err) {
      console.log(err);

    }
  }

  // console.log(resume);

  const removeHistory = async (id) => {
    try {

      const result = await deleteDownloadsAPI(id)
      console.log(result);
      getDownloads()

    } catch (err) {
      console.log(err);

    }
  }



  return (
    <div>


      <div className='min-h-screen bg-[#eef5fb] px-6 lg:px-14 py-10'>



        <div className='flex flex-col lg:flex-row items-center justify-between mb-12 gap-5'>

          <h1 className='text-4xl font-extrabold text-[#1d3ea6] tracking-wide text-center lg:text-left'>

            Downloaded Resume History

          </h1>

          <Link
            to={'/'}
            className='px-6 py-3 rounded-2xl border border-[#1d3ea6] text-[#1d3ea6] font-semibold hover:bg-blue-50 duration-300'
          >

            BACK

          </Link>

        </div>



        <Box
          component="section"
          className='w-full'
        >

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch">

            {
              resume?.length > 0 ?

                resume.map((item, index) => (

                  <div
                    key={index} className='h-full'
                  >

                    <Paper
                      elevation={3}
                      className='flex flex-col !rounded-[35px] !shadow-xl !p-6 !text-center !border !border-blue-100 h-full hover:!shadow-2xl duration-300 overflow-hidden bg-white'
                    >

                      {/* TOP SECTION */}

                      <div className="flex items-center justify-between mb-6">

                        <div className='text-left'>

                          <h6 className='text-sm text-gray-500 font-medium leading-7'>

                            Review At :
                            <br />

                            <span className='text-[#1d3ea6] font-semibold'>

                              {item?.timeStamp}

                            </span>

                          </h6>

                        </div>

                        <button
                          onClick={() => removeHistory(item?.id)}
                          className='w-12 h-12 rounded-2xl bg-red-50 text-red-500 text-2xl flex items-center justify-center cursor-pointer hover:bg-red-100 duration-300'
                        >

                          <MdDelete />

                        </button>

                      </div>



                      <div className="border border-blue-100 rounded-[25px] p-4 bg-[#f8fbff] overflow-hidden">

                        <img
                          className='w-full rounded-2xl object-cover hover:scale-105 duration-300'
                          src={item?.imgURL}
                          alt="resume"
                        />

                      </div>

                    </Paper>

                  </div>

                ))

                :

                <div className='col-span-full flex items-center justify-center py-20'>

                  <p className='text-2xl font-semibold text-gray-400'>

                    Nothing to Display

                  </p>

                </div>
            }

          </div>

        </Box>

      </div>




    </div>
  )
}

export default History
