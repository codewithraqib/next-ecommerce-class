import React from 'react'


const index = () => {

    return (
        <div className='profile_content'>
            <div className='image_content'>
                <img src="/images/generic/treesbaner.png" alt="pupu" />
            </div>
            <div className='parent_nav'>
                <div className='profile_image'>
                    <img src='/images/generic/profile-nav-.png' />
                </div>
                <div className='text-profile'>
                    <span>¡PREPARA TU VIAJE!</span>
                    <span>AHORRA</span>
                    <span>SERVICIOS ADICIONALES</span>
                    <span>CLUB MUVIFY</span>
                    <span>AYUDA</span>
                </div>
            </div>

            <div className='all_card'>
                <div className='position_card'>
                    <div className='img_text'>
                        <div className='profile_img'>
                            <img src='/images/generic/profile-look.png' height={60} width={60} />
                        </div>
                        <div className='profile_name'>
                            <span className='bo'>Abcd error <br />
                                <span className='ma'>abcd1234@gmail.com</span> </span>
                        </div>
                    </div>
                    <div className='text_name'>
                        <div className="one">
                            <span>Telofono</span>
                            <span>RUT/Pasaporte/DNI</span>
                            <span>Genero</span>
                        </div>
                        <div className="two">
                            <span>998811331</span>
                            <span>23.435.435.6</span>
                            <span>Masculino</span>
                        </div>
                    </div>
                    <div className='sectext'>
                        <div className='secone'>
                            <span>Saldo disponible</span>
                        </div>
                        <div className='sectwo'>
                            <span>CLP $0</span>
                        </div>
                    </div>

                </div>
                <div className='card_thre'>
                    <div className='card_one'>
                        <div className='ccimg'>
                            <img src="/images/generic/Screenone.png" alt="" />
                            <div className="cctext">
                                <span>Recargr Waller</span>
                            </div>
                        </div>
                    </div>
                    <div className='card_two'>
                        <div className='ccimg'>
                            <img src="/images/generic/Screentwo.png" alt="" />
                            <div className="cctext">
                                <span>Compartr saldo</span>
                            </div>
                        </div>
                    </div>
                    <div className='card_three'>
                        <div className='ccimg'>
                            <img src="/images/generic/Screenthree.png" alt="" />
                            <div className="cctext">
                                <span>club Muvify</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default index













