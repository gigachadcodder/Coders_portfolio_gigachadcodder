import React from 'react';

const Dropdown = ({ isopen }) => {
    const rotationStyle = {
        transform: isopen ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease-in-out',
    };

    return (
        <svg
            width="7"
            height="9"
            viewBox="0 0 7 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={rotationStyle}
        >
            <path d="M6.25 4.37245L0.25 8.62247L0.25 0.122436L6.25 4.37245Z" fill="white" />
        </svg>
    );
};

export default Dropdown;
