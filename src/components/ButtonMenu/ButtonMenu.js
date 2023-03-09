import React from 'react'
import './ButtonMenu.scss';

export default function ButtonMenu(props) {
    return (
        <div onClick={props.handleClick}
             className={`icon ${props.clicked ? 'open' : ''}`}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
