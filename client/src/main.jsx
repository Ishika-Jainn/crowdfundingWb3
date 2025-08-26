import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId="3545a824eaedae31d0f9010212862334"
    >
      <Router>
        <StateContextProvider>

          <App />
        </StateContextProvider>
      
      </Router>
    </ThirdwebProvider>
);