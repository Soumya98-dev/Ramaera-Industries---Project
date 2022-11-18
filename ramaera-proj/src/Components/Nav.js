import React from "react";
import Logo from "../images/Ramaera-Logo.png";
import "../App.css";
import polygon from "../images/Polygon 1.png";
import NotifyImg from "../images/Notify.png";

export default function Nav() {
  return (
    <>
      <div id={"nav"}>
        <div className="logo">
          <img src={Logo} alt={"Logo"} />
          <h1>Ramaera Industries</h1>
        </div>
        <div className="nav-details">
          <img src={NotifyImg} alt="notification logo" />
          <div>
            <p>English(UK)</p>
            <img src={polygon} alt="Dropdown logo" />
          </div>
        </div>
      </div>
      <div className={"bottom-border"}></div>
    </>
  );
}
