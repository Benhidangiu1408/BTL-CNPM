import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import the CSS file
import HCMUTBG from "./HCMUT_bg.png";
import logo from "./hcmut_logo.png";


const HomePage = () => {
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = HCMUTBG;
    img.onload = () => {
      setImgHeight(window.innerHeight);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <button className="logo">
          <div className="text-5xl font-bold">HCMUT</div>
          <img src={logo} alt="" style={{ width: "70px", height: "70px" }} />
        </button>
        <div className="buttons">
          <button className="button">
            <div className="text-xl font-bold">Hỗ trợ</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-[30px] ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
          </button>

          <button className="button">
            <div className="text-xl font-bold">
              <Link to="/signin">Đăng nhập</Link>
              {/* Đăng nhập */}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-[30px] ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </header>

      <main className="main">
        <div
          className="background"
          style={{
            backgroundImage: `url(${HCMUTBG})`, // Dynamic image
            height: imgHeight ? `${imgHeight}px` : "auto", // Dynamic height
            maxHeight: "80vh", // Set maximum height
            backgroundSize: "cover", // Adjust background size
            backgroundRepeat: "no-repeat", // Prevent background from repeating
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div className="overlay" />

          <div className="content">
            <div className="text">
              <div className="text-6xl font-extrabold">
                Smart Printing Service
              </div>
              <div className="text-5xl font-extrabold">
                Fast - Affordable - Convenient
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-[100px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="info">
          <div className="text-1xl font-bold">
            <div>Tổ kỹ thuật P.ĐT / Technician</div>
            <div>Email : ddthu@hcmut.edu.vn</div>
            <div>ĐT (Tel.) : (84-8) 38647256 - 5258</div>
          </div>
        </div>
        <div>
          <button>
            <div className="text-xl font-bold">Đăng nhập để in tài liệu</div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
