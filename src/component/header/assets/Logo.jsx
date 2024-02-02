import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'

const Logo = () => {
  const { isToggleMenu } = useContext(DataContext)
  return (
    <>
        {!isToggleMenu && 
        <h2 className='bg-blend-difference text-lg primary-font uppercase transition duration-500 text-black text-left  font-semibold absolute left-[5vw] select-none'>
        roniecode</h2>}
    </>
  )
}

export default Logo