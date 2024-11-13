import React from "react";
import MenuBar from "./components/ui/HomePage/MenuBar";
import { TiPrinter } from "react-icons/ti";
const HomePage = () => {
  const text = "Smart Printing Service 💫";
  return (
    <>
      <div className="mr-auto">
        <MenuBar />
      </div>
      <div className=" mt-20 mx-auto h-full ml-12">
        <h1 className=" text-5xl font-bold  text-black ">
          {text.match(/./gu)!.map((char, index) => (
            <span
              className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
              key={`${char}-${index}`}
              style={{
                animationDelay: `${index * 0.05}s`,
                animationIterationCount: "infinite",
                // animationTimingFunction: "ease-in-out",
                animationDuration: "5s",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="pt-30 inset-x-8 inset-y-20">
          <TiPrinter size={200} />
        </div>
        {/* <div className="flex justify-center mx-auto mt-20">
          <ProgressDemo />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
