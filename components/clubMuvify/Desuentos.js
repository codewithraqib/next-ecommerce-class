import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaStarOfLife } from 'react-icons/fa'

const Desuentos = () => {
    const pesos_content = [
        { id: 0, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/coppelia-icon.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle /> },
        { id: 1, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/assist-card-icon.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle /> },
        { id: 2, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/eventos-icon.svg", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle /> },
        { id: 3, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/eventos-icon.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle /> },
        { id: 4, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/ibis-logo-icon.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle /> },
        { id: 5, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/tarragona-icon-new.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle /> }
    ]
    const Pesos = ({ item }) => {
        return (
            <div className='Perteneces_container'>
                <img src={item.image} className='ibis_img' alt="" />
                <div className='star-text'>

                    <span>  {item.star} {item.star_text}</span>
                    <span>{item.star} {item.star}{item.star_text_extra}</span>
                    <span>{item.star}{item.star}{item.star}{item.star_text_pro}</span>
                </div >
                <span className='details_icon'>{item.detail_icon}</span>
            </div >)
    }
    return (


        <div className={"title_content mb-40"}>
            <div className='heading  text-align font16 bold-text  mb-20'>Descuentos exclusivos</div>
            <div className='desc font11'>
                Accede a descuentos exclusivos por ser parte del programa Muvify.
            </div>
            <div className="pesos_cards_container">
                {pesos_content?.map((item) => <Pesos item={item} />)}

            </div>
        </div>
    )
}

export default Desuentos
