import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { FaStarOfLife } from 'react-icons/fa'


const index = () => {
    const [toogleState, setactive] = useState(1)
    const handletoogle = (index) => {
        setactive(index)
        console.log(index);
    }
    const [tabState, setTab] = useState(1)
    const handletab = (index) => {
        setTab(index)
    }
    return (
        <div className='club_container mt-40 screen_margin'>
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
                        Muvify es nuestro programa de pasajero frecuente, es una forma en la que el mundo se mueve mejor. La agilidad y conveniencia para que vayas a donde quieras, ​¡porque nos encanta que viajes en bus!
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
                    <div className='muvify_card_container mb-20'>
                        <div className="muvifycard">
                            <img src="https://turbusdweb.kupos.cl/images/club-muvify/exchange-currency-icon.svg" alt="" />
                            <div className="desc_container">
                                <div className="title ">Canjea pesos Muvify</div>
                                <div className="desc">Tus pesos Muvify se usan como medio de pago en la web o en las cajas de los terminales. Puedes usarlos para pagar tus pasajes de cualquiera de las compañías asociadas.​​.​</div>
                            </div>
                        </div>  <div className="muvifycard">
                            <img src="https://turbusdweb.kupos.cl/images/club-muvify/dollar-icon.svg" alt="" />
                            <div className="desc_container">
                                <div className="title">Acumula pesos Muvify</div>
                                <div className="desc">Acumula pesos Muvify cada vez que viajes en cualquiera de nuestras empresas asociadas Turbus, Cóndor Bus, JAC, Buses Biobio y por compras en nuestros portales propios.​</div>
                            </div>
                        </div>  <div className="muvifycard">
                            <img src="https://turbusdweb.kupos.cl/images/club-muvify/diamond-icon.svg" alt="" />
                            <div className="desc_container">
                                <div className="title">Descuentos exclusivos</div>
                                <div className="desc">Acumula pesos Muvify cada vez que viajes en cualquiera de nuestras empresas asociadas Turbus, Cóndor Bus, JAC, Buses Biobio y por compras en nuestros portales propios.​</div>
                            </div>
                        </div>
                    </div>
                    <div className="club_know_more">
                        <AiOutlineInfoCircle className='info_icon' />
                        Entérate de los términos y condiciones al ser socio de Club Muvify
                    </div>
                </div>


                {/* Cateforias de socio */}
                <div className={toogleState == 2 ? 'active_content title_content' : "title_content"}>
                    <div className='heading text-align  font20 bold-text  mb-40'>Categorías de socio</div>
                    <div className='desc font11'>
                        Muvify tiene 3 categorías para entregarte una experiencia única según tus hábitos de viajes.
                    </div>
                    <div className="tabs_container">
                        <span onClick={() => handletab(1)} className={tabState === 1 ? 'active_tab tab' : 'tab'}><FaStarOfLife /> INICIAL</span>
                        <span onClick={() => handletab(2)} className={tabState === 2 ? 'active_tab tab' : 'tab'}><FaStarOfLife /><FaStarOfLife />EXTRA</span>
                        <span onClick={() => handletab(3)} className={tabState === 3 ? 'active_tab tab' : 'tab'}><FaStarOfLife /><FaStarOfLife /><FaStarOfLife /> PRO</span>

                    </div>
                    <div className="presecial_wrapper mt-20">
                        <div className='Perteneces_container'>
                            <img src="https://turbusdweb.kupos.cl/images/club-muvify/member-categories/sidebar-illustration-2-icon.svg" alt="" />
                            <span>Perteneces a la categoría</span>
                            <div className={tabState === 1 ? 'active_star star' : 'star'}> <FaStarOfLife className='star_icon' /> INICIAL</div>
                            <div className={tabState === 2 ? 'active_star star' : 'star'}> <FaStarOfLife className='star_icon' /><FaStarOfLife className='star_icon' />EXTRA</div>
                            <div className={tabState === 3 ? 'active_star star' : 'star'}>PRO <FaStarOfLife className='star_icon' /> <FaStarOfLife className='star_icon' /> <FaStarOfLife className='star_icon' /></div>
                            <span className='desc'>Si realizas viajes desde</span>
                            <div className={tabState === 1 ? 'active_dollar dollar' : 'dollar'}>
                                $0 y $120.000 al año
                            </div>
                            <div className={tabState === 2 ? 'active_dollar dollar' : 'dollar'}>
                                $120.001 y $480.000 al año
                            </div>
                            <div className={tabState === 3 ? 'active_dollar dollar' : 'dollar'}>
                                $480.001 al año
                            </div>
                        </div>
                        <div className="presencial_curd_container">
                            <div className="presencail_card">
                                <img src="https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg" alt="" />
                                <div className="presencail_text">
                                    <div className="title">Compra online</div>
                                    <div className="desc">Acumulas 8% del total
                                        *Ejemplo: Tu pasaje cuesta $10.000, acumulas $800 Pesos Muvify.</div>
                                </div>
                            </div><div className="presencail_card">
                                <img src="https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg" alt="" />
                                <div className="presencail_text">
                                    <div className="title">Compra Presencial</div>
                                    <div className="desc">Acumulas 8% del total
                                        *Ejemplo: Tu pasaje cuesta $10.000, acumulas $800 Pesos Muvify.</div>
                                </div>
                            </div><div className="presencail_card">
                                <img src="https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg" alt="" />
                                <div className="presencail_text">
                                    <div className="title">Vigencia de puntos</div>
                                    <div className="desc">24 meses.
                                    </div>
                                </div>
                            </div><div className="presencail_card">
                                <img src="https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg" alt="" />
                                <div className="presencail_text">
                                    <div className="title">Mes de cumpleaños</div>
                                    <div className="desc">Acumulas 50% adicional durante todo el mes.</div>
                                </div>
                            </div><div className="presencail_card">
                                <img src="https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg" alt="" />
                                <div className="presencail_text">
                                    <div className="title">Atención preferente</div>
                                    <div className="desc">5 días de respuesta a reclamos.</div>
                                </div>
                            </div><div className="presencail_card">
                                <img src="https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg" alt="" />
                                <div className="presencail_text">
                                    <div className="title">Beneficios adicionales</div>
                                    <div className="desc">Descuentos en comercios asociados.</div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="club_know_more">
                        <AiOutlineInfoCircle className='info_icon' />
                        Entérate de los términos y condiciones al ser socio de Club Muvify
                    </div>
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
            </div >

        </div >
    )
}

export default index
