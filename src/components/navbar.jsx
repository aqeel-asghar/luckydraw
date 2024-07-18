// components/Navbar.js
import React, { useContext } from "react";
import icon from "../assets/metmask-icon.png";
import { Web3Context } from "./web3context";

export default function Navbar() {
  const { isConnectedd, connectedAddress, connectToMetaMask } =
    useContext(Web3Context);

  const handleConnect = async () => {
    if (isConnectedd === false) {
      await connectToMetaMask();
    }
  };

  return (
    <nav className="w-full items-center px-4 py-4 md:p-4 h-15 bg-[#efb23a] flex justify-between fixed z-20 top-0 start-0">
      <div className="text-2xl font-bold text-white  cursor-pointer">
        Eth Lucky Draw{" "}
      </div>
      <div className="flex flex-row gap-3">
        <button onClick={handleConnect} className="md:hidden">
          {" "}
          <img src={icon} className="h-11" />{" "}
        </button>

        <button
          onClick={handleConnect}
          type="button"
          className="hidden md:block text-white bg-[#233545]  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm p-3 text-center text-[15px] font-bold me-2 mb-2 px-7"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 inline-block mx-2 items-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
            />
          </svg>
          {connectedAddress
            ? `${connectedAddress.slice(0, 4)}...${connectedAddress.slice(
                connectedAddress.length - 4
              )}`
            : "Connect"}
        </button>
      </div>
    </nav>
  );
}
