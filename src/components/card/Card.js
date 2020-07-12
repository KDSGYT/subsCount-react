import React, { Component } from 'react';
import './card.scss'

class Card extends Component {
    render(){
        return(
            <div className="card">
                <div className="card-top"></div>
                <div className="card-circle"></div>
                <div className="card-bottom"></div>
            </div>
        );
    }
}

export default Card;