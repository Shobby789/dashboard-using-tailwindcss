import React from "react";
import { CgMenuRound } from "react-icons/cg";
import List from "../components/dashboard/List";
import Stats from "../assets/Stats.png";
import img1 from "../assets/Illustration.png";
import img2 from "../assets/Illustration2.png";

const list = [
  { id: 1, title: "Food and Drinks", count: 5679023 },
  { id: 2, title: "Shopping", count: 5679023 },
  { id: 3, title: "Housing", count: 5679023 },
  { id: 4, title: "Transportation", count: 5679023 },
  { id: 4, title: "Vehicle", count: 5679023 },
];

const Dashboard = () => {
  return (
    <>
      <div className="w-full bg-white rounded-3xl flex">
        <div className="flex justify-center items-center pb-0 rounded-l-3xl w-8/12 bg-white">
          <div className="w-[510px] h-full py-8 mx-auto">
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-4xl text-black">
                  Expenses
                </span>
                <span className="text-slate-400">01 - 25 March 2024</span>
              </div>
              <div className="w-32 h-16 pt-1 flex relative ps-11">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-10 h-10 rounded-full z-10"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-10 h-10 rounded-full z-20 relative left-[-17px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-10 h-10 rounded-full z-30 relative left-[-37px]"
                />
                <div className="w-12 h-12 rounded-full z-40 bg-slate-500"></div>
              </div>
            </div>
            <img src={Stats} alt="" className="w-90 my-8" />
            <div className="">
              <List />
            </div>
          </div>
        </div>
        <div className="w-4/12 h-full bg-slate-100 rounded-r-3xl flex flex-col items-center justify-start gap-20 pt-10">
          <div className="w-64 text-black">
            <span className="font-semibold text-xl">Where your money go?</span>
            <div className="pt-12">
              {list.map((l) => {
                return (
                  <div key={l.id} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{l.title}</span>
                      <span className="text-sm text-slate-500 font-medium">
                        {l.count}
                      </span>
                    </div>
                    <div className="flex">
                      <div className="border-2 border-green-700 w-1/2 rounded-l-lg"></div>
                      <div className="border-2 border-slate-200 w-1/2 rounded-r-lg"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-64 h-72 mb-10">
            <div className="w-full h-64 bg-slate-200 rounded-xl px-5">
              <div className="flex justify-between relative">
                <img src={img1} alt="" className="relative top-[-15px]" />
                <img src={img2} alt="" className="relative top-[-20px]" />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <span className="text-base font-semibold text-black">
                  Save more money
                </span>
                <span className="text-[#404852] text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  aspernatur assumenda aut.
                </span>
              </div>
              <button className="rounded-lg w-full py-2 text-white bg-black font-medium text-sm hover:bg-slate-950">
                VIEW TIPS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
