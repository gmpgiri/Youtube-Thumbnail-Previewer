import React from 'react';
import './VideoCard.css';

function VideoCard({
     thumbnailUrl,
     title, 
     channelName, 
     channelImageUrl, 
     numberOfViews, 
     postedDate}) {
    return (
        <div className="videoCard">
            <img src={thumbnailUrl} alt="image" />
            <div className="videoCard__info">
                <img src={channelImageUrl} alt="image"/>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default VideoCard
