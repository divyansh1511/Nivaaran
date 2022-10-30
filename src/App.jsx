import React, { useEffect } from "react";
import { BrowserRouter} from "react-router-dom";


import axios from "axios";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3005/mydata").then((e) => {
      console.log(e.data);
    });

  } , []);
  return (
    <BrowserRouter>
        <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
