import React from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import jobType from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'

import { addResumeAPI } from '../services/allAPI'

import Swal from 'sweetalert2'




//pass args from from.jsx
function Steps({ resumeData, setResumeData, setFinish, setResumeId }) {

  console.log(resumeData);


  const steps = ['Basic Information', 'Contact Details', 'Educational Details', 'Review & Submit'];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };


  const handleNext = () => {


    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStep = (step) => {

    switch (step) {

      case 0:
        return (

          <div>

            <h3 className="text-3xl font-bold text-[#1d3ea6] mb-8">
              Personal Details
            </h3>

            <div className="flex flex-col gap-8 bg-white p-8 rounded-[30px] shadow-md border border-blue-100">

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    fullname: e.target.value
                  })
                }
                value={resumeData.fullname}
                id="standard-basic"
                label="Full Name"
                variant="standard"
              />

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    location: e.target.value
                  })
                }
                value={resumeData.location}
                id="standard-basic"
                label="Location"
                variant="standard"
              />

              <FormControl variant="standard">

                <InputLabel id="demo-simple-select-label">
                  Choose Job Title
                </InputLabel>

                <Select

                  onChange={e =>
                    setResumeData({
                      ...resumeData,
                      job: e.target.value
                    })
                  }

                  // value={resumeData.job}

                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Job"
                >

                  {
                    jobType.jobRoles.map(role => (

                      <MenuItem
                        key={role}
                        value={role}
                      >

                        {role}

                      </MenuItem>
                    ))
                  }

                </Select>

              </FormControl>

            </div>

          </div>
        )

      case 1:
        return (

          <div>

            <h3 className="text-3xl font-bold text-[#1d3ea6] mb-8">
              Contact Details
            </h3>

            <div className="flex flex-col gap-8 bg-white p-8 rounded-[30px] shadow-md border border-blue-100">

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    email: e.target.value
                  })
                }
                value={resumeData.email}
                id="standard-basic"
                label="Email"
                variant="standard"
              />

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    phone: e.target.value
                  })
                }
                value={resumeData.phone}
                id="standard-basic"
                label="Phone Number"
                variant="standard"
              />

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    github: e.target.value
                  })
                }
                value={resumeData.github}
                id="standard-basic"
                label="GitHub Profile Link"
                variant="standard"
              />

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    linkedin: e.target.value
                  })
                }
                value={resumeData.linkedin}
                id="standard-basic"
                label="LinkedIn Profile Link"
                variant="standard"
              />

            </div>

          </div>
        )

      case 2:
        return (

          <div>

            <h3 className="text-3xl font-bold text-[#1d3ea6] mb-8">
              Education Details
            </h3>

            <div className="flex flex-col gap-8 bg-white p-8 rounded-[30px] shadow-md border border-blue-100">

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    degree: e.target.value
                  })
                }
                value={resumeData.degree}
                id="standard-basic"
                label="Degree"
                variant="standard"
              />

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    university: e.target.value
                  })
                }
                value={resumeData.university}
                id="standard-basic"
                label="University"
                variant="standard"
              />

              <TextField
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    passOut: e.target.value
                  })
                }
                value={resumeData.passOut}
                id="standard-basic"
                label="Year of Passout"
                variant="standard"
              />

            </div>

          </div>
        )

      case 3:
        return (

          <div className="bg-white rounded-[30px] shadow-md border border-blue-100 p-10 text-center">

            <div className="w-24 h-24 mx-auto rounded-3xl bg-blue-100 flex items-center justify-center text-5xl mb-8">
              ✨
            </div>

            <p className="text-xl text-gray-600 leading-10">

              Our AI will generate Skills & Summary according to your job role.
              Click the

              <b className="text-[#1d3ea6]">
                {" "}Generate AI Skills & Summary{" "}
              </b>

              button to Proceed.

            </p>

          </div>
        )

      default:
        return null;
    }
  }







  // Generate Summary and Skills
  const generateAI = () => {
    setResumeData({
      ...resumeData, skills: jobSkills[resumeData.job],
      summary: summaries[resumeData.job]
    })

    handleNext()
  }

  //addResume
  const handleAddResume = async () => {

    // same name as resume data in form.jsx
    const { fullname, location, job, email, phone, github, linkedin, degree, university, passOut, skills, summary } = resumeData

    if (fullname && location && job && email && phone && github && linkedin && degree && university && passOut && skills.length > 0 && summary) {

      const result = await addResumeAPI(resumeData)
      console.log(result)

      if (result.status == 201) {
        Swal.fire({
          title: "Resume Created Successfully",
          icon: "success",
          draggable: true
        });

        setFinish(true)

        setResumeId(result.data.id)


      }
      else {
        console.log(result);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else {
      Swal.fire({
  title: "Something is Missing",
  text: "Please fill form completely",
  icon: "question"
});
    }
  }



  return (
    <div>

      <Box
        className="w-full bg-white rounded-[35px] shadow-xl border border-blue-100 p-8"
      >

        <Stepper
          activeStep={activeStep}
          className="mb-10"
        >

          {steps.map((label, index) => {

            const stepProps = {};
            const labelProps = {};


            return (



              <Step
                className='flex flex-col items-center justify-center my-4 mx-auto'
                key={label}
                {...stepProps}
              >

                <StepLabel
                  className='flex flex-col items-center text-center'
                  {...labelProps}
                >

                  <span className="text-[#1d3ea6] font-semibold text-base tracking-wide">
                    {label}
                  </span>

                </StepLabel>

              </Step>
            );
          })}

        </Stepper>

        {
          activeStep === steps.length ? (

            <React.Fragment>

              <Typography
                className="mt-12 mb-5 text-center text-2xl font-bold text-[#1d3ea6]"
              >

                <span className='font-bold mt-12'> Everything is filled in — your resume is ready.</span>

              </Typography>

              <Box
                className="flex flex-row pt-5"
              >

                <Box
                  className="flex-1"
                />

                <Button
                  onClick={handleAddResume}
                  className="!bg-gradient-to-r !from-[#2343c4] !to-[#11a8ff] !text-white !px-8 !py-3 !rounded-xl !font-semibold hover:!scale-105 duration-300"
                >

                  Finish

                </Button>

              </Box>

            </React.Fragment>

          ) : (

            <React.Fragment>


              <Typography
                className="flex items-center justify-center my-3 text-2xl font-bold text-[#1d3ea6] tracking-wide w-[20%] bg-blue-50 py-2 rounded-2xl shadow-sm border border-blue-100"
              >

                Step {activeStep + 1}

              </Typography>

              <Box
                className="bg-[#eef5fb] rounded-[25px] p-6 border border-blue-100 mt-5"
              >

                {
                  renderStep(activeStep) //call renderStep Fn
                }

              </Box>

              <Box
                className="flex flex-row items-center pt-8"
              >

                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="!border !border-[#2343c4] !text-[#2343c4] !px-6 !py-2 !rounded-xl hover:!bg-blue-50"
                >

                  Back

                </Button>

                <Box className="flex-1" />

                {
                  activeStep === steps.length - 1 ?

                    <Button
                      onClick={generateAI}
                      className="!bg-gradient-to-r !from-[#2343c4] !to-[#11a8ff] !text-white !px-8 !py-3 !rounded-xl !font-semibold hover:!scale-105 duration-300"
                    >

                      Generate AI Skills & Summary

                    </Button>

                    :

                    <Button
                      onClick={handleNext}
                      className="!bg-gradient-to-r !from-[#2343c4] !to-[#11a8ff] !text-white !px-8 !py-3 !rounded-xl !font-semibold hover:!scale-105 duration-300"
                    >

                      Next

                    </Button>
                }

              </Box>

            </React.Fragment>
          )
        }

      </Box>
    </div>
  )
}

export default Steps
