import React from 'react'


const Pesos = ({ toogleState }) => {
    const pesos_card_content = [
        { image: "https://turbusdweb.kupos.cl/images/club-muvify/muvify-weights/www-icon.svg", text: "Nuestros portales" },
        { image: "https://turbusdweb.kupos.cl/images/club-muvify/muvify-weights/building-icon.svg", text: "Oficinas de venta" },
        { image: "https://turbusdweb.kupos.cl/images/club-muvify/muvify-weights/ticket-hand-icon.svg", text: "Venta empresas a través de Simplus" },
    ]
    const Perteneces_container_content = [
        { id: 0, image: "https://turbusdweb.kupos.cl/images/club-muvify/muvify-weights/illustration-1-icon.svg", text: "Perteneces a la categoría", no: "1" },
        { id: 1, image: "https://turbusdweb.kupos.cl/images/club-muvify/muvify-weights/illustration-2-icon.svg", text: "Perteneces a la categoría", no: "2" },
        { id: 2, image: "https://turbusdweb.kupos.cl/images/club-muvify/muvify-weights/illustration-3-icon.svg", text: "Perteneces a la categoría", no: "3" },

    ]
    return (
        <div className={"title_content mb-40"}>
            <div className='heading text-align  font16 bold-text  mb-20'>Pesos Muvify</div>
            <div className='desc font11'>
                Podrás acumular Pesos Muvify cada vez que viajes en alguna de las empresas Turbus, Cóndor, JAC y Bio Bio, siempre que hayas adquirido tus pasajes a través de:
            </div>
            <div className="peses_card_container">
                {pesos_card_content?.map((item) => <div className='peses_card'>
                    <img src={item.image} alt="" />
                    <span>{item.text}</span>
                </div>)}

            </div>
            <div className="pesos_desc_container">
                <div className='title text-align font12'>¿Cómo canjear mis pesos Muvify?</div>
                <div className="desc font11">Por ser parte de Muvify, puedes canjear tus Pesos Muvify en tu compra por la totalidad de tus pasajes. Tus Pesos Muvify pueden ser usados como cualquier otro medio de pago.</div>
                <div className="pesos_cards_container">


                    {Perteneces_container_content?.map((item) => <div className='Perteneces_container'>
                        <img src={item.image} alt="" />
                        <span className='font11'>{item.text}</span>
                        <span className='numbers'>{item.no}</span>
                    </div>)}


                </div>
            </div>
        </div>
    )
}

export default Pesos
