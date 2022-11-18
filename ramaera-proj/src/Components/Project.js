import React from "react";
import "../App.css";
import Square from "../images/Edit-Square.png";
import TableData from "./TableData";

export default function Project() {
  const tableDataObj = [
    {
      projName: "Garam Masala",
      projAbout:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi, mi, ornare aliquet. ",
      currStatus: true,
      image: "../images/Ellipse97.png",
    },
    {
      projName: "Hotels",
      projAbout:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi, mi, ornare aliquet. ",
      currStatus: true,
      image: "../images/Ellipse98.png",
    },
    {
      projName: "Technology",
      projAbout:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi, mi, ornare aliquet. ",
      currStatus: false,
      image: "../images/Ellipse99.png",
    },
  ];
  return (
    <>
      <div id="project">
        <div className="project-logo">
          <h3>Project</h3>
          <img src={Square} alt="" />
        </div>
        <div id="table">
          <table id="table-1">
            <tr>
              <th>Name</th>
              <th>About</th>
              <th>Status</th>
            </tr>
            {tableDataObj.map((item, i) => (
              <TableData
                key={i}
                projName={item.projName}
                projAbout={item.projAbout}
                currStatus={item.currStatus}
                image={item.image}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
