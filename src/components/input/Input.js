import React from "react";
import './input.scss';

// a stateful function 
const Input = (props) => {
    return (
        
        <form className="input" onSubmit={(e) => { e.preventDefault()
            props.fetch()}}>
            <input
                htmlFor="channel-search"
                type="text"
                className="label-input"
                required
            />
            <label htmlFor="channel-search" className="label-name">
                <span className="content-name">
                    Search
                </span>
            </label>
            <input type="submit" className="material-icons" value="search" />
        </form>
    );
}

export default Input