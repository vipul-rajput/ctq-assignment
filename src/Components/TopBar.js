import React from "react";
import "./Common.css";
import { EmptyProfile, Logo, NotficationIcon } from "../Assets/assets";
export default function TopBar() {
  return (
    <div className="top-nav-main  ">
      <div className="d-flex justify-content-between">
        <div className="nav-brand d-flex">
          <img src={Logo} alt="WorkRoom Logo" className="top-nav-logo" />
          <div className="d-flex">
            <h3>Workroom</h3>
            <div className="vl">|</div>
            <span>CTQ System</span>
          </div>
        </div>
        <div className="nav-profile d-flex">
          <NotficationIcon />
          <img  src={EmptyProfile} alt="Profile" />
          <span>
            <span>Kranti Kiran</span>
            <br /> <span style={{
                fontSize: "14px",
                color: "#7D7676",
            }}>Admin</span>
          </span>
        </div>
      </div>
    </div>
  );
}
