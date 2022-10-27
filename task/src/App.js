import { AuthContext } from "./components/Context";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { route1, route2 } from "./components/routes";
import "./styles/style.scss";
import Pin from "./components/Pin";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>

        <Pin/>

      {/* <AuthContext.Provider value={(isChecked, setIsChecked)}>
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
      </AuthContext.Provider> */}
    </div>
  );
};
export default App;
