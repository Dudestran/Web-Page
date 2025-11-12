import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Donate from './Donate';

const Nav = () => {
  const navigate= useNavigate();
  const[open, setOpen]= useState(false);


  const navhandler = (textType) => {
    if (textType === 'HOME') {
      navigate('/'); 
    }
    if (textType === 'CONTACT') {
      navigate('/contact'); 
    }
    if (textType === 'DONATE') {
      setOpen(true);
    }
  };

  return (
    <div className='bg-stone-200 h-20 w-full rounded-sm flex items-center '>
        <img class="m-10 h-20 w-25"src="./logo3.jpg" ></img>
 
      <div onClick={()=> navhandler('HOME')} className='cursor-pointer m-10 h-8 w-400 font-bold bg-stone-200 rounded text-xl'>HOME</div>
      <div onClick={()=> navhandler('CONTACT')} className='cursor-pointer m-10 h-8 w-400 font-bold  rounded text-xl'>CONTACT</div>
      <div className=' m-150 h-15 w-40 rounded-xl cursor-pointer bg-cyan-200 flex items-center justify-center'>
        <div onClick={()=> navhandler('DONATE')} class="text-white font-bold text-xl">DONATE</div>
      </div>
      <Donate open={open} setOpen={setOpen} />
    </div>
  )
}

export default Nav
