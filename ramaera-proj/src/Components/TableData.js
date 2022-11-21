import React from "react";
import "../App.css";
import ActiveImg from "../images/Ellipse101.png";
import {Link} from "react-router-dom";

export default function TableData({projName, projAbout, currStatus, image}) {
    return (
        <>
            <tr>
                <td>
                    <img src={image} alt=""/>
                    <Link to={"/gm"}><span>{projName}</span></Link>
                </td>
                <td>{projAbout}</td>
                <td>
                    {currStatus ? (
                        <>
                        <span style={{marginRight: 30, position: "relative", bottom: 2}}>
                            Active
                            <img
                                style={{height: 5, width: 5, paddingLeft: 10}}
                                src={ActiveImg}
                                alt=""
                            />
                        </span>
                            <span style={{position: "relative", bottom: 3}}>Bid</span>
                        </>
                    ) : (
                        "Upcoming"
                    )}
                </td>
            </tr>
        </>
    );
}
