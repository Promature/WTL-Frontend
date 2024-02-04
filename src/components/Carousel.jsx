import React from 'react'

export default function Carousel() {
    return (
        <div className="h-screen brightness-50">
            <div className="carousel carousel-center w-full h-full">
                <div id="item1" className="carousel-item w-full" >
                    <img src="https://images6.alphacoders.com/119/1199731.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://images6.alphacoders.com/119/1199731.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://images6.alphacoders.com/119/1199731.jpg" className="w-full" />
                </div>
            </div>
        </div>
    )
}
