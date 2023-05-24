import React from 'react';
import './loader.css';

const Loader = ({ border, isComponent }) => {
    return (
        <div
            className="loader-container"
            style={{ height: isComponent && '100vh' }}
        >
            <span
                className="loader"
                style={{ border: border ? border : '5px dotted #000' }}
            ></span>
        </div>
    );
};

export default Loader;