import { Avatar } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar src={image} alt={channel} className="channelRow__logo" />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutline fontSize="small" />}
        </h4>
        <p>
          {subs}K subscribers · {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
