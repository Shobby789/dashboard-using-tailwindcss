import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-full flex flex-col items-start ps-12 justify-evenly">
        <div className="flex flex-col gap-2">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-20 w-20 rounded-xl"
          />
          <span className="font-semibold text-white text-2xl">Samanatha</span>
          <span className="text-base text-slate-200">samantha@gmail.com</span>
        </div>
        <div className="menu flex flex-col gap-6">
          <span className="text-base font-semibold">Dashboard</span>
          <span className="text-base font-semibold">Expenses</span>
          <span className="text-base font-semibold">Wallets</span>
          <span className="text-base font-semibold">Summary</span>
          <span className="text-base font-semibold">Accounts</span>
          <span className="text-base font-semibold">Settings</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
