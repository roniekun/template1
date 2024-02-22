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
      className="group flex items-center justify-center primary-font text-base gap-2 font-base transition
       transform text-black hover:text-white hover:bg-blue-800 focus:outline-none hover:shadow-lg focus:ring my-5
         focus:ring-offset-1 focus:ring-gray-300 border border-gray-900 hover:border-opacity-0 py-5 px-10">
        Get in touch
    </button>
  );
}

export default Button;
