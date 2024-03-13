import { useEffect, useState } from "react";
import SidebarItem from "./item";
import { useSelector, useDispatch } from "react-redux";
import { setTest } from "../../../../store/app.slice";

type SidebarProps = {
  item: string;
};

function Sidebar(props: SidebarProps) {
  const [isFirst, setIsFirst] = useState<boolean>(false);
  const [isSecond, setIsSecond] = useState<boolean>(true);
  const recuperation = useSelector(state => state.test)
  const dispatch = useDispatch()

  

  function toggleIsFirst() {
    dispatch(setTest(true))
  }

  console.log(recuperation);

  // Monté
  // Chagements
  // Demonté

  useEffect(() => {
    // setIsFirst(false);
    const test = setTimeout(() => {
      console.log("Test");
    }, 1000);

    return () => {
      clearTimeout(test);
    };
  }, [isFirst]);

  console.log("Test");

  return (
    <div className="fixed top-0 bottom-0 w-[200px]">
      <SidebarItem icon={props.item} label="Dashboard" path="" />
      <SidebarItem icon={props.item} label="Messages" path="messages" />
      <button onClick={toggleIsFirst}>Test</button>
    </div>
  );
}

export default Sidebar;
