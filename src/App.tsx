/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import AppMenuBar from "./components/ui/AppMenuBar";
import { useEffect, useState } from "react";
import AppSideBar from "./components/ui/AppSideBar";
import AddFileCard from "./components/ui/AddFileCard";
import AddFile from "./components/ui/AddFile";
import ContentAddFile from "./components/ui/ContentAddFile";
import HomePage from "./HomePage";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="bg-gradient-to-r from-slate-100 to-red-200 ">
      <ResizablePanelGroup
        direction="horizontal"
        className="grid grid-flow-row-dense grid-cols-3 p-0 min-h-[800px]  min-w-sm md:min-w-md lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl   "
      >
        <div className="  sm: hidden md:block  h-full w-1/12  justify-center  ">
          <AppSideBar isDarkMode={isDarkMode} handleToggle={handleToggle} />
        </div>{" "}
        <ResizablePanel defaultSize={25}>
          <div className="mt-5 mr-3  flex rounded-3xl rounded-t-3xl h-full  min-w-sm md:min-w-md lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl  ">
            <ContentAddFile />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>

    /* <div className="bg-red-200 min-h-[1000px] min-w-sm md:min-w-md lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl">
        <div className="h-[600px] ">
          <HomePage />
        </div>
      </div> */
  );
}

export default App;
