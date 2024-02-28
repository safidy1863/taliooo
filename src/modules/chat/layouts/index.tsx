import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

function ChatLayout() {
  return (
    <div className="h-screen">
      <Sidebar />

      <div className="ml-[200px] h-full bg-red-900">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default ChatLayout;
