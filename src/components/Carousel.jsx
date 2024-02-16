export default function Carousel() {
    
    return (
        <>
            <div className="font-bold text-4xl text-white mt-40 mx-4 md:m-4 p-8 bg-black bg-opacity-40 md:mt-20 absolute z-10 text-start md:text-center backdrop-blur-sm border border-white">
                Bringing Lost Pets Home, <br /> One Tail at a Time.<br /><br />
                <span className="text-2xl">
                    Empowering Communities to Reconnect with Their Furry Loved Ones:<br /> Together, We Bring Lost Pets Back to Warm Homes and Loving Arms.
                </span>
            </div>
            <div className="h-screen brightness-75">
                <div className="carousel carousel-center w-full h-full">
                    <div id="item1" className="carousel-item w-full h-full" >
                        <img src="https://images6.alphacoders.com/119/1199731.jpg" className="w-full h-auto object-cover" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg" className="w-full h-auto object-cover" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://cdn.pixabay.com/photo/2020/11/17/02/16/dog-5751151_1280.jpg" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </>
        
    )
}
