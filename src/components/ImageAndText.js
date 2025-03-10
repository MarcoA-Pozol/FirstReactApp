import React, { useRef } from "react";

const ImageAndText = () => {
    const changeable_text = useRef();

    // Function
    const updateText = () => {
        changeable_text.current = "Changed";
    };

    return (
        <div>
            <button onClick={updateText}>Update Text</button>
            <p ref={changeable_text}>This text must change</p>
            <hr></hr>
        </div>
    );
};

export default ImageAndText;