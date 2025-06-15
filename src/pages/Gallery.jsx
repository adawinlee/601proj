import React from "react";
import { ImageDisplay } from '../components/ImageDisplay';
import '../css/gallery.css';

const imageNames = [
    'seattle1.jpg', 'seattle2.jpg', 'ny1.jpg', 'ny2.jpg', 'ny3.jpg', 'ny4.jpg', 
    'jp1.jpg', 'jp2.jpg', 'jp3.jpg', 'jp4.jpg', 'jp5.jpg', 'jp6.jpg','jp7.jpg'
];

const Gallery = () => {
    return (
        <main id="gallery-main">
            <h2 className="main-head">Gallery</h2>
            <p>This is the gallery page.</p>
            <ImageDisplay imglist={imageNames}/>
        </main>
    );
}

export default Gallery;