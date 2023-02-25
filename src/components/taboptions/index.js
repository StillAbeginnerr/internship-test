import React from "react";
import "./tab.css"

const tabs = [
  {
    id: 1,
    name: "Junior",
    age:"(Age 6-10)"
  },
  {
    id: 2,
    name: "Senior",
    age:"(Age 10-15)"
  },
  
];

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="options-wrapper max-width">
        {tabs.map((tab) => (
          <div
          onClick={() => setActiveTab(tab.name)}
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
          
          >
            <div className="btn-decorate">
                <br></br>
            &nbsp;           &nbsp;      &nbsp; &nbsp; {tab.name}<br></br>         &nbsp;      &nbsp;   &nbsp;{tab.age}
                
                </div>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default TabOptions;