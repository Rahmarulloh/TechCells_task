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

      
    </div>
  );
};
export default App;
