import React, { useState, useEffect } from 'react';

export default function MobileScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const screens = [
        { src: "image/screenshot1.png" },
        { src: "image/screenshot2.png" },
        { src: "image/screenshot3.png" },
        { src: "image/screenshot4.png" }
    ];

    useEffect(() => {
        const changeScreen = () => {
            setOpacity(0); 
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length); // Cycle through the images
                setOpacity(1); 
            }, 1000); 
        };

        setCurrentIndex(0);

        const interval = setInterval(changeScreen, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mobile">
            <div className="mobile-content">
                <img src="image/home-phones.png" alt="" className="mobile-img" />
                <img
                    src={screens[currentIndex].src}
                    alt=""
                    className="screen"
                    style={{ opacity: opacity, transition: "opacity 1s ease-in-out" }}
                />
            </div>
        </div>
    );
}
