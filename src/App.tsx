import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "@/components/Dashboard/Dashboard";
import Query from "./components/Query/Query";
import { DatabaseProvider } from "./context/Context";

function App() {
  return (
    <>
      <DatabaseProvider>
        <Dashboard />
        <Query />
      </DatabaseProvider>
    </>
  );
}

export default App;
