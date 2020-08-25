import React from 'react';
import './MainContainer.css';
import VideoCard from './VideoCard';

function MainContainer() {
    return (
        <div className="mainContainer">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
    )
}

export default MainContainer
