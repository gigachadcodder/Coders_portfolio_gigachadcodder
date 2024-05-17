import React from 'react'
import ProjectsSideBar from '../Components/Common/SideBar/ProjectsSideBar'
import ProjectsSection from '../Components/Common/Section/ProjectsSection'

const Projects = () => {
  return (
    <div className='w-full h-[85vh] lg:flex lg:flex-row '>
      <ProjectsSideBar/>
      <ProjectsSection/>
    </div>
  )
}

export default Projects
