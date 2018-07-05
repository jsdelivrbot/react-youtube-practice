import React from 'react';

const VideoListItem = (props) => {
    const videoItems = props.video;
    const onVideoSelect = props.onVideoSelect;

    const imageUrl = videoItems.snippet.thumbnails.default.url;

    return (
        <li onClick={() =>{onVideoSelect(videoItems)}} 
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left" >
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{videoItems.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;