import React, {setState} from "react";

export class ImageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.imglist, 
            init: props.imglist[0],
            caption: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({init: e.target.src});
        switch (e.target.id) {
            case 'ny1.jpg':
                this.setState({caption: 'A harbor in New York City.'});
                break;
            case 'ny2.jpg':
                this.setState({caption: 'The New York City skyline.'});
                break;
            case 'seattle1.jpg':
                this.setState({caption: 'The view from the Seattle Space Needle, part 1.'});
                break;
            case 'seattle2.jpg':
                this.setState({caption: 'The view from the Seattle Space Needle, part 2.'});
                break;
            case 'jp1.jpg':
                this.setState({caption: 'A side street in Tokyo.'});
                break;
            case 'jp2.jpg':
                this.setState({caption: 'The Golden Pavilion in Kyoto, Japan.'});
                break;
            case 'jp3.jpg':
                this.setState({caption: 'Taken at the Fushimi Inari Shrine in Kyoto, Japan.'});
                break;
            case 'jp4.jpg':
                this.setState({caption: 'The sunset while climbing up the Fushimi Inari Shrine.'});
                break;
            case 'jp5.jpg':
                this.setState({caption: 'The view outside of our hotel in Hakone, Japan.'});
                break;
            case 'jp6.jpg':
                this.setState({caption: 'This is me wearing a kimono. Going to Japan was my first time traveling outside of the United States.'});
                break;
            case 'clifftrees.jpg':
                this.setState({caption: 'A cliffside in Yosemite National Park.'});
                break;
            case 'falls.jpg':
                this.setState({caption: 'A waterfall in Yosemite National Park. Fun fact: the header image for this website was also taken at Yosemite.'});
                break;
            default:
                console.log(e.target.id);
        }
    }

    render() {
        const e = this.state.list;
        return(
            <div>
                <img key="init" src={this.state.init} id="main-img"></img>
                <p className="pic-caption">{this.state.caption}</p>
                <div id="image-display">
                    {
                        e.map( pic => (
                            <img 
                                key={pic} 
                                id={pic}
                                src={pic} 
                                className="gallery-img"
                                onClick={this.handleClick}
                            ></img>
                        ))
                    }
                </div>
            </div>
        );
    }
}