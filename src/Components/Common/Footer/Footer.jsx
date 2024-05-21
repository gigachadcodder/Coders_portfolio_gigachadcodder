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
    <div className=' w-full h-[50px] flex flex-row sticky bottom-0 left-0 border border-NavBarBorder justify-between'>
      <div className='flex flex-row'>
      <SingleTab title={"find me in:"} />
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
