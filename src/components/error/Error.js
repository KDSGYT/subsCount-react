import React from 'react';
import './Error.scss';

function Error({ status }) {
    return (
        <div className="error-page">
            <h1 className="punchline">
                Bummer !!!! Error: {status}
                <p id="explanation">I don't have money to pay YoutubeAPI for quota extension. <br/> Come back later!! </p>

            </h1>
        </div>
    )
}
export default Error;