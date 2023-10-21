import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'


const QuesMuvify = () => {
    const muvifycard_content = [
        { id: 0, image: "https://turbusdweb.kupos.cl/images/club-muvify/exchange-currency-icon.svg", title: "Canjea pesos Muvify", desc: "Tus pesos Muvify se usan como medio de pago en la web o en las cajas de los terminales. Puedes usarlos para pagar tus pasajes de cualquiera de las compañías asociadas." },
        { id: 1, image: "https://turbusdweb.kupos.cl/images/club-muvify/dollar-icon.svg", title: "Acumula pesos Muvify", desc: "Tus pesos Muvify se usan como medio de pago en la web o en las cajas de los terminales. Puedes usarlos para pagar tus pasajes de cualquiera de las compañías asociadas." },
        { id: 2, image: "https://turbusdweb.kupos.cl/images/club-muvify/dollar-icon.svg", title: "Descuentos exclusivos", desc: "Tus pesos Muvify se usan como medio de pago en la web o en las cajas de los terminales. Puedes usarlos para pagar tus pasajes de cualquiera de las compañías asociadas." },
    ]
    const sponsers = [
        { image: "https://turbusdweb.kupos.cl/images/club-muvify/turbus-logo.svg" },
        { image: "https://turbusdweb.kupos.cl/images/club-muvify/condor-logo.svg" },
        { image: "https://turbusdweb.kupos.cl/images/club-muvify/jac-logo.svg" },
        { image: "https://turbusdweb.kupos.cl/images/club-muvify/bio-bio-logo.svg" },
    ]
    const CardMuvify = ({ item }) => {
        return (
            <div className="muvifycard">
                <img src={item.image} alt="" />
                <div className="desc_container">
                    <div className='title'>{item.title}</div>
                    <div className='desc'>{item.desc}</div>

                </div>

            </div>
        )
    }
    return (
        <div className={"title_content mb-40"}>
            <div className='heading text-align  font16 bold-text  mb-20'>¿Qué es Muvify ?</div>
            <div className='desc font11'>
                Muvify es nuestro programa de pasajero frecuente, es una forma en la que el mundo se mueve mejor. La agilidad y conveniencia para que vayas a donde quieras, ​¡porque nos encanta que viajes en bus!
            </div>
            <div className='desc font11 mt-20'>
                ¡Ahora el que acumula es el que viaja! Gana pesos Muvify cada vez que viajes en nuestras compañías asociadas.</div>
            <div className='sponsers'>

                {sponsers?.map((img) => <img src={img.image} alt='' />)}

            </div>

            <div className="currency_container">
                <img src="https://turbusdweb.kupos.cl/images/club-muvify/what-is-muvify-illustration.svg" alt="" />
                <div className='currencydetails'>
                    <span>La moneda de acumulación del programa serán Pesos Muvify.</span>
                    <span>
                        Los pesos del programa serán equivalentes a $1 para efectos de compras y canjes de pasajes.
                    </span>
                    <span className='peso_muvify bold-text font14'>1 peso Muvify = $1 CLP</span>
                </div>
            </div>
            <span className='bold-text'>¿Qué beneficios obtengo al inscribirme en el Club Muvify?</span>
            <div className='muvify_card_container mb-20'>

                {muvifycard_content?.map((item) => <CardMuvify item={item} />)}

            </div>
            <div className="club_know_more">
                <AiOutlineInfoCircle className='info_icon' />
                Entérate de los términos y condiciones al ser socio de Club Muvify
            </div>
        </div>
    )
}

export default QuesMuvify
