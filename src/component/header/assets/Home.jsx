import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'
import BackIcon from './svg/corner-up-left.svg?react';

const Home = () => {
    const navigate = useNavigate()
    const { setToggleMenu } = useContext(DataContext)

    const handleClick = () =>{
        navigate('/')
        setToggleMenu(false)
    }
  return (
    <button className='absolute left-5 text-[12px] text-black uppercase z-10 flex gap-1 items-center justify-center rounded-lg border border-gray-900 p-1 px-2'
    onClick={handleClick}>
   <BackIcon className='w-5'/>
   return home
   </button>
  )
}

export default Home