import React, { useState } from "react";
import { AuthContext } from "./Context.js";
import { Routes, Route } from "react-router-dom";
import { route1, route2 } from "./routes";

function unite() {
  
  const [isChecked, setIsChecked] = useState(false);
  

  
  return (
    <div>
      <AuthContext.Provider value={(isChecked, setIsChecked)}>
        {        
        isChecked ?
          <Routes>
            {route1.map((data) => {
              return <Route path={data.path} element={data.element} />;
            })}
          </Routes>
        :
          <Routes>
            {route2.map((data) => {
              return <Route path={data.path} element={data.element} />;
            })}
          </Routes>
        }
      </AuthContext.Provider>
    </div>
  );
}

export default unite;
