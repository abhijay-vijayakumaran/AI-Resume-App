import './App.css'

// Imported JSX Components & Pages to APP

import Footer from './Components/Footer'
import Header from './Components/Header'

import LandingPage from './Pages/LandingPage'
import Resume from './Pages/Resume'
import Form from './Pages/Form'
import History from './Pages/History'
import Pnf from './Pages/Pnf'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="" element={<LandingPage />} />
        <Route path="resume-generator" element={<Resume />} />
        <Route path="form" element={<Form />} />
        <Route path="history" element={<History />} />

        {/* Requesting invalid URL redirecting to Pnf */}
        <Route path="/*" element={<Pnf />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
