import React from 'react';
import printersData from '../../data/printers';
import Header from './components/Header';
import PrinterCard from './components/PrinterCard/PrinterCard';
import Pagination from './components/Pagination';
import { v4 as uuidv4 } from 'uuid';

const Printers: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const printersPerPage = 8;
  const totalPages = Math.ceil(printersData.length / printersPerPage);
  console.log(totalPages);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get current printers
  const indexOfLastPrinter = currentPage * printersPerPage;
  const indexOfFirstPrinter = indexOfLastPrinter - printersPerPage;
  const currentPrinters = printersData.slice(indexOfFirstPrinter, indexOfLastPrinter);

  return (
    <div className="h-screen bg-gradient-to-r from-[#F0F4F7] to-[#FCCBCE] w-full flex flex-col">
      <div className="flex-1 p-8 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          <Header />

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentPrinters.map((printer) => (
                <PrinterCard key={uuidv4()} printer={printer} />
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Printers;