import React from "react";
import { ImageDisplay } from '../components/ImageDisplay';
import '../css/gallery.css';

const imageNames = [
    'seattle1.jpg', 'seattle2.jpg', 'ny1.jpg', 'ny2.jpg', 'jp1.jpg', 'jp2.jpg', 
    'jp3.jpg', 'jp4.jpg', 'jp5.jpg', 'jp6.jpg', 'clifftrees.jpg', 'falls.jpg'
];

const Gallery = () => {
    return (
        <main id="gallery-main">
            <h2 className="main-head">Gallery</h2>
            <p>This is a gallery of some of my favorite pictures I have taken while traveling.</p>
            <p id="desktop">Click the images below to enlarge them and see where I've been!</p>
            <p id="mobile">These pictures were taken in Yosemite, Seattle, New York City, and Japan.</p>
            <ImageDisplay imglist={imageNames}/>
        </main>
    );
}

export default Gallery;