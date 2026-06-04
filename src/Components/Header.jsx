import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';




function Header() {

  // for Tooltip when hovering above ABOUT to show info
  const intro = 'An AI Resume Generator Website is an intelligent platform that helps users create professional, modern, and ATS-friendly resumes quickly and efficiently. By using Artificial Intelligence, the website can automatically generate skills, professional summaries, and resume content based on the user’s job role, educational background, and personal details. With an easy-to-use interface and customizable resume templates, the platform simplifies the resume-building process and helps users create impressive resumes that enhance their chances of getting hired.'



  return (
    <div>

<Box sx={{ flexGrow: 1 }}>

  <AppBar
    position="sticky"
    elevation={0}
    sx={{
      background:
        "0f172a",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(12px)",
      px: { xs: 1, md: 4 },
      py: 1,
    }}
  >
    <Toolbar className="flex justify-between">


      <div className="flex items-center gap-3">

        <div className="bg-white/10 border border-white/10 rounded-2xl p-2 backdrop-blur-md shadow-lg">
          <img
            width={"52px"}
            src="https://img.freepik.com/premium-vector/resume-flat-style-vector-icon-white-coloured-blue-circle_787461-1577.jpg"
            alt="logo" className='rounded-xl'
          />
        </div>

        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 800,
            letterSpacing: "0.5px",
          }}
        >
          <Link
            to={"/"}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
           AI Resume Builder
          </Link>
        </Typography>
      </div>


      <div className="flex items-center gap-4">

        <Tooltip title={intro} arrow>
          <Button
            variant="outlined"
            sx={{
              color: "#e0f2fe",
              borderColor: "rgba(255,255,255,0.2)",
              borderRadius: "12px",
              px: 3,
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255,255,255,0.05)",

              "&:hover": {
                borderColor: "#7dd3fc",
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            About
          </Button>
        </Tooltip>

      </div>

    </Toolbar>
  </AppBar>
</Box>



    </div>
  )
}

export default Header
