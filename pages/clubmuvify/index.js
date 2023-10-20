import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'


const index = () => {
    const [toogleState, setactive] = useState(1)
    const handletoogle = (index) => {
        setactive(index)
        console.log(index);
    }
    return (
        <div className='club_container  screen_margin'>
            <div className='club_card'>
                <AiOutlineInfoCircle className='info_icon' />
                <span>Club Muvify</span>
                <div className='title_container'>
                    <div onClick={() => handletoogle(1)} className={toogleState === 1 ? 'active_title' : 'club_title'}><BsDot />¿Qué es Muvify ?</div>
                    <div onClick={() => handletoogle(2)} className={toogleState === 2 ? 'active_title' : 'club_title'}><BsDot />Categorías de socio</div>
                    <div onClick={() => handletoogle(3)} className={toogleState === 3 ? 'active_title' : 'club_title'}><BsDot />Pesos Muvify</div>
                    <div onClick={() => handletoogle(4)} className={toogleState === 4 ? 'active_title' : 'club_title'}><BsDot />Descuentos exclusivos</div>

                </div></div>

            <div className='club_card_info'>
                <div className={toogleState == 1 ? 'active_content title_content' : "title_content"}>
                    <div className='heading text-align  font16 bold-text  mb-40'>¿Qué es Muvify ?</div>
                    <div className='desc font11'>
                        1  Muvify es nuestro programa de pasajero frecuente, es una forma en la que el mundo se mueve mejor. La agilidad y conveniencia para que vayas a donde quieras, ​¡porque nos encanta que viajes en bus!
                    </div>
                    <div className='desc font11 mt-20'>
                        ¡Ahora el que acumula es el que viaja! Gana pesos Muvify cada vez que viajes en nuestras compañías asociadas.</div>
                    <div className='sponsers'>
                        <img src="https://turbusdweb.kupos.cl/images/club-muvify/turbus-logo.svg" alt="" />
                        <img src="https://turbusdweb.kupos.cl/images/club-muvify/condor-logo.svg" alt="" />
                        <img src="https://turbusdweb.kupos.cl/images/club-muvify/jac-logo.svg" alt="" />
                        <img src="https://turbusdweb.kupos.cl/images/club-muvify/bio-bio-logo.svg" alt="" />
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

                </div>

                {/* Cateforias de socio */}
                <div className={toogleState == 2 ? 'active_content title_content' : "title_content"}>
                    <div className='heading text-align  font20 bold-text  mb-40'>¿Qué es Muvify ?</div>
                    <div className='desc font11'>
                        2 Muvify es nuestro programa de pasajero frecuente, es una forma en la que el mundo se mueve mejor. La agilidad y conveniencia para que vayas a donde quieras, ​¡porque nos encanta que viajes en bus!
                    </div>
                    <div className='desc font11'>
                        ¡Ahora el que acumula es el que viaja! Gana pesos Muvify cada vez que viajes en nuestras compañías asociadas.</div>
                </div>

                {/* Peses Muvify */}
                <div className={toogleState == 3 ? 'active_content title_content' : "title_content"}>
                    <div className='heading text-align  font20 bold-text  mb-40'>¿Qué es Muvify ?</div>
                    <div className='desc font11'>
                        3 Muvify es nuestro programa de pasajero frecuente, es una forma en la que el mundo se mueve mejor. La agilidad y conveniencia para que vayas a donde quieras, ​¡porque nos encanta que viajes en bus!
                    </div>
                    <div className='desc font11'>
                        ¡Ahora el que acumula es el que viaja! Gana pesos Muvify cada vez que viajes en nuestras compañías asociadas.</div>
                </div>

                {/* Descuentos exclusivos */}
                <div className={toogleState == 4 ? 'active_content title_content' : "title_content"}>
                    <div className='heading  text-align font20 bold-text  mb-40'>¿Qué es Muvify ?</div>
                    <div className='desc font11'>
                        4 Muvify es nuestro programa de pasajero frecuente, es una forma en la que el mundo se mueve mejor. La agilidad y conveniencia para que vayas a donde quieras, ​¡porque nos encanta que viajes en bus!
                    </div>
                    <div className='desc font11'>
                        ¡Ahora el que acumula es el que viaja! Gana pesos Muvify cada vez que viajes en nuestras compañías asociadas.</div>
                </div>
            </div>

        </div >
    )
}

export default index
