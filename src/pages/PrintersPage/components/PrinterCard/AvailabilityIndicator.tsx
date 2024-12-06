import React from 'react';

const AvailabilityIndicator: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className={`w-4 h-4 rounded-full ${Math.random() > 0.3 ? 'bg-green-500' : 'bg-red-500'}`} />
    <span>Có sẵn</span>
  </div>
);

export default AvailabilityIndicator;
