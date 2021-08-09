import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";

function App() {
  return (

    <div className="app">
      <SignUp/>
      <Login/>
  
      <Sidebar />
      <Feed />
      <Widgets />

    </div>
  );
}

export default App;