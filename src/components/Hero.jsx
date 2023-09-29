import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'


function Hero() {
  return (
    <>
      <div className='h-screen sm:w-full sm:py-2'>
      
        <div className='grid grid-row-2 gap-4 mt-40'>
            <div className=' text-center'>
                <h1 className='  text-white text-[5rem]  font-[700]'>Hi,I’m Omar</h1>
                <h1 className='text-white md:text-[3rem]'><span className='text-[5rem]'>[</span>Frontend Developer<span className='text-[5rem]'>]</span></h1>
                <p className='text-white md:mx-40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultrices dui. Sed pulvinar iaculis commodo. Sed elementum consectetur sapien, nec consequat nibh maximus non. Nullam id massa a lectus ullamcorper rutrum vitae vitae risus. Duis gravida lectus eget congue ornare. In facilisis consequat neque id congue.</p>
                <div className='ml-[75rem] mt-[-20rem] md:block hidden'>
                <div className='text-white my-8   '>
                    <FaFacebook size={40}/>
                </div>
                <div className='text-white my-8   '>
                    <FaFacebook size={40}/>
                </div>
                <div className='text-white my-8   '>
                    <FaFacebook size={40}/>
                </div>
                <div className='text-white my-8   '>
                    <FaFacebook size={40}/>
                </div>
                <div className='text-white my-8   '>
                    <FaFacebook size={40}/>
                </div>
            </div>

            <button className='border-[2px] border-white text-white px-6 py-4 rounded-[2rem] '>About Me</button>
            </div>

         
        </div>
         
       
      </div>
    </>
  )
}

export default Hero