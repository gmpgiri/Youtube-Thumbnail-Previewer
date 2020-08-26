import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';

import './VideoCard.css';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function VideoCard({
     thumbnailUrl,
     isCustom,
     title, 
     channelName, 
     channelImageUrl, 
     noOfViews, 
     postedDate}) {
        
        const classes = useStyles();
        const [modalStyle] = React.useState(getModalStyle);

        const  [imageUrl, setImageUrl] = useState('');
        const  [titleInput, setTitleInput] = useState('');
        const  [input, setInput] = useState('');
        const  [channelTitle, setChannelTitle] = useState('');
        const  [open, setOpen] = useState(false);
        const handleClose = (e) => {
            //set url to img
            e.preventDefault();
            setImageUrl(input);
            setChannelTitle(titleInput);
            setOpen(false);
        }
   
    return (
        <div className="videoCard">
            
                <Modal
                    
                open={open}
                onClose={handleClose}
                className={classes.modal}
                >
                    <div style={modalStyle} className={classes.paper}>
                      <form>
                         <TextField 
                         placeholder="Image Url"
                         value={input} onChange={e => setInput(e.target.value)}/>
                         <TextField 
                         placeholder="Channel Title"
                         value={titleInput} onChange={e => setTitleInput(e.target.value)}/>
                         <Button onClick={handleClose} type="submit"> Set Image Url</Button>
                      </form>
                     
                    </div>
                </Modal>
            
            {isCustom && !imageUrl? (
                <button onClick={e => setOpen(true)}> Upload </button>
            ) : (
                <img className="videoCard__thumbnail" src={imageUrl  || thumbnailUrl} alt="image" />  
            )}
            <div className="videoCard__info">
                <div className="videoCard__channelImageContainer">
                    <img src={channelImageUrl} alt="image"/>
                </div>
                <div className="videoCard__infoText">
                    <p className="videoCard__infoTitle">{channelTitle || title}</p>
                    <p className="videoCard__channelName">{channelName}</p>
                    <p className="videoCard__noOfViewsAndPostedDate">{noOfViews} • {postedDate}</p>

                </div>      
            </div> 
     
            
        </div>
    )
}

export default VideoCard
