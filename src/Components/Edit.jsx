import React, { useEffect, useState, useRef } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import { getResumeAPI, editResumeAPI } from '../services/allAPI';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import jobType from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { resume } from 'react-dom/server';


import Swal from 'sweetalert2'



function Edit({ resumeId, setUpdateResume }) {

  const skillRef = useRef()

  const [resumeData, setResumeData] = useState({})
  console.log(resumeData);


  //Modal Style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: "80vh",
    overflowY: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    resumeId && getEditResumeDetals()
  }, { resumeId })



  const removeSkill = (skill) => {
    //remove skill from resumeData.skills
    setResumeData({ ...resumeData, skills: resumeData?.skills.filter(item => item != skill) })

  }


  const addSkill = (skill) => {
    if (skill) {
      if (resumeData?.skills?.map(item => item.toLowerCase())?.includes(skill.toLowerCase())) {
        alert("Skill already Exists")

    
      }
      else {
        setResumeData({ ...resumeData, skills: [...resumeData?.skills, skill] })
        skillRef.current.value = ""
      }
    }
    else {
      alert("Invalid Skill")
 

    }
  }


  const getEditResumeDetals = async () => {
    try {

      const result = await getResumeAPI(resumeId)
      console.log(result);
      setResumeData(result.data)

    } catch (err) {

      console.log(err);

    }
  }





  const handleUpdateResume = async () => {

    const { fullname, location, job, email, phone, github, linkedin, degree, university, passOut, skills, summary } = resumeData

    if (fullname && location && job && email && phone && github && linkedin && degree && university && passOut && skills.length > 0 && summary) {

      const result = await editResumeAPI(resumeData?.id, resumeData)
      console.log(result)

      if (result.status == 200) {

        Swal.fire({
          title: "Resume Updated!",
          icon: "success",
          draggable: true
        });
        setUpdateResume(result?.data)
        handleClose()
      }
      else {
        console.log(result);
      }
    } else {
      alert("Please fill form completely")
    }

  }


  return (
    <>

      <Button
        className='!text-[#1d3ea6] !text-3xl hover:!bg-blue-50 !rounded-xl duration-300'
        onClick={handleOpen}
      >
        <FaEdit />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box
          sx={style}
          className='custom-scrollbar bg-white rounded-lg shadow-2xl border border-blue-100 p-8 overflow-y-auto max-h-[90vh]'
        >

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className='!text-3xl !font-bold !text-[#1d3ea6] !mb-8 text-center'
          >

            Edit Details

          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >


            <div className='mb-10'>

              <h3 className='text-2xl font-bold text-[#1d3ea6] mb-6'>
                Personal Details
              </h3>

              <div className="flex flex-col gap-6 bg-[#f8fbff] p-6 rounded-3xl border border-blue-100">

                <TextField
                  value={resumeData?.fullname}
                  onChange={e =>
                    setResumeData({
                      ...resumeData,
                      fullname: e.target.value
                    })
                  }
                  id="standard-basic"
                  label="Full Name"
                  variant="standard"
                />

                <TextField
                  value={resumeData?.location}
                  onChange={e =>
                    setResumeData({
                      ...resumeData,
                      location: e.target.value
                    })
                  }
                  id="standard-basic"
                  label="Location"
                  variant="standard"
                />

                <FormControl variant="standard">

                  <InputLabel id="demo-simple-select-label">
                    Choose Job Title
                  </InputLabel>

                  <Select
                    value={resumeData?.job}
                    onChange={e =>
                      setResumeData({
                        ...resumeData,
                        job: e.target.value
                      })
                    }

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

            <div className='mb-10'>

              <h3 className='text-2xl font-bold text-[#1d3ea6] mb-6'>
                Contact Details
              </h3>

              <div className="flex flex-col gap-6 bg-[#f8fbff] p-6 rounded-3xl border border-blue-100">

                <TextField
                  onChange={e =>
                    setResumeData({
                      ...resumeData,
                      email: e.target.value
                    })
                  }
                  value={resumeData?.email}
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
                  value={resumeData?.phone}
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
                  value={resumeData?.github}
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
                  value={resumeData?.linkedin}
                  id="standard-basic"
                  label="LinkedIn Profile Link"
                  variant="standard"
                />

              </div>

            </div>

            <div className='mb-10'>

              <h3 className='text-2xl font-bold text-[#1d3ea6] mb-6'>
                Education Details
              </h3>

              <div className="flex flex-col gap-6 bg-[#f8fbff] p-6 rounded-3xl border border-blue-100">

                <TextField
                  onChange={e =>
                    setResumeData({
                      ...resumeData,
                      degree: e.target.value
                    })
                  }
                  value={resumeData?.degree}
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
                  value={resumeData?.university}
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
                  value={resumeData?.passOut}
                  id="standard-basic"
                  label="Year of Passout"
                  variant="standard"
                />

              </div>

            </div>


            <div className='mb-10'>

              <h3 className='text-2xl font-bold text-[#1d3ea6] mb-6'>
                Skills
              </h3>

              <Box sx={{ width: '100%' }}>

                <Stack spacing={3}>

                  <input
                    ref={skillRef}
                    type='text'
                    className='w-full border border-blue-200 rounded-2xl p-4 outline-none focus:border-[#1d3ea6] bg-[#f8fbff]'
                    placeholder='Add Skills'
                  />

                  <Button
                    onClick={() =>
                      addSkill(skillRef.current.value)
                    }
                    className='!bg-[#1d3ea6] !text-white !rounded-xl !px-6 !py-2 hover:!bg-[#16358c]'
                    variant='contained'
                    sx={{ maxWidth: '120px' }}
                  >

                    Add

                  </Button>

                </Stack>


                <div className='mt-8'>

                  <h5 className='text-lg font-semibold text-[#1d3ea6] mb-4'>
                    Suggestions :
                  </h5>

                  <div className="flex flex-wrap gap-3">

                    <Button variant='outlined'>
                      Userskill
                    </Button>

                  </div>

                </div>

                <div className='mt-8'>

                  <h5 className='text-lg font-semibold text-[#1d3ea6] mb-4'>
                    Added Skills :
                  </h5>

                  <div className="flex flex-wrap gap-4">

                    {
                      resumeData?.skills?.length > 0 &&
                      resumeData?.skills.map(skill => (

                        <div className='flex items-center gap-2'>

                          <span
                            key={skill}
                            className='bg-[#eef5ff] text-[#1d3ea6] border border-blue-200 px-4 py-2 rounded-xl font-medium'
                          >

                            {skill}

                          </span>

                          <Button
                            onClick={() => removeSkill(skill)}
                            className='!text-red-500 !min-w-0'
                          >

                            X

                          </Button>

                        </div>
                      ))
                    }

                  </div>

                </div>

              </Box>

            </div>


            <div className='mb-8'>

              <h3 className='text-2xl font-bold text-[#1d3ea6] mb-6'>
                Professional Summary
              </h3>

              <div className="flex flex-col gap-6 bg-[#f8fbff] p-6 rounded-3xl border border-blue-100">

                <TextField
                  onChange={e =>
                    setResumeData({
                      ...resumeData,
                      summary: e.target.value
                    })
                  }

                  value={resumeData?.summary}

                  id="standard-static"

                  label="Write a short summary of yourself"

                  multiline

                  rows={4}

                  defaultValue="Eg : I'm a passionate full-stack developer with hands-on experience in React,Node ..."

                  variant='standard'
                />

              </div>

            </div>

          </Typography>

          <Button
            onClick={handleUpdateResume}
            className='!bg-[#1d3ea6] !text-white !px-8 !py-3 !rounded-2xl !font-semibold hover:!bg-[#16358c] duration-300'
            variant='contained'
          >

            Update

          </Button>

        </Box>

      </Modal>

    </>
  )
}

export default Edit
