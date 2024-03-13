import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useState } from "react";

function ChatLayout() {
  const [name, setName] = useState<string>("Rakoto")

  // Props drilling => globale , diso fizarana composant
  // 

  // useContext
  // rEDUX
  // zustand

  return (
    <div className="h-[200vh]">
      <Sidebar item={name}/>

      <div className="ml-[200px] h-full bg-red-900">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default ChatLayout;
