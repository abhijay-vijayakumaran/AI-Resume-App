import React, { useState } from 'react'
import Preview from '../Components/Preview'
import Steps from '../Components/Steps'


function Form() {


  const [resumeData, setResumeData] = useState({

    fullname: "",
    location: "",
    job: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    degree: "",
    university: "",
    passOut: "",
    skills: [],
    summary: ""

  })

  const [finish, setFinish] = useState(false)
  const [resumeId, setResumeId] = useState("")

  return (
    <div>

      <div className="p-5">



  {
    finish ?

      <div className="grid grid-cols-12">

        <div className="col-span-3"></div>

        <div className="col-span-8">

          <Preview
            resumeId={resumeId}
            finish={finish}
            resumeData={resumeData}
            setResumeData={setResumeData}
          />

        </div>

        <div className="col-span-1"></div>

      </div>

      :

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5">

        <div>


          <Steps
            setResumeId={setResumeId}
            resumeData={resumeData}
            setResumeData={setResumeData}
            setFinish={setFinish}
          />

        </div>

        <div>

          {
            resumeData.fullname &&
            <Preview resumeData={resumeData} />
          }

        </div>

      </div>
  }

</div>

    </div>
  )
}

export default Form
