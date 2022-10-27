import Home from "./components/Home";
import "./styles/style.scss";
import {AuthContext} from "./components/Context";
import { useState } from "react";

const App = () => {

    const [isChecked, setIsChecked] = useState(false);

    return(
        <div>

            <AuthContext.Provider value={(isChecked, setIsChecked)}>
            
            <Home />

            </AuthContext.Provider>

        </div>
    )

}
export default App;