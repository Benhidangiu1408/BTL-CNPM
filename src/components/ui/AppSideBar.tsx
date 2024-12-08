/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
// import { RiStickyNoteAddLine } from "react-icons/ri";
import { RiAddBoxFill } from "react-icons/ri";
import { SwitchProps } from "./AppMenuBar";
import AppSwitch from "./AppSwitch";
import { FaFileContract } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TbProgressCheck } from "react-icons/tb";
import { TiPrinter } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";
import useOrderStore from "@/current_user/order";
import useStudentStore from "@/current_user/user";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AppSideBar = () => {
  const { orderLogout } = useOrderStore();
  const { logout } = useStudentStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility

  const navigate = useNavigate();

  // Function to open the dialog when called
  const openDialog = () => {
    setIsDialogOpen(true); // Open the AlertDialog
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false); // Close the AlertDialog
  };

  return (
    <div className="flex flex-col  items-center border-none fixed">
      <span className=" pt-14" onClick={() => navigate("/homepage")}>
        {/* <AppSwitch isDarkMode={isDarkMode} handleToggle={handleToggle} /> */}
        <MdHome size={42} />
      </span>

      <AlertDialog open={isDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bạn có chắc chắn muốn đăng xuất không ?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeDialog}>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={()=>(logout(), orderLogout(), closeDialog(), navigate("/"))}>Đăng xuất</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* <div className="pt-6">
        <RiAddBoxFill size={35} />
      </div>
      <span className="font-semibold pt--1 pb-40">In File</span> */}

      <div className="pt-6 " onClick={() => navigate("/homepage/printing")}>
        <TbProgressCheck size={30} />
      </div>
      <span
        className="font-semibold pt--1 pl-2"
        onClick={() => navigate("/homepage/printing")}
      >
        Trạng Thái{" "}
      </span>

      <div className="">{/* <RiFileCopy2Fill size={22} /> */}</div>
      <span className="font-semibold pt--10">{/* Printing History */}</span>
      <div className="pt-6"></div>

      <div className="pt-[270px]" onClick={() => navigate("/homepage/history")}>
        <FaFileContract size={28} />
      </div>
      <span
        className="font-semibold pt--1"
        onClick={() => navigate("/homepage/history")}
      >
        Lịch Sử
      </span>

      {/* <div className="pt-10 " onClick={() => navigate("/homepage/printing")}>
        <TbProgressCheck size={30} />
      </div>
      <span
        className="font-semibold pt--1 pl-2"
        onClick={() => navigate("/homepage/printing")}
      >
        Trạng Thái{" "}
      </span> */}

      <div className="pt-10 ">
        <TiPrinter size={30} />
      </div>
      <span className="font-semibold pt--1 pl-2">Máy in </span>

      <div className="pt-10 " onClick={() => (openDialog())}>
        <TbLogout2 size={30} />
      </div>
      <span
        className="font-semibold pt--1 pl-2"
        onClick={() => (openDialog())}
      >
        Đăng xuất
      </span>
    </div>
  );
};

export default AppSideBar;
