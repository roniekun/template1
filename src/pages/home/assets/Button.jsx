import React from 'react'

const Button = () => {

    const handleClick = () => {
    alert('clicked')
  }
  return (
    <button
    onClick={handleClick}
     className="uppercase text-xs hover:bg-sky-900 hover:-translate-y-0.5  transition transform text-black active:bg-green-500 focus:outline-none focus:ring  focus:ring-offset-1  focus:ring-gray-300 hover:text-gray-50 border-2 border-slate-700 rounded-xl py-2 px-5">
    Send Message
    </button>
  )
}

export default Button