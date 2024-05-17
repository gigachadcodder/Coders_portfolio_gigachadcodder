import React, { useState } from 'react'
import Dropdown from '../../../assets/Buttons/Dropdown'
import HTML from '../../../assets/Logos/Technology/UnFilled/HTML';

const ProjectsSideBar = () => {

    const [isOptionOpen, setIsOptionOpen] = useState(true);

    const setOpen = () => {
        setIsOptionOpen(!isOptionOpen)
    }


    return (
        <div className='lg:w-[20%] lg:h-[85vh] w-full  flex flex-col border border-NavBarBorder'>
            <div className='w-full px-[1rem] py-[0.5rem] flex flex-row items-center gap-[1rem] lg:border lg:border-NavBarBorder'>
                <div onClick={setOpen}><Dropdown isopen={isOptionOpen} /></div> <div>projects</div>
            </div>
            {isOptionOpen && (<div className='flex flex-col gap-2 transition ease-in-out duration-[0.5s] px-[1rem] py-[0.5rem]'>
                <div className={`flex flex-row gap-3 hover:text-white`}> <input type="checkbox" /> <HTML isFilled={false} /> HTML </div>
                <div className={`flex flex-row gap-3 hover:text-white`}> <input type="checkbox" /> <HTML isFilled={false} /> HTML </div>
                <div className={`flex flex-row gap-3 hover:text-white`}> <input type="checkbox" /> <HTML isFilled={false} /> HTML </div>
                <div className={`flex flex-row gap-3 hover:text-white`}> <input type="checkbox" /> <HTML isFilled={false} /> HTML </div>
            </div>)}
        </div> 
    )
}

export default ProjectsSideBar