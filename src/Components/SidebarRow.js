import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, text }) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
      <Icon />
      <p>{text}</p>
    </div>
  );
}

export default SidebarRow;
