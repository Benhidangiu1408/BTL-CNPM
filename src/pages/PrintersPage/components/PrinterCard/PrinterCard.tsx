import React from 'react';
import { IoMdPrint } from "react-icons/io";
import { PrinterData } from '../../types';
import PrinterDetails from './PrinterDetails';

const PrinterCard: React.FC<{ printer: PrinterData }> = ({ printer }) => {
  return (
    <div className="bg-[#FCF7FC] rounded-lg shadow-md flex flex-col w-64">
      <div className="p-4 flex-grow">
        <div className="text-center mb-2">
          <div className="flex items-center justify-center space-x-2">
            <IoMdPrint className="text-3xl" />
            <span className="font-medium">Máy in {printer.printerid}</span>
          </div>
        </div>
        <hr className="border-gray-500 w-full mb-2" />
        <PrinterDetails printer={printer} />
      </div>
      <button className="w-full bg-blue-500 text-white py-3 rounded-b-lg hover:bg-blue-600 transition-colors text-lg font-medium">
        Chọn
      </button>
    </div>
  );
};

export default PrinterCard;
