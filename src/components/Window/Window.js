import React, { Component } from "react";
import { Provider } from '../context'
import './Window.scss'
import Card from '../card/Card';
import Input from '../input/Input'


class Window extends Component {

    state = {
        bannerUrl: '',
        channelImg: '',
        viewCount: '',
        title:'',
        subscriberCount: 0
    }


    componentDidMount() {
        this.getChannelId();
    }

    /**
     * Retrieve the channel id using the keyword
     * @param {string} input Input entered by the user
     */
    async getChannelId(input="MKBHD") {
        const api = "AIzaSyDvrIL-2-y7Q1gl2T0o0W78FvByXTnIHvM";
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=${api}`;
        await fetch(url)
            .then((data) => data.ok ? data.json() : new Error(`Didn't get the results`))
            .then((data) => {
                return data.items[0].id.channelId;
            })
            .then(async (data) => {
                console.log(`channelId: ${data}`);
                let url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${data}&key=${api}`;
                console.log("fetch function " + typeof this.fetchData)

                await this.fetchData(url)
            })
            .catch((err) => console.log(`Get Channelid Error:${err}`));
    }

    /**
     * Fetch channel stats using channel ID
     * @param { String } url Url to fetch data from  
     */
    async fetchData(url) {
        await fetch(url)
            .then((data) => data.ok ? data.json() : new Error(`Didn't get the channel subs`))
            .then((data) => {
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
            })
            .catch((err) => {
                console.log(err.message)
            });
    }

    /**
     * Converts the number in to short form
     * @param { number } labelValue Number you want to convert
     */
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
            <Provider value={ this.state}>
                <div className="sub-window">
                <div className="search">
                    <Card />
                    <Input
                        handleSubmit={this.getChannelId.bind(this)}
                    />
                </div>
            </div>
            </Provider>
        );
    }
}

export default Window;