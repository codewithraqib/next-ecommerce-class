import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import QuesMuvify from '../../components/clubMuvify/QuesMuvify'
import Socio from '../../components/clubMuvify/Socio'
import Pesos from '../../components/clubMuvify/Pesos'
import Desuentos from '../../components/clubMuvify/Desuentos'
import Navbar from '../../components/ui-elements/nav-bar/navbar'
import Model from '../../components/clubMuvify/Model'


const index = () => {
    const [toogleState, setactive] = useState(1)
    const [showModel, setShowModel] = useState(false)
    const handletoogle = (index) => {
        setactive(index)
        console.log(index);
    }

    return (
        <>
            <Navbar />
            <div className='club_container mt-40 screen_margin mb' onClick={() => setShowModel(false)}>
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



                    {toogleState == 1 ? <QuesMuvify /> : toogleState == 2 ? <Socio /> : toogleState == 3 ? <Pesos /> : toogleState == 4 ? <Desuentos setShowModel={setShowModel} /> : null}




                </div >
                {showModel && <Model />}
            </div >


        </>
    )
}

export default index
