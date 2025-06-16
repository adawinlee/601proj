import React from "react";
import { ImageDisplay } from '../components/ImageDisplay';
import '../css/gallery.css';
import travel from '../models/travel.json';

const Gallery = () => {
    return (
        <main id="gallery-main">
            <h2 className="main-head">Gallery</h2>
            <p>This is a gallery of some of my favorite pictures I have taken while traveling.</p>
            <p className="desktop">Click the images below to enlarge them and see where I've been!</p>
            <p className="mobile">These pictures were taken in Yosemite, Seattle, New York City, and Japan.</p>
            <ImageDisplay imglist={travel} pagename="gallery"/>
        </main>
    );
}

export default Gallery;