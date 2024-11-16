// import React from "react";
// import MenuBar from "./components/ui/HomePage/MenuBar";
// import { TiPrinter } from "react-icons/ti";
// const HomePage = () => {
//   const text = "Smart Printing Service 💫";
//   return (
//     <>
//       <div className="mr-auto">
//         <MenuBar />
//       </div>
//       <div className=" mt-20 mx-auto h-full ml-12">
//         <h1 className=" text-5xl font-bold  text-black ">
//           {text.match(/./gu)!.map((char, index) => (
//             <span
//               className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
//               key={`${char}-${index}`}
//               style={{
//                 animationDelay: `${index * 0.05}s`,
//                 animationIterationCount: "infinite",
//                 // animationTimingFunction: "ease-in-out",
//                 animationDuration: "5s",
//               }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </span>
//           ))}
//         </h1>
//         <div className="pt-30 inset-x-8 inset-y-20">
//           <TiPrinter size={200} />
//         </div>
//         {/* <div className="flex justify-center mx-auto mt-20">
//           <ProgressDemo />
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default HomePage;

import React from 'react'
import { ResizablePanel, ResizablePanelGroup } from './components/ui/resizable'
import AppSideBar from './components/ui/AppSideBar'
import ContentAddFile from './components/ui/ContentAddFile'

const HomePagePrinting = () => {
  return (
      <div className="bg-gradient-to-r from-slate-100 to-red-200 ">
        <ResizablePanelGroup
          direction="horizontal"
          className="grid grid-flow-row-dense grid-cols-3 p-0 min-h-[800px]  min-w-sm md:min-w-md lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl   "
        >
          <div className="  sm: hidden md:block  h-full w-1/12  justify-center  ">
            <AppSideBar />
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
  )
}

export default HomePagePrinting
