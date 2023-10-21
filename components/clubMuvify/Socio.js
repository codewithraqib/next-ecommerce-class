import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaStarOfLife } from 'react-icons/fa'
import { useState } from 'react'

const Socio = ({ toogleState }) => {
    const [tabState, setTab] = useState(1)
    const handletab = (index) => {
        setTab(index)
    }

    const presencail_card_content = [
        {
            id: 0, image: "https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg", title: "Compra online", desc: "Acumulas 8% del total * Ejemplo: Tu pasaje cuesta $10.000, acumulas $800 Pesos Muvify."
        },
        {
            id: 1, image: "https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg", title: "Compra Presenciale", desc: "Acumulas 8% del total* Ejemplo: Tu pasaje cuesta $10.000, acumulas $800 Pesos Muvify."
        },
        { id: 2, image: "https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg", title: "Vigencia de puntos", desc: "24 meses." },
        { id: 3, image: "https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg", title: "Mes de cumpleaños", desc: "Acumulas 50% adicional durante todo el mes" },
        { id: 4, image: "https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg", title: "Atención preferente", desc: "5 días de respuesta a reclamos." },
        { id: 5, image: "https://turbusdweb.kupos.cl/images/club-muvify/member-categories/compra-online-icon.svg", title: "Beneficios adicionales", desc: "Descuentos en comercios asociados.." },
    ]
    const Presecail = ({ item }) => {
        return (
            <div className="presencail_card">
                <img src={item.image} alt="" />
                <div className="presencail_text">
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                </div>

            </div>

        )
    }
    return (
        <div className="title_content mb-40">
            <div className='heading text-align  font16 bold-text  mb-20'>Categorías de socio</div>
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
                    {presencail_card_content?.map((item => <Presecail item={item} />))}
                </div>

            </div>
            <div className="club_know_more">
                <AiOutlineInfoCircle className='info_icon' />
                Entérate de los términos y condiciones al ser socio de Club Muvify
            </div>
        </div >
    )
}

export default Socio
