import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'

const Home = () => {
    const navigate = useNavigate()
    const { setToggleMenu } = useContext(DataContext)

    const handleClick = () =>{
        navigate('/')
        setToggleMenu(false)
    }
  return (
    <button className='absolute left-5 text-[14px] text-black underline z-10 uppercase'
    onClick={handleClick}
 >
    back to home</button>
  )
}

export default Home