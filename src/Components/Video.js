import { Avatar } from "@material-ui/core";
import React from "react";
import "./Video.css";

function Video({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="video">
      <img src={image} alt="" className="video__thubnail" />
      <div className="video__info">
        <Avatar className="video__avatar" src={channelImage} alt={channel} />
        <div className="video__text">
          <h5>{title}</h5>
          <p>{channel}</p>
          <p>
            {views} · {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
