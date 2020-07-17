import React, { Component } from "react";
import './input.scss';

class Input extends Component  {
    input = React.createRef();

    render(){
        return (
            <form 
                className="input" 
                onSubmit={ (e) => { e.preventDefault();
                        this.props.handleSubmit(this.input.current.value)
                    }
                }>
                <input
                    ref={this.input}
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
}

export default Input