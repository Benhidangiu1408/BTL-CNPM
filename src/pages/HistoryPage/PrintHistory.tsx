//import React,
import { useState } from "react";
import "./PrintHistory.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { FiSliders } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type PrintData = {
  id: number;
  name: string;
  filename: string;
  size: string;
  printnum: number;
  printdate: string;
  pagenum: number;
  side: string;
  printerID: string;
};

export default function PrintHistory() {
  const navigate = useNavigate();

  const [printData, setPrintData] = useState<PrintData[]>([
    {
      id: 1,
      name: "Hoàng Gia Bảo",
      filename: "document1.pdf",
      printerID: "ABC-12",
      printnum: 3,
      size: "A4",
      side: "1 mặt",
      pagenum: 12,
      printdate: "15/11/2023",
    },
    {
      id: 2,
      name: "Nguyễn Minh Chi",
      filename: "file2.docx",
      printerID: "XYZ-34",
      printnum: 1,
      size: "A3",
      side: "2 mặt",
      pagenum: 7,
      printdate: "09/03/2024",
    },
    {
      id: 3,
      name: "Phan Gia Thảo",
      filename: "notes1.txt",
      printerID: "DEF-56",
      printnum: 4,
      size: "A4",
      side: "1 mặt",
      pagenum: 15,
      printdate: "22/12/2023",
    },
    {
      id: 4,
      name: "Phạm Minh Dương",
      filename: "report3.pdf",
      printerID: "GHI-78",
      printnum: 5,
      size: "A4",
      side: "2 mặt",
      pagenum: 19,
      printdate: "28/02/2024",
    },
    {
      id: 5,
      name: "Phan Thanh Chi",
      filename: "file4.docx",
      printerID: "JKL-90",
      printnum: 2,
      size: "A3",
      side: "1 mặt",
      pagenum: 13,
      printdate: "10/09/2023",
    },
    {
      id: 6,
      name: "Đặng Văn Lan",
      filename: "assignment5.pdf",
      printerID: "MNO-12",
      printnum: 3,
      size: "A4",
      side: "2 mặt",
      pagenum: 8,
      printdate: "14/01/2024",
    },
    {
      id: 7,
      name: "Phạm Thành Huy",
      filename: "document6.docx",
      printerID: "PQR-34",
      printnum: 4,
      size: "A4",
      side: "1 mặt",
      pagenum: 10,
      printdate: "04/10/2023",
    },
    {
      id: 8,
      name: "Hoàng Thanh Huy",
      filename: "study_notes7.txt",
      printerID: "STU-56",
      printnum: 2,
      size: "A3",
      side: "2 mặt",
      pagenum: 6,
      printdate: "18/02/2024",
    },
    {
      id: 9,
      name: "Đặng Thành Nhung",
      filename: "research8.pdf",
      printerID: "VWX-78",
      printnum: 1,
      size: "A4",
      side: "1 mặt",
      pagenum: 14,
      printdate: "01/12/2023",
    },
    {
      id: 10,
      name: "Hoàng Văn An",
      filename: "paper9.docx",
      printerID: "YZA-90",
      printnum: 5,
      size: "A4",
      side: "2 mặt",
      pagenum: 16,
      printdate: "17/03/2024",
    },
    {
      id: 11,
      name: "Phan Hồng Mai",
      filename: "project10.pdf",
      printerID: "BCD-12",
      printnum: 3,
      size: "A4",
      side: "1 mặt",
      pagenum: 12,
      printdate: "20/08/2023",
    },
    {
      id: 12,
      name: "Phan Hồng Bảo",
      filename: "file11.docx",
      printerID: "EFG-34",
      printnum: 2,
      size: "A3",
      side: "2 mặt",
      pagenum: 9,
      printdate: "02/01/2024",
    },
    {
      id: 13,
      name: "Trần Văn An",
      filename: "notes12.txt",
      printerID: "HIJ-56",
      printnum: 4,
      size: "A4",
      side: "1 mặt",
      pagenum: 20,
      printdate: "12/10/2023",
    },
    {
      id: 14,
      name: "Đặng Văn Quân",
      filename: "report13.pdf",
      printerID: "KLM-78",
      printnum: 3,
      size: "A4",
      side: "2 mặt",
      pagenum: 10,
      printdate: "25/11/2023",
    },
    {
      id: 15,
      name: "Trần Gia Huy",
      filename: "article14.docx",
      printerID: "NOP-90",
      printnum: 2,
      size: "A3",
      side: "1 mặt",
      pagenum: 17,
      printdate: "02/03/2024",
    },
    {
      id: 16,
      name: "Phan Thị Chi",
      filename: "file15.txt",
      printerID: "QRS-12",
      printnum: 4,
      size: "A4",
      side: "1 mặt",
      pagenum: 8,
      printdate: "14/12/2023",
    },
    {
      id: 17,
      name: "Phan Thành Quân",
      filename: "document16.pdf",
      printerID: "TUV-34",
      printnum: 1,
      size: "A3",
      side: "2 mặt",
      pagenum: 5,
      printdate: "23/01/2024",
    },
    {
      id: 18,
      name: "Phan Thị Quân",
      filename: "work17.docx",
      printerID: "WXY-56",
      printnum: 2,
      size: "A4",
      side: "1 mặt",
      pagenum: 19,
      printdate: "30/10/2023",
    },
    {
      id: 19,
      name: "Trần Thanh Mai",
      filename: "project18.pdf",
      printerID: "ZAB-78",
      printnum: 3,
      size: "A4",
      side: "2 mặt",
      pagenum: 6,
      printdate: "06/02/2024",
    },
    {
      id: 20,
      name: "Đặng Quốc Bảo",
      filename: "document19.docx",
      printerID: "CDE-90",
      printnum: 2,
      size: "A3",
      side: "1 mặt",
      pagenum: 11,
      printdate: "03/11/2023",
    },
  ]);

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(printData.length / itemsPerPage);

  const paginate = (data: PrintData[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = paginate(printData, currentPage);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof PrintData;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof PrintData) => {
    const direction =
      sortConfig?.key === key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";
    const sortedData = [...printData].sort((a, b) => {
      if (key === "printdate") {
        const dateA = a.printdate.split("/").reverse().join("-");
        const dateB = b.printdate.split("/").reverse().join("-");
        return direction === "asc"
          ? new Date(dateA).getTime() - new Date(dateB).getTime()
          : new Date(dateB).getTime() - new Date(dateA).getTime();
      }
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setPrintData(sortedData);
    setSortConfig({ key, direction });
    setIsModalOpen(false);
  };

  return (
    <div className="history-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <IoArrowBackCircle />
      </button>
      <h1>LỊCH SỬ IN</h1>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên người in</th>
            <th>Tên file</th>
            <th>ID Máy in</th>
            <th>Số lượng</th>
            <th>Định dạng</th>
            <th>Số mặt in</th>
            <th>Trang in</th>
            <th>Thời gian</th>
            <th>
              <button className="arrange" onClick={() => setIsModalOpen(true)}>
                <FiSliders />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((file, index) => (
            <tr
              key={file.id}
              className={
                (index + (currentPage - 1) * itemsPerPage) % 2 === 0
                  ? "even"
                  : "odd"
              }
            >
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{file.name}</td>
              <td>{file.filename}</td>
              <td>{file.printerID}</td>
              <td>{file.printnum}</td>
              <td>{file.size}</td>
              <td>{file.side}</td>
              <td>{file.pagenum}</td>
              <td>{file.printdate}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang */}
      <div className="pagination">
        <button
          className="page-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-button ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="page-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>

      {/* Mở bảng */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Chọn tiêu chí sắp xếp</h3>
            <ul>
              <li onClick={() => handleSort("name")}>Tên người in</li>
              <li onClick={() => handleSort("filename")}>Tên file</li>
              <li onClick={() => handleSort("printerID")}>ID Máy in</li>
              <li onClick={() => handleSort("printnum")}>Số lượng</li>
              <li onClick={() => handleSort("size")}>Định dạng</li>
              <li onClick={() => handleSort("side")}>Số mặt in</li>
              <li onClick={() => handleSort("pagenum")}>Trang in</li>
              <li onClick={() => handleSort("printdate")}>Thời gian</li>
            </ul>
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
