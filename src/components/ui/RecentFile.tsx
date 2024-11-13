import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecentFile = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="font-semibold text-xl">NHỮNG TÀI LIỆU GẦN ĐÂY</div>
        <FaArrowCircleRight size={25} />
      </div>
      <div className="w-full text-left leading-1 mt-2 ">
        <Card className="bg-gradient-to-r from-red-200 to-orange-200  border-2">
          <CardHeader className=" pt-2 pb-1">
            <CardTitle className="text-base">Cnpm.pdf</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-xs ">
              10/21/2024 11:30PM ABX-50 30 Trang A4 5 Bản
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="w-full text-left leading-1 mt-2">
        <Card>
          <CardHeader className=" pt-2 pb-1">
            <CardTitle className="text-base">MMT.docx</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-xs ">
              5/14/2024 12:05PM KMX-50 150 Trang A4 2 Bản
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="w-full text-left leading-1 mt-2">
        <Card className="bg-gradient-to-r from-red-200 to-orange-200 border-2">
          <CardHeader className=" pt-2 pb-1">
            <CardTitle className="text-base">CNXH.pdf</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-xs ">
              8/3/2024 4:05PM LMX-30 100 Trang A3 1 Bản
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RecentFile;
