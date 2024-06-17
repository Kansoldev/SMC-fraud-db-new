"use client";

import { useState } from "react";

const TabList = ({
  onOpenModal,
}: {
  onOpenModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabsData = [
    {
      title: "Social Media",
      content: (
        <>
          <p className="text-gray-500">
            Facebook: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Discord: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Instagram: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Telegram: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Twitter: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Whatsapp: <span className="text-black ml-3"></span>
          </p>
        </>
      ),
    },
    {
      title: "Wallet Information",
      content: (
        <>
          <button
            type="button"
            onClick={onOpenModal}
            className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black mt-3"
          >
            Add a new wallet
          </button>
        </>
      ),
    },
    {
      title: "Images",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black mt-3">
            Add Images
          </button>
        </>
      ),
    },
    {
      title: "Audio",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black mt-3">
            Add Audio
          </button>
        </>
      ),
    },
    {
      title: "Links",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black mt-3">
            Add Links
          </button>
        </>
      ),
    },
    {
      title: "Reports",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black mt-3">
            Add a new report
          </button>
        </>
      ),
    },
    {
      title: "Related Profiles",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black mt-3">
            Add new related profile
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="bg-white p-4">
      <ul className="flex border-b border-gray-200">
        {tabsData.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer py-2 px-4 ${
              selectedTab === index ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div className="max-h-[300px] overflow-y-auto">
        {tabsData[selectedTab].content && (
          <div className="p-4">{tabsData[selectedTab].content}</div>
        )}
      </div>
    </div>
  );
};

export default TabList;
