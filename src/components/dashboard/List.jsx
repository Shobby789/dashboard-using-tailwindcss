import React from "react";
import { CgMenuRound } from "react-icons/cg";
import { HiShoppingCart } from "react-icons/hi";
import { FaBus } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";
import { FaPlayCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const listData = [
  {
    id: 1,
    title: "Grocery",
    icon: <HiShoppingCart className="text-white w-6 h-6" />,
    iconBg: "bg-sky-600",
  },
  {
    id: 2,
    title: "Transporation",
    icon: <FaBus className="text-white w-6 h-6" />,
    iconBg: "bg-violet-600",
  },
  {
    id: 3,
    title: "Housing",
    icon: <FaHouse className="text-white w-6 h-6" />,
    iconBg: "bg-yellow-600",
  },
];

const list2 = [
  {
    id: 1,
    title: "Food and Drink",
    icon: <BiSolidDish className="text-white w-6 h-6" />,
    iconBg: "bg-red-600",
  },
  {
    id: 2,
    title: "Entertainment",
    icon: <FaPlayCircle className="text-white w-6 h-6" />,
    iconBg: "bg-green-600",
  },
];

const List = ({ bgColor, title, icon }) => {
  return (
    <>
      <div className="flex justify-between items-center py-0 mb-4">
        <span className="text-[18px] font-semibold text-black">Toady</span>
        {/* <CgMenuRound className="w-6 h-6 text-slate-400 cursor-pointer" /> */}
        <div className="w-8 h-6 flex items-center gap-0 pt-2 cursor-pointer">
          <GoDotFill className="text-slate-400" />
          <GoDotFill className="text-slate-400" />
          <GoDotFill className="text-slate-400" />
        </div>
      </div>
      <div className="mb-14 mt-0">
        {listData.map((l) => {
          return (
            <div className="w-[510px] h-[38px] my-6" key={l.id}>
              <div className="p-0">
                <div className="px-0 flex items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <div
                      className={`w-12 h-12 ${l.iconBg} rounded-full flex justify-center items-center`}
                    >
                      {l.icon}
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <span className="font-medium text-base text-black">
                        {l.title}
                      </span>
                      <span className="text-sm text-slate-400">
                        5: 12 px . Belanjs de pasar
                      </span>
                    </div>
                  </div>
                  <div className="pr-1">
                    <span className="font-semibold text-base text-black">
                      -160876
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center py-0 mb-4">
        <span className="text-[18px] font-semibold text-black">
          Monday, 23 March 2020
        </span>
        {/* <CgMenuRound className="w-6 h-6 text-slate-400 cursor-pointer" /> */}
        <div className="w-8 h-6 flex items-center gap-0 pt-2 cursor-pointer">
          <GoDotFill className="text-slate-400" />
          <GoDotFill className="text-slate-400" />
          <GoDotFill className="text-slate-400" />
        </div>
      </div>
      <div className="mb-0 mt-0">
        {list2.map((l) => {
          return (
            <div className="w-[510px] h-[38px] mb-6" key={l.id}>
              <div className="p-0">
                <div className="px-0 flex items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <div
                      className={`w-12 h-12 ${l.iconBg} rounded-full flex justify-center items-center`}
                    >
                      {l.icon}
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <span className="font-medium text-base text-black">
                        {l.title}
                      </span>
                      <span className="text-sm text-slate-400">
                        5: 12 px . Belanjs de pasar
                      </span>
                    </div>
                  </div>
                  <div className="pr-1">
                    <span className="font-semibold text-base text-black">
                      -160876
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
