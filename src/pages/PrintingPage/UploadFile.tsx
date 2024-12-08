import React, { useRef, useState } from "react";
import * as mammoth from "mammoth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ConfigurePrint from "./ConfigurePrint";
import ConfigurePrint from "./ConfigurePrint";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-cardn";
import { AiFillFileAdd } from "react-icons/ai";
import AlertMessage from "./AlertMessage";

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
// import { Separator } from "@/components/ui/separator";
// import { ProgressDemo } from "./components/ui/Upfile/Progress";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null); // For text-based files
  const [showPreview, setShowPreview] = useState<boolean>(false); // Control preview modal
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility

  // Function to open the dialog when called
  const openDialog = () => {
    setIsDialogOpen(true); // Open the AlertDialog
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false); // Close the AlertDialog
  };

  // Function to trigger the file input when button is clicked
  const handleButtonClick = () => {
    inputFileRef.current?.click(); // Open file explorer
  };

  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      previewFile(file); // Call to preview the selected file
    }
  };

  // Function to preview the file based on its type
  const previewFile = (file: File) => {
    const fileType = file.type;

    if (fileType === "application/pdf") {
      // For PDF files, set the URL to be used in an iframe
      const fileURL = URL.createObjectURL(file);
      setFileContent(fileURL);
    } else if (fileType.startsWith("text/")) {
      // For text files, use FileReader to read the content
      const reader = new FileReader();
      reader.onload = () => {
        setFileContent(reader.result as string);
      };
      reader.readAsText(file);
    } else if (
      file.name.endsWith(".docx") ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result instanceof ArrayBuffer) {
          try {
            const result = await mammoth.convertToHtml({
              arrayBuffer: e.target.result,
            });
            setFileContent(result.value); // Set HTML content
          } catch (error) {
            setFileContent("Error reading .docx file.");
            console.error("Error reading .docx file:", error);
          }
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      // setFileContent("File type not supported for preview.");
      // alert("File type is not supported. Please choose file again.")
      //  <AlertMessage/>
      openDialog();

      return 0;
    }
    setShowPreview(true); // Show preview modal
  };

  // Function to close the preview modal
  const closePreview = () => {
    setShowPreview(false);
  };

  // Function to trigger the browser's print dialog
  // const handlePrint = () => {
  //   window.print(); // This will open the browser's print dialog
  // };

  return (
    <div className="file-uploader ">
      <button type="button" onClick={handleButtonClick}>
        {/* Upload File */}
        <HoverCard>
          <HoverCardTrigger>
            <AiFillFileAdd size={70} />
          </HoverCardTrigger>
          <HoverCardContent>IN FILE</HoverCardContent>
        </HoverCard>
      </button>
      {/* Hidden input that triggers when the button is clicked */}
      <input
        type="file"
        ref={inputFileRef}
        style={{ display: "none" }}
        accept=".pdf,.txt,.docx" // Accept PDFs, text, and Word files
        onChange={handleFileChange}
      />
      {/* Display selected file name */}
      {/* {selectedFile && <p>Selected file: {selectedFile.name}</p>} */}
      {/* Dialog for unsupported file types */}
      <AlertDialog open={isDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Tài liệu của bạn không được hỗ trợ
            </AlertDialogTitle>
            <AlertDialogDescription>
              Chúng tôi chỉ hỗ trợ file docx, txt, pdf. Vui lòng chọn tài liệu
              khác.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeDialog}>OK</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Preview Modal */}
      {showPreview && (
        <>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 ">
            <div className="bg-white shadow-lg rounded-lg w-4/5 h-4/5 overflow-hidden relative">
              {/* Preview Content */}
              {/* <div className="blur-[0px] flex justify-center ">
                <ProgressDemo />
              </div> */}
              <div className="absolute w-1/3 h-full flex   justify-center ">
                {/* Close Button */}

                <p className="text-black flex justify-center absolute mt-8 text-2xl font-semibold">
                  IN ẤN
                </p>

                {/* <Separator className=" pt-5 w-full" /> */}
                <div className="pt-20">
                  <ConfigurePrint
                    fileName={selectedFile?.name}
                    closePreview={closePreview}
                  />
                </div>

                {/* <div className="flex flex-row gap-2">
                  <button
                    className="absolute text-gray-500 hover:text-gray-700 pt-15"
                    onClick={closePreview}
                  >
                    Close
                  </button>

                  <button
                    className="absolute  text-blue-500 hover:text-blue-700"
                    onClick={handlePrint}
                  >
                    Print
                  </button>
                </div> */}
              </div>
              <div className="w-2/3 h-full overflow-auto p-4 ml-auto ">
                {selectedFile?.type === "application/pdf" && (
                  <iframe
                    src={fileContent || ""}
                    title="PDF Preview"
                    className="w-full h-full"
                    frameBorder="0"
                  ></iframe>
                )}

                {/* {selectedFile?.type.startsWith("text/") && (
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap">{fileContent}</pre>
                  </div>
                )} */}
                {/*
                {(selectedFile?.name.endsWith(".docx") ||
                  selectedFile?.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document") && (
                  <div className="prose max-w-none">
                    <h3>Word Document Preview:</h3>
                    <pre className="whitespace-pre-wrap">{fileContent}</pre>
                  </div>
                )} */}

                {(selectedFile?.name.endsWith(".docx") ||
                  selectedFile?.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || selectedFile?.type.startsWith("text/")) && (
                  <iframe
                  title="Word Document Preview"
                  className="w-full h-full border-4 border-black rounded shadow"
                  frameBorder="0"
                  srcDoc={`<html><head><style>body { font-family: Arial, sans-serif; white-space: pre-wrap; }</style></head><body>${
                    fileContent || ""
                  }</body></html>`}
                />
                )}

                

                {fileContent === "File type not supported for preview." && (
                  <p>{fileContent}</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
