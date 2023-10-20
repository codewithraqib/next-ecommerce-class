import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';


const slideimgs = [
    { id: 0, image: "https://turbusdweb.kupos.cl/images/turbus/services/simplus.png", text: "Simplus", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg", },
    { id: 1, image: "https://turbusdweb.kupos.cl/images/turbus/services/ria.png", text: "Ria", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg" },
    { id: 2, image: "https://turbusdweb.kupos.cl/images/turbus/services/jedimar.png", text: "Jedimar", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg" },
    { id: 3, image: "https://turbusdweb.kupos.cl/images/turbus/services/aeropuerto.png", text: "Aeropuerto", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg" },
    { id: 4, image: "https://turbusdweb.kupos.cl/images/turbus/services/jedimar.png", text: "Jedimar", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg" },
]

const Slide = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isHovering, setIsHoering] = useState(false)
    const handlemouseover = () => {
        setIsHoering(true)
    }
    const handlemouseout = () => {
        setIsHoering(false)
    }

    const handleHover = () => {
        setIsHovered(!isHovered);
    }

    return (
        <div className='slideimgsfnc mt50'>
            <div className='slide-img' onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <img src={item.image} alt="" />
                <img className='overlap_img' src={isHovered ? item.hovered_img : item.nothovered_img} alt='' />
                <div className={isHovered ? 'hoveredtext font11' : 'overlaptext font14 bold-text'} >{isHovered ? item.hoveredtext : item.text}</div>
            </div>
        </div>
    )
}
const SlideimgsSec = () => {

    const responsiveitems = {
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5 },
    };
    return (

        <div className='slideimgs_wrapper mt40 '>
            <div className='logo_location mb40'>
                <img src="/images/homeimgs/location_icon.png" alt="" width={50} height={50} />
                <div className="location_text">
                    <span className='font22'>Nuestros</span><br />
                    <span className='font24 bold-text'>servicios</span>
                </div>
            </div>
            <div className="slideimgs">

                <AliceCarousel autoPlay={true} animationDuration={1500} controlsStrategy='alternate' infinite
                    disableButtonsControls
                    responsive={responsiveitems}
                    items=
                    {slideimgs?.map((item) => <Slide item={item} />)}
                />
            </div>

        </div >
    )
}


export default SlideimgsSec
