import React from 'react';
import './card.scss'

function Card(props) {
    return (
        <div className="card">
            <div className="card-top">{props.banner}</div>
            <div className="card-circle"></div>
            <div className="card-bottom"></div>
        </div>
    );

}

export default Card;