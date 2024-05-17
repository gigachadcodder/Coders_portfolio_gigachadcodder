import React from 'react'
import CloseIcon from '../../../assets/Buttons/CloseIcon'
import Card from '../Card/Card'

const ProjectsSection = () => {
  return (
    <div className='w-full h-[85vh]'>
        <div className='w-full h-[2.65rem] border border-NavBarBorder border-l-0 hidden lg:flex'>
            <div className='h-full w-[20%] p-2 px-[1rem] border border-NavBarBorder border-t-0 border-b-0 border-l-0 flex flex-row items-center justify-between' > React <CloseIcon/> </div>
        </div>
        <div className=' flex flex-wrap w-[85vw]  justify-center items-center gap-10 overflow-x-scroll'>
            
            <Card/>
            <Card />
              <Card />
            <Card />
            <Card />
            <Card />
              <Card />
            <Card />
        </div>
    </div>
  )
}

export default ProjectsSection
