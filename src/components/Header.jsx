import React,{useState, useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

// import { NavLink } from "react-router-dom";
// import logo from '../assets/logo.png'

function Header() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    
    const handleNav = () =>{
        setNav(!nav);
    }

useEffect(()=>{
    const handleShadow = () =>{
        if(window.scrollY >= 90){
            setShadow(true);
        }else{
            setShadow(false);
        }
    }
    window.addEventListener('scroll', handleShadow)
},[])
  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ': 'fixed w-full h-20 z-[100]'}>
    <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16 bg-black '>
    {/* <NavLink to="/" > */}

    <h1 className='text-3xl text-white'>Logo</h1>
        {/* <img src=
        {logo}
        alt="/" 
        width='70'  
        height='70'
        
        /> */}
        {/* </NavLink> */}
    
     
      <div>
        <ul className='hidden md:flex mr-8 '>
               {/* <NavLink  to='/' > */}
                <li className='ml-10  text-[16px] tracking-wider hover:border-b-[1px] border-orange  text-white p-4 font-[400] font-Poppins '>Home</li>
                {/* </NavLink> */}
            {/* <NavLink to="/aboutus" > */}
                <li className='ml-10  text-[16px] tracking-wider hover:border-b-[1px]  border-orange text-white p-4 font-[400]'>About us</li>
            {/* </NavLink> */}
            {/* <NavLink to="/services" > */}
                <li className='ml-10  text-[16px] tracking-wider hover:border-b-[1px] border-orange text-white p-4 font-[400]'>Services</li>
                {/* </NavLink> */}
                {/* <NavLink to="/news" > */}
                <li className='ml-10  text-[16px] tracking-wider hover:border-b-[1px] border-orange text-white p-4 font-[400]'>News</li>
                {/* </NavLink> */}
                {/* <NavLink to="/productpage" > */}
                <li className='ml-10  text-[13px] tracking-wider  border-white text-white p-4 font-[400] bg-orange rounded-[6px] w-[156px] text-center cursor-pointer '>Contact us</li>
                {/* </NavLink> */}
                
        </ul>
        
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
           <AiOutlineMenu size={25} color='white'/>
        </div>
      </div> 
    </div>
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
       <div className={nav
         ? 'fixed left-0 top-0 w-full sm:w-full md:w-[45%] h-screen bg-white p-10 ease-in duration-500 ' 
         : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
        <div>
            <div className='flex w-full items-center justify-between'>
                {/* <Link href='/'> */}
                <h1 className='text-3xl'>Logo</h1>
                {/* <img src=
                 {logo}
                 alt="/" 
                 width='70'  
                 height='70'
        
                 /> */}
                {/* </Link> */}
                
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose/>
                </div>
            </div>
             <div className='border-b border-black my-4 '>
                <p className='w-[85%] md:w-[90%] py-4'>Let Us Help You To Choose Your Best</p>
             </div>
        </div>
        {/* for mobile */}
        <div className='py-2 flex flex-col'>
            <ul className='uppercase'>
                {/* <NavLink to='/'> */}
                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                {/* </NavLink> */}
                {/* <NavLink to="/aboutus"> */}
                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>About Us</li>
                {/* </NavLink> */}
                {/* <NavLink to="/services" > */}
                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Typologies</li>
                {/* </NavLink> */}
                {/* <NavLink to="/productpage" > */}
                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Financing</li>
                {/* </NavLink> */}
                {/* <NavLink to="/productpage" > */}
                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Gallery</li>
                {/* </NavLink> */}
                {/* <Link to='/#contact'> */}
                    <li onClick={()=>setNav(false)} className='py-4 text-sm bg-[#0B0961] w-20 text-center text-white rounded-xl '>Legister</li>
                 {/* </Link> */}
            </ul>
            <div className='pt-10'>
                <p className='uppercase tracking-widest text-black'>Let's Connect</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <FaFacebook/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                     <FaInstagram/>
                    </div>
                     
                </div>
            </div>
        </div>
       </div>
    </div>
</div>
  )
}

export default Header