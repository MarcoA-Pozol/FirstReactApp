import React from "react";
import "../styles/TopCaption.css"

const TopCaption = () => {
    const top_caption_title = <h1 className="top-caption">React App</h1>;
    const top_introduction_text = <p className="top-caption">This is a text made just for learning purposes.</p>;
    
    return (
        <div>
            {top_caption_title}
            {top_introduction_text}
        </div>
    );
};

export default TopCaption;