import React, { Component } from "react";
import './Window.scss'
import Card from '../card/Card';
import Input from '../input/Input'

class Window extends Component {

    state={
        bannerUrl: 'some',
        channelImg: '../'
    }

    // componentDidMount(){
    //     this.fetchData();
    // }

    fetchData(){
        fetch ('https://reqres.in/api/users?page=2')
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="sub-window">
                <div className="search">
                    <Card
                        banner={this.state.bannerUrl}
                        channelImg={this.state.channelImgUrl}
                    />
                    <Input
                        fetch={this.fetchData}
                    />
                </div>
            </div>
        );
    }
}

export default Window;