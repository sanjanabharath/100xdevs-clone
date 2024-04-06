import React from "react";
import { LuMedal } from "react-icons/lu";

const HomeSection = () => {
  return (
    <div className="grid justify-items-center mt-[150px]">
      <div
        style={{ color: "#7500f9", backgroundColor: "white" }}
        className="w-2/12 flex items-center px-7 py-2 rounded-[20px] "
      >
        <LuMedal className="font-bold" />
        <h1 className="font-bold"> #LEARNING PLATFORM</h1>
      </div>
      <div className="text-center flex flex-col">
        <h2 className="text-4xl font-bold mt-2" style={{ color: "#7500f9" }}>
          100xdevs
        </h2>
        <h2 className="text-white text-4xl font-bold my-4">
          because 10x ain't enough!
        </h2>
        <div className="my-4">
          <div className="text-slate-500">
            A Beginner-Friendly Platform for Mastering Programming Skills and
          </div>
          <div className="text-slate-500">
            Unleashing Your Inner Developer Genius! Start Learning
          </div>
          <div className="text-slate-500">
            Today and Transform into a Tech Pro Tomorrow!
          </div>
        </div>
      </div>
      <div>
        <button
          className="text-white text-sm rounded-[20px] w-48 py-3 mx-3"
          style={{ backgroundColor: "#7500f9" }}
        >
          Explore Courses
        </button>
        <button className="text-white border-slate-700 border-[1px] rounded-[20px] w-48 py-3 text-sm">
          See more &#62;{" "}
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
