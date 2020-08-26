import React from 'react';
import './MainContainer.css';
import VideoCard from './VideoCard';

function MainContainer() {
    return (
        <div className="mainContainer">
        <h2 className="mainContainer__title">Recommended</h2>
            <div className="mainContainer__videos">
            <VideoCard 
                isCustom
                thumbnailUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvVgyxfCFFzYwsRNiepDh6plHtXvgUtWFkmw&usqp=CAU"
                title="Title of the video"
                channelName="Giri Teaches Code"
                noOfViews="10,000,000"
                postedDate="3 days ago"
                channelImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyECZCac4piYKOorI11GUrqjLHLxJrr8DVeA&usqp=CAU"
            />
            <VideoCard  
                thumbnailUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvVgyxfCFFzYwsRNiepDh6plHtXvgUtWFkmw&usqp=CAU"
                title="Title of the video"
                channelName="Giri Teaches Code"
                noOfViews="10,000,000"
                postedDate="3 days ago"
                channelImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyECZCac4piYKOorI11GUrqjLHLxJrr8DVeA&usqp=CAU"
            />
            <VideoCard  
                thumbnailUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvVgyxfCFFzYwsRNiepDh6plHtXvgUtWFkmw&usqp=CAU"
                title="Title of the video"
                channelName="Giri Teaches Code"
                noOfViews="10,000,000"
                postedDate="3 days ago"
                channelImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyECZCac4piYKOorI11GUrqjLHLxJrr8DVeA&usqp=CAU"
            />
            <VideoCard  
                thumbnailUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvVgyxfCFFzYwsRNiepDh6plHtXvgUtWFkmw&usqp=CAU"
                title="Title of the video"
                channelName="Giri Teaches Code"
                noOfViews="10,000,000"
                postedDate="3 days ago"
                channelImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyECZCac4piYKOorI11GUrqjLHLxJrr8DVeA&usqp=CAU"
            />
             <VideoCard  
                thumbnailUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvVgyxfCFFzYwsRNiepDh6plHtXvgUtWFkmw&usqp=CAU"
                title="Title of the video"
                channelName="Giri Teaches Code"
                noOfViews="10,000,000"
                postedDate="3 days ago"
                channelImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyECZCac4piYKOorI11GUrqjLHLxJrr8DVeA&usqp=CAU"
            />
            
        </div>
        </div>
        
    )
}

export default MainContainer
