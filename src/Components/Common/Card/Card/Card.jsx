import React from 'react'
import Facebook from '../../../../assets/Logos/Facebook'

const Card = ({Title, Content, Logo, background}) => {
  return (
    <div className='w-[23.125rem] h-[19.625rem] bg-[#1E2D3D] rounded-xl relative ' >
        <div className={`h-[40%] `}>
            <img className=' object-contain h-full w-full' src="https://img.freepik.com/premium-vector/gradient-abstract-background-wallpaper-landing-page-dummy-web-page_703849-23.jpg?w=2000" alt="" />
            <div className='absolute right-2 top-2'><Facebook/> </div>
        </div>
        <div className='h-[60%] '>
            <div className='px-[2rem] py-[1rem]'>{Content}</div>
        </div>

    </div>
  )
}

export default Card
