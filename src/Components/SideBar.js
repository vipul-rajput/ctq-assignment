import React, { useState } from "react";
import { Home, Clock, Edit, CheckList } from "../Assets/assets";

export default function SideBar() {
  const sideBarItems = [
    {
      name: "Clock",
      icon: <Clock />,
    },
    {
      name: "Edit",
      icon: <Edit />,
    },
    {
      name: "CheckList",
      icon: <CheckList />,
    },
  ];
  const [selected, setSelected] = useState("Edit")
  return (
    <div className="side-nav-main">
      <div className="side-nav-items">
        <button className="btn">
          <Home />
        </button>
        <hr />
        {sideBarItems.map((item, index) => {
          return (
            <button style={{
              background: selected === item.name ? "linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)" : "white"
            }} className="btn" key={index}>
              {item.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}
