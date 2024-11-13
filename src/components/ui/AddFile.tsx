import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { RxAvatar } from "react-icons/rx";
import RecentFile from "./RecentFile";

const AddFile = () => {
  return (
    <>
      {/* <div className=" pt-6  grid grid-cols-7    h-1/4 w-full ">
        <div className="col-end-8 col-span-1">
          <RxAvatar size={32} />
        </div>
        <br></br>
      </div> */}
      <div className="flex flex-col h-full w-full">
        <h1 className="flex justify-center font-bold text-3xl">
          HỆ THỐNG IN ẤN THÔNG MINH
        </h1>

        {/* <div className="flex flex-row"> */}
        <div className="flex flex-row pt-3 pb-3 pr-3 ml-auto">
          <RxAvatar size={32} />
        </div>
        {/* </div> */}

        <div className="flex pb-10 h-1/5 border-dotted border-2 border-sky-500 w-full  rounded-3xl items-center justify-center ">
          <HoverCard>
            <HoverCardTrigger>
              <AiFillFileAdd size={70} />
            </HoverCardTrigger>
            <HoverCardContent>THÊM FILE</HoverCardContent>
          </HoverCard>
        </div>
        <div className="pt-10 mr-auto pl-3 w-full">
          <RecentFile />
        </div>
      </div>
    </>
  );
};

export default AddFile;
