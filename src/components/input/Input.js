import React, { Component } from "react";
import './input.scss';

// a stateful function 
class Input extends Component  {
    state = {
        value:''
    }
    
    handleChange(e){
        console.log(e.target.value);
        this.setState({value:e.target.value});
    }

    render(){
        return (
            <form 
                className="input" 
                onSubmit={ (e) => { e.preventDefault();
                        this.props.handleSubmit()
                        this.setState({value:''})
                    }
                }>
                <input
                    htmlFor="channel-search"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
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