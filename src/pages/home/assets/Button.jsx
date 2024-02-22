import React from 'react';
import SendGmail from '../../../assets/SendGmail';
import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import { TbSend } from "react-icons/tb";

const Button = () => {
  const { user } = useContext(DataContext)

  const handleClick = () => {
    SendGmail(user)
  }
  return (
    <button
      onClick={handleClick}
      className="group flex items-center justify-center primary-font text-base gap-2 font-base transition bg-blue-800
       transform text-gray-200 hover:text-gray-50 hover:bg-blue-800 focus:outline-none hover:shadow-lg focus:ring
         focus:ring-offset-1 focus:ring-gray-300 border border-gray-900 hover:border-opacity-0 py-5 px-10">
        Get in touch
    </button>
  );
}

export default Button;
