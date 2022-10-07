import React from 'react';
import W404 from "../../images/404.jpg";
import "./warning.css";

const Warning = () => {
    return (
        <div className='loader flex flex-c'>
        <img src = {W404} alt = "404" />
        </div>
    )
}

export default Warning