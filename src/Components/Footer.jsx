import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Footer() {
  return (

 <footer className="bg-gradient-to-r pt-17 from-slate-950 via-blue-950 to-slate-900 text-white border-t border-sky-900">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start">

          <div className="flex flex-col h-full">

            <div className="flex items-center gap-4 mb-5">

              <div className="bg-white/10 border border-white/10 rounded-2xl p-2 shadow-lg">
                <img
                  className="w-14 rounded-xl"
                          src="https://img.freepik.com/premium-vector/resume-flat-style-vector-icon-white-coloured-blue-circle_787461-1577.jpg"
                  alt="logo"
                />
              </div>

              <h2 className="text-3xl font-bold text-sky-300">
               AI Resume Builder
              </h2>

            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Build professional, ATS-friendly resumes with ease and land your
              dream job faster using our modern AI-powered resume tools.
            </p>

       
            <div className="flex items-center gap-4 mt-6">

              <a
                href="https://github.com/abhijay-vijayakumaran"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-400 hover:text-slate-900 transition duration-300 flex items-center justify-center"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/abhijay-vijayakumaran/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-400 hover:text-slate-900 transition duration-300 flex items-center justify-center"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-400 hover:text-slate-900 transition duration-300 flex items-center justify-center"
              >
                <FaTwitter size={18} />
              </a>

            </div>

          </div>

          <div className="flex flex-col h-full">

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              <Link
                to="/"
                className="text-slate-300 hover:text-sky-300 transition duration-200 no-underline"
              >
                Home
              </Link>

              <Link
                to="/resume-generator"
                className="text-slate-300 hover:text-sky-300 transition duration-200 no-underline"
              >
                Resume Generator
              </Link>

              <Link
                to="/form"
                className="text-slate-300 hover:text-sky-300 transition duration-200 no-underline"
              >
                Resume Form
              </Link>

              <Link
                to="/history"
                className="text-slate-300 hover:text-sky-300 transition duration-200 no-underline"
              >
                Resume History
              </Link>

            </div>

          </div>


          <div className="flex flex-col h-full">

            <h3 className="text-xl font-semibold text-white mb-5">
              Get Started
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Create beautiful resumes in minutes and increase your chances of
              getting hired with a modern ATS-friendly design.
            </p>

            <div className="mt-auto">

              <Link to="/resume-generator" className="no-underline">

                <button className="bg-sky-400 hover:bg-sky-300 text-blue-950 font-bold px-6 py-3 rounded-2xl cursor-pointer transition duration-300 shadow-xl hover:scale-105">

                  Create Resume →

                </button>

              </Link>

            </div>

          </div>

        </div>


        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2026 AI Resume Builder. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <a
              href="#"
              className="text-slate-400 hover:text-sky-300 transition duration-200 no-underline"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-sky-300 transition duration-200 no-underline"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-sky-300 transition duration-200 no-underline"
            >
              Support
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
