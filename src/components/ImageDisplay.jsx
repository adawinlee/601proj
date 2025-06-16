import React from "react";

export class ImageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.imglist, // list of image objects
            init: props.imglist[0].image, // initial src of the main big image
            caption: props.imglist[0].caption, // initial caption of the main image
            page: props.pagename
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // change the main image src to the src of the photo that was clicked on
        // change the caption of the main image to fit the new source
        this.setState({init: e.target.src, caption: e.target.alt});
    }

    render() {
        const e = this.state.list;
        return(
            <div>
                <img key="init" src={this.state.init} id={this.state.page + "-main-img"}></img>
                <p className="pic-caption">{this.state.caption}</p>
                <div id={this.state.page + "-image-display"}>
                    {
                        e.map( obj => (
                            <img 
                                key={obj.id} 
                                src={obj.image} 
                                alt={obj.caption}
                                className={this.state.page + "-gallery-img"}
                                onClick={this.handleClick}
                            ></img>
                        ))
                    }
                </div>
            </div>
        );
    }
}