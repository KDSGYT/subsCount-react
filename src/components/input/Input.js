import React, { Component } from "react";
import './input.scss'
import Card from '../card/Card';

class Input extends Component {

    fetchData = (e) =>{
        e.preventDeault();
    }

    render() {
        return (
            <div className="sub-window">
                <div className="search">
                    <Card />
                    <form className="input" onSubmit={this.fetchData}>
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
                </div>
            </div>
        );
    }
}

export default Input;