import { useSelector } from "react-redux";

function Navbar() {
  const recuperation = useSelector((state) => state.test);

  console.log("navbar", recuperation);

  return <div>Navbar</div>;
}

export default Navbar;
