import React, { Component } from "react";
import './Window.scss'
import Card from '../card/Card';
import Input from '../input/Input'

class Window extends Component {

    state = {
        bannerUrl: '',
        channelImg: '',
        subscriberCount: '',
        viewCount: ''
    }


    componentDidMount() {
        this.getChannelId()
    }


    async getChannelId(input = 'mkbhd') {
        const api = "AIzaSyDl5bov83fBW37QXinJvn4bS9cf-czCNxY";
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=${api}`;
        await fetch(url)
            .then((data) => data.json())
            .then((data) => {
                try {
                    return data.items[0].id.channelId;
                } catch {
                    // errorHandler(data);
                }
            })
            .then(async (data) => {
                console.log(data);
                let url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${data}&key=${api}`;
                await this.fetchData(url);
            })
            .catch((err) => console.log(`get Channel${err}`));
    }

    async fetchData(url) {
        // console.log(input);
        await fetch(url)
            .then((data) => data.json())
            .then((data) => {
                try {
                    console.log(data);

                    let item = data.items[0];
                    const thumbnails = item.snippet.thumbnails;
                    const banner = item.brandingSettings.image;
                    const statistics = item.statistics;

                    this.setState({
                        title: item.snippet.title,
                        channelImg: thumbnails.medium.url,
                        bannerUrl: banner.bannerMobileExtraHdImageUrl,
                        subscriberCount: this.shortNumber(statistics.subscriberCount),
                        viewCount: this.shortNumber(statistics.viewCount)
                    })
                    // generateHTML(item); set the state
                } catch (err) {
                    throw new Error(err.message);
                }
            })
            .catch((err) => {
                alert(err.message)
                // console.error(err.message);
            });
    }

    shortNumber(labelValue) {
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e9
            ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
            : // Six Zeroes for Millions
            Math.abs(Number(labelValue)) >= 1.0e6
                ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
                : // Three Zeroes for Thousands
                Math.abs(Number(labelValue)) >= 1.0e3
                    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
                    : Math.abs(Number(labelValue));
    }

    render() {
        return (
            <div className="sub-window">
                <div className="search">
                    <Card
                        channelName={this.state.title}
                        banner={this.state.bannerUrl}
                        channelImg={this.state.channelImg}
                        views={this.state.viewCount}
                        subscribers={this.state.subscriberCount}
                    />
                    <Input
                        handleSubmit={this.getChannelId}
                    />
                </div>
            </div>
        );
    }
}

export default Window;