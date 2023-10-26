import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaStarOfLife } from 'react-icons/fa'
import { useState } from 'react'
import ModalCopm from './ModalCopm'
import { Box, Button, Modal, Typography } from '@mui/material'
import { RxCross1 } from 'react-icons/rx'
import Backdrop from '@mui/material'

const Desuentos = () => {


    const pesos_content = [
        { id: 0, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/coppelia-icon.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle />, desc: "Promoción válida todos los días a través de previo contacto con ejecutiva asignada, indicando el nombre de Club Muvify vía correo electrónico. Beneficio es válido para clientes del programa Club Muvify. La entrega del beneficio se realiza a través de correo electrónico con la ejecutiva asignada, y es de exclusiva responsabilidad de comercial COMPANIA DE ASISTENCIA AL VIAJERO DE CHILE LIMITADA, no cabiéndole a Empresas GTP responsabilidad alguna en ello, ni en la ulterior atención que ello demande. Mantente informado de todas nuestras promociones vigentes en nuestra web, sección beneficios comercios asociados.Promoción válida todos los días a través de previo contacto con ejecutiva asignada, indicando el nombre de Club Muvify vía correo electrónico. Beneficio es válido para clientes del programa Club Muvify. La entrega del beneficio se realiza a través de correo electrónico con la ejecutiva asignada, y es de exclusiva responsabilidad de comercial COMPANIA DE ASISTENCIA AL VIAJERO DE CHILE LIMITADA, no cabiéndole a Empresas GTP responsabilidad alguna en ello, ni en la ulterior atención que ello demande. Mantente informado de todas nuestras promociones vigentes en nuestra web, sección beneficios comercios asociados.Promoción válida todos los días a través de previo contacto con ejecutiva asignada, indicando el nombre de Club Muvify vía correo electrónico. Beneficio es válido para clientes del programa Club Muvify. La entrega del beneficio se realiza a través de correo electrónico con la ejecutiva asignada.", },
        { id: 1, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/assist-card-icon.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle />, title: "2nd  model" },
        { id: 2, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/eventos-icon.svg", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle />, title: "3rd model" },
        { id: 3, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/eventos-icon.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle />, title: "4th model" },
        { id: 4, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/ibis-logo-icon.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle />, title: "5th model" },
        { id: 5, image: "https://turbusdweb.kupos.cl/images/club-muvify/exclusive-discounts/tarragona-icon-new.svg", star_text: "INCIAL", star_text_extra: "EXTRA", star_text_pro: "PRO", star: <FaStarOfLife className='star_icon' />, detail_icon: <AiOutlineInfoCircle />, title: "6th model" }
    ]

    const PesosContent = ({ item }) => {
        // const [showModel, setShowModel] = useState(false)
        const [open, setOpen] = useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            height: '60%',
            innerHeight: 200,

            bgcolor: 'background.paper',
            // border: '0.2px solid #000',
            outline: 'none',
            boxShadow: 20,
            borderRadius: 5,
            pt: 2,
            px: 4,
            pb: 3,
        };

        return (
            <div className='Perteneces_container'>
                <img src={item.image} className='ibis_img' alt="" />
                <div className='star-text'>

                    {item.star_text && <span>  {item.star} {item.star_text}</span>}
                    {item.star_text_extra && <span>{item.star} {item.star}{item.star_text_extra}</span>}
                    {item.star_text_pro && <span>{item.star}{item.star}{item.star}{item.star_text_pro}</span>}
                </div >
                <span className='details_icon' onClick={() => { handleOpen() }}>{item.detail_icon}</span>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    disableEscapeKeyDown
                >
                    <Box sx={style} id="box">
                        <Typography id="modal-modal-title" variant="h6" component="h2">  <RxCross1 onClick={handleClose} /></Typography>
                        <Typography>
                            <ModalCopm data={item} />
                        </Typography>

                    </Box>
                </Modal>
            </div >)
    }
    return (


        <div className={"title_content mb-40"}>
            <div className='heading  text-align font16 bold-text  mb-20'>Descuentos exclusivos</div>
            <div className='desc font11'>
                Accede a descuentos exclusivos por ser parte del programa Muvify.
            </div>
            <div className="pesos_cards_container">
                {pesos_content?.map((item) => <PesosContent item={item} />)}

            </div>

            {/* <Model showModel={showModel} setShowModel={setShowModel} data={selectedItem.desc} /> */}

            {/* {showModel && <Model setShowModel={setShowModel} data={selectedItem.desc} />} */}
        </div>
    )
}

export default Desuentos;
