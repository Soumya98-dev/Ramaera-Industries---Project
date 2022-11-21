import React from "react";
import Profile from "../images/Profile.png";
import Projects from "../images/projects.png";
import Finance from "../images/Finance.png";
import Support from "../images/Support.png";
import polygon from "../images/Polygon 1.png";
import "../App.css";
import Project from "./Project";
import Slider from "./Slider";

export default function SideBar() {
    return (
        <div id={"main-content"}>
            <div id="side-bar">
                <ul>
                    <li>
                        <img src={Profile} alt=""/>
                        <span>Profile</span>
                    </li>
                    <li className={"highlighted"}>
                        <img src={Projects} alt=""/>
                        <span>Projects</span>
                        <img src={polygon} alt=""/>
                    </li>
                    <li>
                        <img src={Finance} alt=""/>
                        <span>Finance</span>
                        <img src={polygon} alt=""/>
                    </li>
                    <li>
                        <img src={Support} alt=""/>
                        <span>Support</span>
                        <img src={polygon} alt=""/>
                    </li>
                </ul>
                <div className={"right-border"}></div>
            </div>
            <Project/>
            <Slider/>
        </div>
    );
}
