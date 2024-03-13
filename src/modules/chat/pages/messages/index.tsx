import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Messages() {
  const [data, setData] = useState([]);

  useEffect(() => {
  }, [data]);


  console.log(data)

  return (
    <div>
      Messages
      <Outlet />
    </div>
  );
}

export default Messages;
