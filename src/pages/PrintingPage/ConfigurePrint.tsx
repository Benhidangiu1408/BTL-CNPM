import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useOrderStore from "@/current_user/order";
import useStudentStore from "@/current_user/user";
import { useNavigate } from "react-router-dom";

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

interface Props {
  fileName: string | undefined;
  closePreview: () => void;
}

const ConfigurePrint = ({ fileName, closePreview }: Props) => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [copyCount, setCopyCount] = useState<number>(1);
  const [paperSize, setPaperSize] = useState<string>("");
  const [sided, setSided] = useState<number>(1);
  const [printer, setPrinter] = useState<string>("");
  const { addOrder, orders } = useOrderStore();
  const { info, setPageBalance, logout } = useStudentStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility
  const [isDialogOpen2, setIsDialogOpen2] = useState(false); // State to control dialog visibility
  const [isDialogOpen3, setIsDialogOpen3] = useState(false); // State to control dialog visibility

  const navigate = useNavigate();

  // Function to open the dialog when called
  const openDialog = () => {
    setIsDialogOpen(true); // Open the AlertDialog
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false); // Close the AlertDialog
  };

  const openDialog2 = () => {
    setIsDialogOpen2(true); // Open the AlertDialog
  };

  // Function to close the dialog
  const closeDialog2 = () => {
    setIsDialogOpen2(false); // Close the AlertDialog
  };

  const openDialog3 = () => {
    setIsDialogOpen3(true); // Open the AlertDialog
  };

  // Function to close the dialog
  const closeDialog3 = () => {
    setIsDialogOpen3(false); // Close the AlertDialog
  };

  // Mapping for paper sizes
  const paperSided: Record<string, number> = {
    "1 Mặt": 1, // A3
    "2 Mặt": 2, // System
  };
  // Constants
  const MAX_ALLOWED_PAGES = info.pagebalance; // Example constant
  const handlePrint = () => {
    // Perform calculations or comparisons
    let totalPages = pageCount * copyCount;
    if (paperSize == "A3") {
      totalPages *= 2;
    }
    if (paperSize == "A5") {
      totalPages /= 2;
    }
    console.log(totalPages);
    console.log(MAX_ALLOWED_PAGES);
    if (totalPages > MAX_ALLOWED_PAGES) {
      openDialog();
    } else {
      const now = new Date();
      const dateTimeString = now.toLocaleString(); // Example: "12/4/2024, 10:35:20 AM"
      setPageBalance(info.pagebalance - totalPages);
      console.log(info.pagebalance);
      addOrder({
        name: info.name,
        printdate: dateTimeString,
        filename: fileName ? fileName : "",
        properties: {
          size: paperSize,
          side: sided,
          pagenum: pageCount,
          printnum: copyCount,
        },
        printerid: printer,
      });
      openDialog3();
    }
  };
  return (
    <div>
      <p className="pb-1 text-black mr-auto ">
        Máy in
        <input type="button" value="" />
      </p>
      <AlertDialog open={isDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bạn không đủ số trang để in</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn chỉ còn {MAX_ALLOWED_PAGES} trang để in. Hãy chọn ít trang hơn
              hoặc mua thêm trang in
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeDialog}>Đóng</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={isDialogOpen2}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Bạn có chắc chắn muốn hủy không ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Mọi lựa chọn sẽ không được lưu.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeDialog2}>
              Quay lại
            </AlertDialogCancel>
            <AlertDialogAction onClick={closePreview}>Hủy</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={isDialogOpen3}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Chúng tôi sẽ chuyển hướng đến trang xem trạng thái In
            </AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có thể xem cập nhật trạng thái In tại mục "Trạng thái".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => navigate("/homepage/printing")}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Select
        onValueChange={(value) => {
          setPrinter(value);
        }}
      >
        <SelectTrigger className=" bg-red-200 !important text-black ">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-red-200 !important text-black">
          <SelectItem value="TML-3">TML-3</SelectItem>
          <SelectItem value="STMA-8">STMA-8</SelectItem>
          <SelectItem value="BASM-75">BASM-75</SelectItem>
          <SelectItem value="QBON-203">QBON-203</SelectItem>
          <SelectItem value="ZTPG-406">ZTPG-406</SelectItem>
          <SelectItem value="VRMH-92">VRMH-92</SelectItem>
        </SelectContent>
      </Select>

      <p className="pb-1 text-black mr-auto mt-3">Kích cỡ giấy</p>
      <Select
        onValueChange={(value) => {
          // const numericValue = paperSizeMap[value];
          setPaperSize(value);
        }}
      >
        <SelectTrigger className="bg-red-200 !important text-black">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-red-200 !important text-black">
          <SelectItem value="A5">A5</SelectItem>
          <SelectItem value="A4">A4</SelectItem>
          <SelectItem value="A3">A3</SelectItem>
        </SelectContent>
      </Select>

      <RadioGroup
        defaultValue="2 Mặt"
        className="flex flex-row text-black mt-3"
        onValueChange={(value) => {
          const numericValue = paperSided[value];
          setSided(numericValue);
        }}
      >
        <div className="space-x-2">
          <RadioGroupItem
            value="1 Mặt"
            id="1 Mặt"
            className="form-radio border-black text-blue-500 focus:ring-blue-500"
          />
          <Label htmlFor="1 Mặt">1 Mặt</Label>
        </div>
        <div className="space-x-2">
          <RadioGroupItem
            value="2 Mặt"
            id="2 Mặt"
            className="form-radio border-black text-blue-500 focus:ring-blue-500"
          />
          <Label htmlFor="2 Mặt">2 Mặt</Label>
        </div>
      </RadioGroup>

      <div className="flex flex-col mt-3">
        <Label htmlFor="number" className="text-black pb-3">
          Số lượng trang in
        </Label>
        <Input
          type="number"
          id="number"
          placeholder="1"
          onChange={(e) => setPageCount(Number(e.target.value))}
          className="bg-red-200 !important text-black placeholder:text-gray-500"
        />
      </div>

      <div className="flex flex-col mt-3 ">
        <Label htmlFor="number" className="text-black pb-3">
          Số lượng bản in
        </Label>
        <Input
          type="number"
          id="number"
          placeholder="1"
          onChange={(e) => setCopyCount(Number(e.target.value))}
          className="bg-red-200 !important text-black  placeholder:text-gray-500"
        />
      </div>

      {/* Print Button */}
      <div className="flex justify-between mt-8">
        <Button
          className="  text-black hover:text-gray-700 hover:bg-red-100 justify-start bg-red-200 mr-[15px] "
          onClick={handlePrint}
        >
          {/* <Link to="/printing">
            {" "}
            <div className=" border border-3 bg-red-200 rounded w-14">In</div>
          </Link> */}
          <div className="  bg-red-200 hover:bg-red-100 rounded w-14">In</div>
        </Button>

        <Button
          className=" text-black hover:text-gray-700 bg-red-100 hover:bg-red-50 border-rose-500 ml-auto"
          // onClick={closePreview}
          onClick={openDialog2}
        >
          <div className="  bg-red-100 hover:bg-red-50 rounded w-14">Hủy</div>
        </Button>
      </div>
    </div>
  );
};

export default ConfigurePrint;
