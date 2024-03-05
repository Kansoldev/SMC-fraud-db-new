"use client";

import { useState } from "react";

const TabList = ({
  tabsData,
}: {
  tabsData: { title: string; content: JSX.Element }[];
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

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

      {tabsData[selectedTab].content && (
        <div className="p-4">{tabsData[selectedTab].content}</div>
      )}
    </div>
  );
};

export default TabList;
