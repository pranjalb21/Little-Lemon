import { useState } from "react";
import Logo from "../assets/LittleLemonLogo.svg";
import Ham from "../assets/hamburger_icon.svg";
import Close from "../assets/close_icon.svg";
import "../style/nav.css";

export const Nav = () => {
  const [hamClick, setHamClick] = useState(false);
  const handleHam = () => setHamClick(!hamClick);
  return (
    <></>
  );
};
