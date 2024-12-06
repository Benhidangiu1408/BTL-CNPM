//import React,
import { useState } from "react";
import "./PrintHistory.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { FiSliders } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import printingfiles from "@/data/printingfiles";

type PrintData = {
  name: string;
  printdate: string;
  filename: string;
  properties: {
    size: string;
    side: number;
    pagenum: number;
    printnum: number;
  };
  printerid: string;
};

export default function PrintHistory() {
  const navigate = useNavigate();

  const [printData, setPrintData] = useState<PrintData[]>(printingfiles);

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

  type SortKey =
    | keyof PrintData
    | `properties.${keyof PrintData["properties"]}`;
  const handleSort = (key: SortKey) => {
    const direction =
      sortConfig?.key === key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";

    const sortedData = [...printData].sort((a, b) => {
      let valueA: any;
      let valueB: any;

      if (key.startsWith("properties.")) {
        const subKey = key.split(".")[1] as keyof PrintData["properties"];
        valueA = a.properties[subKey];
        valueB = b.properties[subKey];
      } else {
        if (key === "printdate") {
          valueA = new Date(a[key].split("/").reverse().join("/"));
          valueB = new Date(b[key].split("/").reverse().join("/"));
        } else {
          valueA = a[key];
          valueB = b[key];
        }
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return direction === "asc"
          ? valueA.localeCompare(valueB, "vi", { sensitivity: "base" })
          : valueB.localeCompare(valueA, "vi", { sensitivity: "base" });
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return direction === "asc" ? valueA - valueB : valueB - valueA;
      }

      if (valueA instanceof Date && valueB instanceof Date) {
        return direction === "asc"
          ? valueA.getTime() - valueB.getTime()
          : valueB.getTime() - valueA.getTime();
      }

      if (valueA < valueB) return direction === "asc" ? -1 : 1;
      if (valueA > valueB) return direction === "asc" ? 1 : -1;
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
              key={file.filename}
              className={
                (index + (currentPage - 1) * itemsPerPage) % 2 === 0
                  ? "even"
                  : "odd"
              }
            >
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{file.name}</td>
              <td>{file.filename}</td>
              <td>{file.printerid}</td>
              <td>{file.properties.printnum}</td>
              <td>{file.properties.size}</td>
              <td>{file.properties.side}</td>
              <td>{file.properties.pagenum}</td>
              <td>{file.printdate}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân chia trang */}
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

      {/* Tạo bảng */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Chọn tiêu chí sắp xếp</h3>
            <ul>
              <li onClick={() => handleSort("name")}>Tên người in</li>
              <li onClick={() => handleSort("filename")}>Tên file</li>
              <li onClick={() => handleSort("printerid")}>ID Máy in</li>
              <li onClick={() => handleSort("properties.printnum")}>
                Số lượng
              </li>
              <li onClick={() => handleSort("properties.size")}>Định dạng</li>
              <li onClick={() => handleSort("properties.side")}>Số mặt in</li>
              <li onClick={() => handleSort("properties.pagenum")}>Trang in</li>
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
