import React from 'react'
import Twitter from '../../../assets/Logos/Twitter';
import Facebook from '../../../assets/Logos/Facebook';
import Github from '../../../assets/Logos/Github';
import { useNavigate } from 'react-router-dom';



const Footer = () => {

  const navigate = useNavigate();

  const handleNavigation = () =>{
    const githubLink = "https://github.com/gigachadcodder";
    navigate(githubLink);
  }

  return (
    <div className=' w-full h-[7%] lg:h-[7%] flex flex-row fixed bottom-0 left-0 border border-NavBarBorder justify-between'>
      <div className='flex flex-row'>
        <div className='hidden  lg:flex'>
      <SingleTab className="hidden lg:flex" title={"find me in:"} />
        </div>
      <SingleTab logo={<Twitter/>} />
      <SingleTab logo={<Facebook/>}/>
      </div>
      <SingleTab title={"@gigchadcodder"} action={handleNavigation} logo={<Github/>} />
    </div>
  )
}


const SingleTab = ({title, logo, action}) => (
  <div className='border border-NavBarBorder px-3 flex flex-row gap-1 items-center justify-center cursor-pointer'
  onClick={action}>
    {title}
    {logo}
  </div>
);

export default Footer;
