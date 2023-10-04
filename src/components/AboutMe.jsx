import React from 'react'
import profile from '../assets/profile.png'
import Resume2 from './Resume2'

function AboutMe() {
  return (
    <>
    <div className=''>
    <p className='text-white ml-8 text-2xl'>Home<span>></span><button>About</button></p>
       <h1 className='text-white text-[10rem] md:block hidden ml-8'>A<span className='md:text-[7rem]'>bout</span>  M<span className='md:text-[7rem]'>e</span></h1>   
       <div className='md:flex gap-10 px-8 mt-10 '>

        <div className=''>
            <img className='md:w-[600px] md:h-[350px]' src={profile} alt="" />
        </div>
        <div className='mt-14'>
            <h1 className='text-white font-[700] text-3xl'>About Me</h1>
            <p className='text-white mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectetur sapien, nec consequat nibh maximus non. Nullam id massa a lectus ullamcorpe</p>
            <h1 className='text-white font-[700] text-3xl md:text-center mt-8'>Skills</h1>
            <div className='md:flex gap-10  md:mx-20 mt-4 '>
                  <h1 className='text-white md:border-[1px] px-4 py-2 rounded-[2rem] mt-4'>HTML/CSS</h1>
                  <h1 className='text-white md:border-[1px] px-4 py-2 rounded-[2rem] mt-4'>JAVASCRIPT</h1>
                  <h1 className='text-white md:border-[1px] px-4 py-2 rounded-[2rem] mt-4'>REACTJS</h1>
                  <h1 className='text-white md:border-[1px] px-4 py-2 rounded-[2rem] mt-4'>NEXTJS</h1>
                  <h1 className='text-white md:border-[1px] px-4 py-2 rounded-[2rem] mt-4'>WORDPRESS</h1>
            </div>
            <div className='md:flex gap-10  md:mx-20 mt-4'>
                  <h1 className='text-white md:border-[1px] px-4 py-2 rounded-[2rem] mt-4'>FLUTTER</h1>           
                  <h1 className='text-white md:border-[1px] px-4 py-2 rounded-[2rem] mt-4'>TAILWINDCSS</h1>
                  <h1 className='text-white md:border-[1px] px-4 py-2 rounded-[2rem] mt-4'>UI/UX</h1>
                  
            </div>
        </div>
        

       </div>

       <div className=' mt-20 mb-40'>
          <h1 className='text-white text-center font-[700] text-3xl'>Experience</h1>

          <Resume2/>
          
       </div>
    </div>
    
    </>
  )
}

export default AboutMe