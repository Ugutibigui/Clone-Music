import { Modal, Box } from '@mui/material';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'

import Button from '../../../components/Button/Button'

import styles from './ChoiceImage.module.css'

const ChoiceImage = ({ open, setOpen, setImagePlay }) => {

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    const images = [
        {
            src: "https://i1.sndcdn.com/artworks-000685095154-4k3vjl-t500x500.jpg",
            alt: "Flowers"
        },
        {
            src: "https://i.pinimg.com/736x/54/ab/61/54ab611618836dc924ac00c96cf163c8.jpg",
            alt: "skull"
        },
        {
            src: "https://pm1.narvii.com/6556/e67e12e71647a676580e04dff593d96cfb047f29_00.jpg",
            alt: "Neon Flowers"
        },
        {
            src: "https://uploads.spiritfanfiction.com/historias/capas/202003/surtada-18684718-060320201350.jpg",
            alt: "Diable"
        },
        {
            src: "https://wallpapers.com/images/hd/pink-city-axrrwccug0bw0o72.jpg",
            alt: "City"
        },
        {
            src: "https://i.pinimg.com/originals/8c/2e/d1/8c2ed16239536f75347e8b159df6eac0.png",
            alt: "Japanese"
        },
        {
            src: "https://i.scdn.co/image/ab67706c0000da84f269496a0fca5ae1ab45b14a",
            alt: "Rock"
        },
        {
            src: "https://img.freepik.com/fotos-premium/ia-generativa-uma-menina-ou-mulher-de-moda-de-anime-de-neon-gamer-usando-fones-de-ouvido-perdidos-em-seu-fundo-abstrato-de-musica-que-evoca-a-sensacao-de-diferentes-generos-de-conceito-de-musica-de-banner-de-musica_620624-8916.jpg?w=2000",
            alt: "Anime"
        }
    ]

    const [chosenImage, setChosenImage] = useState('')

    return (
        <Modal className={styles.modalContainer} open={open} onClose={() => setOpen(false)}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition>
            <Box className={styles.boxContainer} style={style}>
                <div className={styles.closeBtn}>
                    <button onClick={() => setOpen(false)}>
                        <AiOutlineClose size={20} color='gray' />
                    </button>
                </div>

                <h1> Escolha uma imagem </h1>

                <div className={styles.choiceImage}>
                    {images.map((image, index) => (
                        <img src={image.src} alt={image.alt} key={index}
                            className={`${styles.image} ${chosenImage === image.src ? styles.selected : ''}`}
                            onClick={() => setChosenImage(image.src)} />
                    ))}
                </div>

                <Button text='SELECIONAR' type='pink' typeButton='button' onClick={() => {
                    setImagePlay(chosenImage),
                    setOpen(false)
                }}/>
            </Box>
        </Modal>
    )
}

export default ChoiceImage