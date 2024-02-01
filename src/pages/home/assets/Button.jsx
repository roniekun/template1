import React from 'react';
import Gmail from '../../../assets/Gmail';
import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import MessageIcon from './svg/send-1.svg?react'

const Button = () => {
  const { user } = useContext(DataContext)

  const handleClick = () => {
    Gmail(user)
  }
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center primary-font uppercase text-xs gap-2  hover:scale-105 transition transform text-black active:bg-green-600 focus:outline-none hover:shadow-lg hover:bg-green-400 focus:ring  focus:ring-offset-1 font-medium  focus:ring-gray-300 border border-gray-900 rounded-md py-2 px-5">
    <MessageIcon className='w-6'/>  Send Message
    </button>
  );
}

export default Button;
