import React from "react";
import "../App.css";
import ActiveImg from "../images/Ellipse101.png";

export default function TableData({ projName, projAbout, currStatus, image }) {
  return (
    <>
      <tr>
        <td>
          <img src={image} alt="" />
          <span>{projName}</span>
        </td>
        <td>{projAbout}</td>
        <td>
          {currStatus ? (
            <>
              <span
                style={{ marginRight: 30, position: "relative", bottom: 2 }}
              >
                Active
                <img
                  style={{ height: 5, width: 5, paddingLeft: 10 }}
                  src={ActiveImg}
                  alt=""
                />
              </span>
              <span style={{ position: "relative", bottom: 1 }}>Bid</span>
            </>
          ) : (
            "Upcoming"
          )}
        </td>
      </tr>
    </>
  );
}
