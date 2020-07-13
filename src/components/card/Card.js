import React from 'react';
import './card.scss'

function Card(props) {

    return (
        <div className="card">
            {/* <div className="card-top"><span ></span></div> */}
            <div className="card-top" style={{ backgroundImage: `url(${props.banner})`}}></div>
            <div className="bottom">
                <div className="card-circle"><img src={props.channelImg} alt="Channel Profile"/></div>
                <div className="card-bottom">
                    <h1>{props.channelName}</h1>
                    <div className="results">
                        <div>{props.subscribers}</div>

                        {/* <span>Views</span> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Card;