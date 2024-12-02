import './PrintingPage.css';
import React from 'react';


interface File {
  name: string;
  count: number;
  status: 'Pending' | 'Completed';
  code: string;
}

interface PrintingPageProps {
  files: File[];
}

const PrintingPage: React.FC<PrintingPageProps> = ({ files }) => {
  return (
    
    <div className="container">
      <h2 className="title">Printing Queue</h2>
      <div className="files-list">
        {files.map((file) => (
          <div key={file.name} className="file-item">
            <div className="file-name">{file.name}</div>
            <div className="file-details">
              <div className="file-count">{file.count} bản</div>
              <div className="file-code">{file.code}</div>
              <div className="file-status">{file.status}</div>
            </div>
            <button className="cancel-button">Hủy</button>
          </div>
        ))}
      </div>
      <button className="close-button">Đóng</button>
    </div>
  );
  
};

// Sample data
const filesData: File[] = [
  { name: 'Document 1', count: 5, status: 'Pending', code: 'ABC-123' },
  { name: 'Document 2', count: 2, status: 'Completed', code: 'XYZ-456' },
  { name: 'Document 3', count: 1, status: 'Pending', code: 'DEF-789' },
];

// Main App component
const App: React.FC = () => {
  <>
  return (
    <div>
      <PrintingPage files={filesData} />
    </div>
  );
  </>
};

export default App;