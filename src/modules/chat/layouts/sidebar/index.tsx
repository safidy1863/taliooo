import { useEffect, useState } from "react";
import SidebarItem from "./item";

function Sidebar() {
  const [isFirst, setIsFirst] = useState<boolean>(false);

  function toggleIsFirst() {
    setIsFirst((currentValue) => !currentValue);
  }

  useEffect(() => {
    console.log("Premier rendu");

    return () => {
        console.log("Fin premier rendu");
    }
  }, [isFirst]);

  return (
    <div className="fixed top-0 bottom-0 w-[200px]">
      <SidebarItem icon="mdi:user" label="Dashboard" path="" />
      <SidebarItem icon="mdi:user" label="Messages" path="messages" />
      <button onClick={toggleIsFirst}>Test</button>
    </div>
  );
}

export default Sidebar;
