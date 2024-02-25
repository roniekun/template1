import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const Close = () => {
    const { setToggleMenu } = useContext(DataContext)
  return (
            <button
            onClick={()=>setToggleMenu(false)}
            className='group  cursor-pointer brightness-90 hover:brightness-100 text-gray-100 
            place-items-center flex w-fit  px-5 py-2 rounded-2xl'>
            
            <span className='text-base'>Close</span> 
            <IoCloseSharp className='fill-gray-100 w-7 h-7 relative group-hover:brightness-100'/>
            </button> 
  )
}

export default Close