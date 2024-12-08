import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { PrinterData } from '../../types';
import AvailabilityIndicator from './AvailabilityIndicator';

const PrinterDetails: React.FC<{ printer: PrinterData }> = ({ printer }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <FaUser className="text-lg" />
      <span>{printer.printerid}</span>
    </div>
    <div className="flex items-center space-x-2">
      <IoHome className="text-lg" />
      <span>Tầng {printer.location.floor}-{printer.location.building}</span>
    </div>
    <AvailabilityIndicator />
  </div>
);

export default PrinterDetails;
