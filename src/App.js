// import Card from "./components/Juniors/card.js"
import TabOptions from "./components/taboptions/index.js";
import React ,  { useState } from "react";
import Junior from "./components/Juniors/index.js";
import Senior from "./components/Seniors/index.js";

function App() {  
  const [activeTab, setActiveTab] = useState("Junior");
  return (
    <>
  <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}></TabOptions>  
  {getCorrectScreen(activeTab)}
    </>
  );
}

const getCorrectScreen = (tabs) =>{
  switch(tabs){
      case "Junior":
          return <Junior/>
          case "Senior":
              return <Senior/>
                  default:
                      return <Junior/>
                                    }
                                         };

export default App;
