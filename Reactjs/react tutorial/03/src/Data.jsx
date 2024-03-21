import React, { useState } from "react";
import Data1 from "./Data.json";

const Data = () => {
  const [nData, setNData] = useState(Data1);
  // console.log(nData);
  return <div>
    <ul>
      {
        nData.map((items)=>{
          <li key={items.id}>
            {console.log(items.id)}
          </li>
        })
      }
      

    </ul>
  </div>;
};

export default Data;
