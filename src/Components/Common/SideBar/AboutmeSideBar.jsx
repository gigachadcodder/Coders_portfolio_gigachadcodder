import React from 'react'
import TerminalIcon from '../../../assets/Logos/TerminalIcon'
import LightBulb from '../../../assets/Logos/LightBulb'
import GameIcon from '../../../assets/Logos/GameIcon'

const AboutmeSideBar = () => {
  return (
    <div className='fixed w-[14rem] h-[84.2%] flex flex-row '>
        <div className='w-[20%] flex flex-col items-center gap-[1rem] py-2 border border-NavBarBorder'>
          <TerminalIcon />
          <LightBulb/>
          <GameIcon/>
        </div>  
        <div className='w-[80%] border border-NavBarBorder'>
          <div className='p-1 hover:text-white'>personal-info</div>
          <div className='p-1'>contacts</div>

        </div>
    </div>
  )
}

export default AboutmeSideBar
