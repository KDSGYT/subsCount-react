import React from "react";
import './input.scss';

function Input({handleSubmit}) {
    const input = React.useRef()
    const [value, setValue] = React.useState()
    return (
        <form
            className="input"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(input.current.value)
                input.current.value="";
            }
            }>
            <input
                value={value}
                ref={input}
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