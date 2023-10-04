import React from 'react'
import { NavLink } from "react-router-dom";


function Resume2() {
  return (
    <>
    
    <div className='md:flex md:px-8 gap-10 md:mt-10  '>
        <div className='text-white'>
            <h1 className='text-white font-[700] text-2xl px-4 mt-6'>Title</h1>
            <p className='px-4'>About Me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectet</p>
            <h1 className='text-white font-[700] text-2xl px-4 mt-6'>Title</h1>
            <p className='px-4'>About Me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectet</p>
            <h1 className='text-white font-[700] text-2xl px-4 mt-6'>Title</h1>
            <p className='px-4'>About Me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectet</p>
            <h1 className='text-white font-[700] text-2xl px-4 mt-6'>Title</h1>
            <p className='px-4'>About Me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectet</p>
        </div>
        <div className='text-white'>
            <h1 className='text-white font-[700] text-2xl px-4 mt-6'>Title</h1>
            <p className='px-4'>About Me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectet</p>
            <h1 className='text-white font-[700] text-2xl px-4 mt-6'>Title</h1>
            <p className='px-4'>About Me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectet</p>
            <h1 className='text-white font-[700] text-2xl px-4 mt-6'>Title</h1>
            <p className='px-4'>About Me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectet</p>
            <h1 className='text-white font-[700] text-2xl px-4 mt-6'>Title</h1>
            <p className='px-4'>About Me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectet</p>
        </div>
        

        <NavLink to="/project" >
            <button className='border-[2px] border-white font-[900] text-white px-6 py-4 rounded-[2rem] mt-8 animate-bounce hover:bg-white hover:text-black md:h-[600px] '>Project</button>

                </NavLink>
    </div>
    
    </>
  )
}

export default Resume2