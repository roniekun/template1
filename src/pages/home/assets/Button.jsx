import React from 'react';
import Gmail from '../../../assets/Gmail';
import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const Button = () => {
  const { user } = useContext(DataContext)

  const handleClick = () => {
    Gmail(user)
  }
  return (
    <button
      onClick={handleClick}
      className="uppercase text-xs hover:bg-sky-900 transition transform text-black active:bg-green-500 focus:outline-none focus:ring  focus:ring-offset-1  focus:ring-gray-300 hover:text-gray-50 border border-gray-900 rounded-md py-2 px-5">
      Send Message
    </button>
  );
}

export default Button;
