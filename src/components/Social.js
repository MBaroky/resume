import React from 'react';

function Social({content}) {
    return (
    <li className="list-inline-item">
        <a className="text-center" href={content.link} target="_blank" rel="noopener noreferrer">
            <i className={content["icon-class"]}></i>
        </a>
    </li>
    );
}

export default Social;