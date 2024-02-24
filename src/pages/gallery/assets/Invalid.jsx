import React from 'react'
import { Link } from 'react-router-dom'

const Invalid = () => {
  return (
    <div className='text-2xl flex justify-center items-center flex-col gap-1'>
        Invalid input
        <Link to='/' className='underline'>Go back</Link>
    </div>
  )
}

export default Invalid