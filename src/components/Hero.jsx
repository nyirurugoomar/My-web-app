import React from 'react'
import {AiFillLinkedin,AiFillGithub,AiFillTwitterCircle,AiFillBehanceCircle} from 'react-icons/ai'
import Jump from 'react-reveal/Jump';
import { NavLink } from "react-router-dom";



function Hero() {
  return (
    <>
      <div className='h-screen sm:w-full sm:py-2'>
      
        <div className='grid grid-row-2 gap-4 mt-40'>
            <div className=' text-center'>

                <h1 className='  text-white text-[5rem]  font-[700]'>Hi,I’m Omar</h1>
                <h1 className='text-white md:text-[3rem] mb-8'><span className='md:text-[4rem]'>[</span>Frontend Developer<span className='md:text-[4rem]'>]</span></h1>
                <Jump>
                    <p className='text-white md:mx-40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectetur sapien, nec consequat nibh maximus non. Nullam id massa a lectus ullamcorper rutrum vitae vitae risus. Duis gravida lectus eget congue ornare. In facilisis consequat neque id congue.</p>
                    </Jump>
                <div className='ml-[75rem] mt-[-20rem] md:block hidden'>
                
                <div className='text-white my-8    '>
                    <AiFillLinkedin size={40} className='rounded-[6rem]  '/>
                </div>
                <div className='text-white my-8   '>
                    <AiFillGithub size={40}/>
                </div>
                <div className='text-white my-8   '>
                    <AiFillTwitterCircle size={40}/>
                </div>
                <div className='text-white my-8   '>
                    <AiFillBehanceCircle size={40}/>
                </div>
            </div>
            <NavLink to="/aboutme" >
            <button className='border-[2px] border-white text-white px-6 py-4 rounded-[2rem] mt-8 animate-bounce hover:bg-white hover:text-black '>About Me</button>

                </NavLink>
            </div>

         
        </div>
         
       
      </div>
    </>
  )
}

export default Hero