import { useState } from 'react'
import Nav from './Components/Nav'
import InternshipList from './Components/INTERNSHIPS/InternshipList'
import JobsList from './Components/EXPERIENCED_JOBS/ExperiencedJobsList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/HOME/Home'
import InternshipDetailsPage from './Components/INTERNSHIPS/InternshipDetailsPage'
import ExperiencedJobsDetails from './Components/EXPERIENCED_JOBS/ExperiencedJobsDetails'
// import style from './Styles/App.module.css'
// import Introduction from './Components/Introduction'

function App() {


  return (
    <>
      <Router>
   
    <Nav></Nav>
   

      <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='/Internships' element={<InternshipList></InternshipList>}></Route>
            <Route path='/InternshipDetailsPage/:id' element={<InternshipDetailsPage></InternshipDetailsPage>}></Route>

            <Route path='/ExperiencedJobs' element={<JobsList></JobsList>}></Route>
            <Route path='/ExperiencedJobsDetailsPage/:id' element={<ExperiencedJobsDetails/>}></Route>


            

      </Routes>        
      </Router>
    </>
  )
}

export default App
