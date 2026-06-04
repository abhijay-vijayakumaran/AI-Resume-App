import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function LandingPage() {

   const tools = [
    {
      icon: "📄",
      title: "Resume",
      desc: "Create unlimited new resumes and easily edit them afterwards.",
    },
    {
      icon: "✉️",
      title: "AI Skill Suggestions",
      desc: "Generate smart skills and content recommendations based on your job role.",
    },
    {
      icon: "💼",
      title: "Easy to Use",
      desc: "Build your resume quickly with a simple and user-friendly interface.",
    },
    {
      icon: "📋",
      title: "Instant PDF Download",
      desc: "Download professional resumes instantly in high-quality PDF format.",
    },
  ];

  const steps = [
    { num: "01", title: "Enter your info", desc: "Add your experience, skills, and education." },
    { num: "02", title: "AI-powered suggestions", desc: "Get smart skill and content suggestions tailored to your job role instantly." },
    { num: "03", title: "Download & apply", desc: "Export your resume and start applying today." },
  ];

   const testimonials = [
    { initials: "AK", name: "Arjun K.", role: "Software Engineer", review: "Got my dream job in 3 weeks. The templates are clean and AI suggestions were spot on." },
    { initials: "SM", name: "Sana M.", role: "Marketing Manager", review: "The cover letter tool is incredible. My application response rate doubled after using it." },
    { initials: "RT", name: "Riya T.", role: "Recent Graduate", review: "As a fresh graduate, I had no idea where to start. This tool made everything so easy and fast." },
    { initials: "JD", name: "James D.", role: "Product Designer", review: "Landed 3 interviews in one week. The job tracking feature kept me organized throughout." },
    { initials: "PL", name: "Priya L.", role: "Data Analyst", review: "Clean, professional resumes in minutes. Highly recommend to anyone job hunting." },
    { initials: "MK", name: "Mohamed K.", role: "DevOps Engineer", review: "The AI suggestions tailored my resume perfectly to each job posting. Game changer." },
    { initials: "ER", name: "Elena R.", role: "HR Specialist", review: "Even as an HR professional, I used this to update my own resume. Absolutely brilliant." },
    { initials: "TO", name: "Taiwo O.", role: "Finance Analyst", review: "Got hired 6 weeks faster than my last job search. The tools genuinely work." },
    { initials: "CW", name: "Claire W.", role: "UX Researcher", review: "Beautiful templates and a smooth experience from start to finish. Loved every bit." },
    { initials: "RB", name: "Rohan B.", role: "Backend Developer", review: "The job alerts are super relevant. Found my current role through a posting here." },
    { initials: "AS", name: "Amira S.", role: "Content Writer", review: "Cover letter writing used to take me hours. Now it takes minutes and sounds better." },
    { initials: "LN", name: "Lena N.", role: "Project Manager", review: "Tracking all my applications in one place reduced my stress significantly." },
  ];

  return (
    <>

<div className="bg-sky-50 font-sans overflow-x-hidden">

  <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 py-32 px-8 text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,_#bae6fd_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_#38bdf8_0%,_transparent_40%)]" />

    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-sky-400/20 border border-sky-300/30 rounded-full px-5 py-2 mb-8">
        <span className="text-sky-200 text-base font-medium">
          ✦ AI-Powered Resume Builder
        </span>
      </div>

      <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        Designed to get <span className="text-sky-300">hired.</span>
      </h1>

      <h4 className="text-2xl text-sky-100 mb-12 leading-relaxed">
        Your skills, your story, your next job — all in one.
      </h4>

      <Link to="/resume-generator">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#1d4ed8",
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: "12px",
            padding: "14px 42px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#e0f2fe" },
          }}
        >
          Make your Resume →
        </Button>
      </Link>
    </div>
  </section>


  <div className="bg-blue-800 py-7 px-8">
    <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
      {[
        { val: "48 days", label: "faster hiring on avg." },
        { val: "10K+", label: "resumes created" },
        { val: "95%", label: "user satisfaction" },
      ].map((s, i) => (
        <div
          key={i}
          className={i === 1 ? "border-x border-sky-400/30" : ""}
        >
          <p className="text-4xl font-bold text-sky-300">{s.val}</p>
          <p className="text-sm text-sky-200 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  </div>

  {/* ── TOOLS ── */}
  <section className="py-28 px-8 max-w-7xl mx-auto">
    <p className="text-center text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
      Everything you need
    </p>

    <h3 className="text-center text-5xl font-bold text-blue-900 mb-16">
      Tools
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {tools.map((t) => (
        <div
          key={t.title}
          className="bg-white rounded-3xl border border-sky-200 p-8 flex gap-5 hover:shadow-xl hover:border-sky-400 transition-all duration-200"
        >
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">
            {t.icon}
          </div>

          <div>
            <h4 className="text-blue-900 font-semibold text-xl mb-2">
              {t.title}
            </h4>

            <p className="text-gray-500 text-base leading-relaxed">
              {t.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>


  <section className="bg-blue-700 py-24 px-8">
    <div className="max-w-6xl mx-auto text-center">

      <p className="text-sm font-semibold tracking-widest text-sky-300 uppercase mb-4">
        Simple process
      </p>

      <h3 className="text-5xl font-bold text-white mb-16">
        Get hired in 3 steps
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {steps.map((s) => (
          <div
            key={s.num}
            className="bg-white/10 border border-sky-300/20 rounded-3xl p-8"
          >
            <p className="text-5xl font-extrabold text-sky-300 mb-5">
              {s.num}
            </p>

            <h4 className="text-white font-semibold text-lg mb-3">
              {s.title}
            </h4>

            <p className="text-sky-200 text-base leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

</div>


    </>
  )
}

export default LandingPage
