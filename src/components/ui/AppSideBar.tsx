/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
// import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
// import { RiStickyNoteAddLine } from "react-icons/ri";
import { RiAddBoxFill } from "react-icons/ri";
import { SwitchProps } from "./AppMenuBar";
import AppSwitch from "./AppSwitch";
import { FaFileContract } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
const AppSideBar = ({ isDarkMode, handleToggle }: SwitchProps) => {
  return (
    <div className="flex flex-col  items-center border-none">
      <span className=" pt-14">
        {/* <AppSwitch isDarkMode={isDarkMode} handleToggle={handleToggle} /> */}
        <MdHome size={42} />
      </span>

      <div className="pt-6">
        <RiAddBoxFill size={32} />
      </div>
      <span className="font-semibold pt--1 pb-40">Thêm File</span>

      <div className="">{/* <RiFileCopy2Fill size={22} /> */}</div>
      <span className="font-semibold pt--10">{/* Printing History */}</span>
      <div className="pt-6"></div>

      <div className="pt-[200px]">
        <FaFileContract size={22} />
      </div>
      <span className="font-semibold pt--1">Lịch Sử</span>

      <div className="pt-10">
        <IoWalletSharp size={22} />
      </div>
      <span className="font-semibold pt--1">Thanh Toán</span>
    </div>
  );
};

export default AppSideBar;
