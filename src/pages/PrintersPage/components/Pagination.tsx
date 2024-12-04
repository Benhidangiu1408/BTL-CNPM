import React from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { PaginationProps } from '../types';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const totalPageNumbers = 3;
    
    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, 3];
    }

    if (currentPage >= totalPages - 1) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div className="flex justify-end items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="p-1 text-gray-600 hover:text-gray-800"
        disabled={currentPage === 1}
      >
        <IoChevronBack className="text-xl" />
      </button>
      
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="p-1 text-gray-600 hover:text-gray-800"
        disabled={currentPage === totalPages}
      >
        <IoChevronForward className="text-xl" />
      </button>
    </div>
  );
};

export default Pagination;
