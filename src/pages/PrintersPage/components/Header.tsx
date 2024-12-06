import React from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex items-center mb-8">
      <button 
        onClick={handleBack}
        className="text-3xl hover:text-gray-600 transition-colors"
      >
        <IoArrowBackCircle />
      </button>
      <h1 className="text-3xl font-bold text-center flex-grow">LỰA CHỌN MÁY IN</h1>
    </div>
  );
};

export default Header;
