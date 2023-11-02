import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Heroslide = () => {
    const images = [
        {
            url: './images/generic/pixels/pixel1.png',
            caption: ''
        },
        {
            url: './images/generic/pixels/pixel2.png',
            caption: ''
        },
        {
            url: './images/generic/pixels/pixel3.png',
            caption: ''
        },
        {
            url: './images/generic/pixels/pixel4.png',
            caption: ''
        },
    ];

    const spanStyle = {
        padding: '20px',
        background: 'transparent !important',
        // color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '575px'
      }

    // const responsive = {
    //     0: {
    //         items: 1
    //     },
    //     568: {
    //         items: 1
    //     },
    //     1024: {
    //         items: 1,
    //         itemsFit: 'contain'
    //     },
    // };
    return (
        <div>
            <div className="slide-container">
                <Slide>
                    {images.map((images, index) => (                   
                        <div key={index}>      
                            <div style={{ ...divStyle, 'backgroundImage': `url(${images.url})` }}>
                                <span style={spanStyle}>{images.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}

export default Heroslide

