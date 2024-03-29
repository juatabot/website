import React from 'react';
import './AlbumSection.css';
import { getImageURL } from '../Utils';


class AlbumSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            src: props.src,
            text: props.text,
        };
    }

    componentDidMount() {
        var src_url = 'media,albums,' + this.state.title + ',' + this.state.src;
        getImageURL(src_url, this.getResolution()["width"])
            .then(url => {
                this.setState({ src: url })
            })
    }

    getResolution() {
        const width = document.getElementById(this.state.src).clientWidth;
        const height = document.getElementById(this.state.src).clientHeight;
        const data = { 'width': width, 'height': height };
        return data;
    }

    render() {
        return (
            <div class="album-section">
                <img id={this.state.src} class="responsive-picture" src={this.state.src}></img>
                <p class="text">{this.state.text}</p>
            </div >
        )
    }
}
export default AlbumSection;
