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
                this.setState({caption: 'This is the ny1.jpg image'});
                break;
            default:
                console.log(e.target.id);
                this.setState({caption: 'Caption here'});
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