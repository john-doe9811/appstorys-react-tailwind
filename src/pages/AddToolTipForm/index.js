import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Content from './Content'

const TabGroup = () => {
  const [tabs, setTabs] = useState(["Step 1", "Audience", "Goals", "Scheduling"]);
  const [activeTab, setActiveTab] = useState("Step 1");
  const [newTabCount, setNewTabCount] = useState(1);

  // Function to add a new tab next to the clicked tab
  const addNewTab = (index) => {
    const newTabName = `New Tab ${newTabCount}`;
    const updatedTabs = [...tabs.slice(0, index + 1), newTabName, ...tabs.slice(index + 1)];
    setTabs(updatedTabs);
    setActiveTab(newTabName);
    setNewTabCount(newTabCount + 1);
  };

  return (
    <div className="w-full bg-gray-100">
     <div className="relative flex bg-gray-100 px-8 pt-8 flex flex-row justify-start flex-wrap">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all border border-gray-300
            ${
              activeTab === tab
                ? "text-black bg-white shadow-md z-10 border-b-transparent w-40 -mr-4" // Active tab
                : "text-gray-500 bg-gray-200 hover:bg-gray-300 w-36"
            }

            ${index === 0 ? "rounded-tl-xl border-0" : ""}
            ${index === tabs.length - 1 ? "rounded-tr-xl" : ""}
          `}
          style={{

            clipPath:
              activeTab === tab
                ? index === tabs.length - 1 ? 'none' : "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)"  // Only right side slants (`\`)
                : "none",
          }}
        >
          {tab}
          {/* Plus Button Inside a Circle */}
          <button
            className={`w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:bg-gray-200 hover:text-black ml-3
                ${activeTab === tab ? '' : ' hidden'}
            `}
            onClick={(e) => {
              e.stopPropagation(); // Prevents tab switch on "+" click
              addNewTab(index);
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="text-xs" />
          </button>
        </button>
      ))}
    </div>
    <div className="w-11/12 ml-8  rounded-b-xl rounded-tr-xl  bg-white h-5/6 w-11/12 pt-12 pl-20">
      <Content />
    </div>
    </div>
  );
};

export default TabGroup;

