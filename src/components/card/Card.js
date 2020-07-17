import React from 'react';
import { Consumer } from '../context'
import './card.scss'

export default function Card() {

    return (
        <Consumer>
            {({ bannerUrl, channelImg, title, subscriberCount }) => {
                return (
                    <div className="card">
                        {/* <div className="card-top"><span ></span></div> */}
                        <div className="card-top" style={{ backgroundImage: `url(${bannerUrl})` }}></div>
                        <div className="bottom">
                            <div className="card-circle"><img src={channelImg} alt="Channel Profile" /></div>
                            <div className="card-bottom">
                                <h1>{title || "no channel Name"}</h1>
                                <div className="results">
                                    <div>{subscriberCount}</div>

                                    {/* <span>Views</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )

}