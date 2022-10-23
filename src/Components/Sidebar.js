import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUp,
  KeyboardArrowDown,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <SidebarRow Icon={Home} text="Home" selected />
        <SidebarRow Icon={Whatshot} text="Trending" />
        <SidebarRow Icon={Subscriptions} text="Subscription" />
      </div>
      <div className="sidebar__bottom">
        <SidebarRow Icon={VideoLibrary} text="Library" />
        <SidebarRow Icon={History} text="History" />
        <SidebarRow Icon={OndemandVideo} text="Your videos" />
        <SidebarRow Icon={WatchLater} text="Watch Later" />
        <SidebarRow Icon={ThumbUp} text="Liked videos" />
        <SidebarRow Icon={KeyboardArrowDown} text="Show More" />
      </div>
    </div>
  );
}

export default Sidebar;
