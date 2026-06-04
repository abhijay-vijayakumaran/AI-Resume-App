import React, { useState } from 'react'

import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { FaFileDownload, FaHistory } from 'react-icons/fa'
import Edit from './Edit'

import { jsPDF } from "jspdf";  //import { jspdf } from "jspdf";
import html2canvas from "html2canvas"
import { addDownloadHistoryAPI } from '../services/allAPI'

import Swal from 'sweetalert2'

function Preview({ resumeData, finish, resumeId, setResumeData }) {
  console.log(resumeId);

  const [downloadStatus, setDownloadStatus] = useState(false)


  const downloadCV = async () => {


    try {
      //getElement to take Screenshot
      const input = document.getElementById('result')

      input.style.color = "#374151"
      input.style.background = "#ffffff"


      const canvas = await html2canvas(input, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true
      })
      const imgURL = canvas.toDataURL('image/png')

      // const pdf = new jsPDF()
      // const pdfWidth = pdf.internal.pageSize.getWidth()
      // const pdfHeight = pdf.internal.pageSize.getHeight()
      // pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight)
      // pdf.save('resume.pdf')

      const pdf = new jsPDF('p', 'mm', 'a4')

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      const canvasWidth = canvas.width
      const canvasHeight = canvas.height

      const ratio = canvasWidth / canvasHeight

      let imgWidth = pdfWidth
      let imgHeight = (canvasHeight * imgWidth) / canvasWidth

      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight
        imgWidth = imgHeight * ratio
      }

      const x = (pdfWidth - imgWidth) / 2
      const y = 0

      pdf.addImage(imgURL, 'PNG', x, y, imgWidth, imgHeight)

      pdf.save('resume.pdf')



      //Date & Time
      const localTimeandDate = new Date()
      const timeStamp = `${localTimeandDate.toLocaleDateString()},${localTimeandDate.toLocaleTimeString()}`


      //proceed to API call
      const result = await addDownloadHistoryAPI({ ...resumeData, imgURL, timeStamp })
      console.log(result);
      setDownloadStatus(true)

    } catch (err) {
      console.log(err);

      Swal.fire({
        icon: "error",
        title: "Downloading Failed",
        text: "Please Try Again Later",

      });

    }
  }

  return (
    <>



      <div className='w-full flex-col  justify-center mt-8'>

        {
          finish &&

          <div className="flex flex-wrap justify-end items-center gap-4 mb-8">

            {/* Download */}
            <button
              onClick={downloadCV}
              className='w-14 h-14 rounded-xl bg-[#1d3ea6] text-white text-2xl flex items-center justify-center shadow-md cursor-pointer hover:bg-[#16348d] hover:shadow-lg transition-all duration-300'
            >
              <FaFileDownload />
            </button>

            {/* Edit */}
            <div className='w-14 h-14 rounded-xl bg-white border border-gray-200 text-[#1d3ea6] flex items-center justify-center shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-300'>
              <Edit
                resumeId={resumeId}
                setUpdateResume={setResumeData}
              />
            </div>

            {/* History */}
            {
              downloadStatus &&

              <Link
                to={"/history"}
                className='w-14 h-14 rounded-xl bg-white border border-gray-200 text-[#1d3ea6] text-2xl flex items-center justify-center shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-300'
              >
                <FaHistory />
              </Link>
            }

            {/* Back */}
            <Link
              to={"/resume-generator"}
              className='px-6 py-3 rounded-xl bg-gray-100 text-[#1d3ea6] font-semibold border border-gray-200 hover:bg-gray-200 transition-all duration-300'
            >
              BACK
            </Link>
          </div>

        }


        <Box className='w-full max-w-4xl mb-10'>

          <Paper
            elevation={5}
            id='result'
            style={{ borderColor: "#dbeafe" }}
            className='!shadow-2xl !border overflow-hidden'
          >

            <div style={{ backgroundColor: "#ffffff" }} className="w-full p-10 lg:p-14">

              {/* HEADER */}

              <div
                style={{ borderColor: "#dbeafe" }}
                className='text-center border-b-2 pb-8 mb-8'
              >

                <h1 className='text-5xl font-extrabold text-[#1d3ea6] tracking-wide uppercase'>

                  {resumeData.fullname}

                </h1>

                <p
                  style={{ color: "#6b7280" }}
                  className='text-lg mt-3 font-medium'
                >

                  {resumeData.job}

                </p>

              </div>

              {/* CONTACT DETAILS */}

              <div
                style={{ color: "#374151" }}
                className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-10'
              >

                <p className='text-base font-medium '>
                  <span className='text-[#1d3ea6] font-bold'>
                    Phone :
                  </span>

                  {" "} {resumeData.phone}
                </p>

                <p className='text-base font-medium'>
                  <span className='text-[#1d3ea6] font-bold'>
                    Email :
                  </span>

                  {" "} {resumeData.email}
                </p>

                <p className='text-base font-medium break-all'>
                  <span className='text-[#1d3ea6] font-bold'>
                    LinkedIn :
                  </span>

                  {" "}

                  <a
                    href={resumeData.linkedin}
                    style={{ color: "#3b82f6" }}
                    className='hover:underline'
                  >

                    {resumeData.linkedin}

                  </a>

                </p>

                <p className='text-base font-medium break-all'>
                  <span className='text-[#1d3ea6] font-bold'>
                    GitHub :
                  </span>

                  {" "}

                  <a
                    href={resumeData.github}
                    style={{ color: "#3b82f6" }}
                    className='hover:underline'
                  >

                    {resumeData.github}

                  </a>

                </p>

              </div>

              {/* SUMMARY */}

              <Divider
                sx={{
                  backgroundColor: "#dbeafe",
                  height: "2px",
                  marginY: "24px"
                }}
              />

              <h2 className='text-3xl font-bold text-[#1d3ea6] mb-5 uppercase tracking-wide'>

                Professional Summary

              </h2>

              <p
                style={{ color: "#374151" }}
                className='leading-9 text-justify text-[17px]'
              >

                {resumeData.summary}

              </p>

              {/* SKILLS */}

              <Divider
                sx={{
                  backgroundColor: "#dbeafe",
                  height: "2px",
                  marginY: "32px"
                }}
              />

              <h2 className='text-3xl font-bold text-[#1d3ea6] mb-6 uppercase tracking-wide'>

                Technical Skills

              </h2>

              <div className='flex flex-wrap gap-3 mt-4'>

                {
                  resumeData?.skills?.map((item, index) => (

                    <span key={index}>

                      <Button
                        variant="outlined"
                        style={{ backgroundColor: "#f4f8ff" }}
                        className='
                !border-[#1d3ea6]
                !text-[#1d3ea6]
                !rounded-lg
                !px-4
                !py-2
                !text-sm
                !font-medium
                !shadow-none
                hover:!border-[#2343c4]
                duration-300
              '
                      >

                        {item}

                      </Button>

                    </span>
                  ))
                }

              </div>

              {/* EDUCATION */}

              <Divider
                sx={{
                  backgroundColor: "#dbeafe",
                  height: "2px",
                  marginY: "32px"
                }}
              />

              <h2 className='text-3xl font-bold text-[#1d3ea6] mb-6 uppercase tracking-wide'>

                Education

              </h2>

              <div style={{ color: "#374151" }} className='space-y-4'>

                <p className='text-lg leading-8'>
                  <span className='font-bold text-[#1d3ea6]'>Degree in : </span>


                  {" "} {resumeData.degree}


                </p>

                <p className='text-lg leading-8'>

                  <span className='font-bold text-[#1d3ea6]'>
                    University /College Name :
                  </span>

                  {" "} {resumeData.university}

                </p>

                <p className='text-lg leading-8'>

                  <span className='font-bold text-[#1d3ea6]'>
                    Year of Graduation :
                  </span>

                  {" "} {resumeData.passOut}

                </p>

              </div>

            </div>

          </Paper>

        </Box>
      </div>

    </>
  )
}

export default Preview
