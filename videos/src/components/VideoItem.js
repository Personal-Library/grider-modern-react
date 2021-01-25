import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
  return (
    <div className="video-item item">
      <img 
        alt={props.video.snippet.title}
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
        onClick={() => props.onVideoSelect(props.video)}
      />
      <div className="content">
        <p className="header" >{props.video.snippet.title}</p>
        <p className="description" >{props.video.snippet.channelTitle}</p>
      </div>
    </div>
  );
}

export default VideoItem;