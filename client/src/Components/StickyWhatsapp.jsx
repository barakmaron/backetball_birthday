import React from 'react'
import { FaWhatsappSquare } from 'react-icons/fa';

const StickyWhatsapp = () => {
  return (
    <div className='fixed bottom-3 left-5 w-fit m-0'>
      <a  href='https://wa.me/972522882146'>
        <FaWhatsappSquare className="text-green-600 text-6xl"></FaWhatsappSquare>
      </a>
    </div>
  )
};

export default StickyWhatsapp;

