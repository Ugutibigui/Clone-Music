import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'

import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

import './Channel.css'

function Channel(props) {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth) // scrollWidth - Tamanho maximo de width usado
    },[])                                                                       // offsetWidth - Tamanho visivel na tela

    const h3 = (props) => {
        if (props.h3) {
            return <h3>{props.h3}</h3>
        }
    }

    return (
        <section className='channel'>
            <div className="container">
                <div className="headers">
                    <div className="texts">
                        <h2>{props.h2}</h2>

                        {h3(props)}
                    </div>

                    <div className="sliders">
                        <button id='button-left'><AiOutlineLeft /></button>
                        <button id='button-right'><AiOutlineRight /></button>
                    </div>
                </div>

                <motion.div className="gallery" 
                whileTap={{cursor: 'grabbing'}}  // Quando clicar na div o cursor muda
                ref={carousel}>
                    <motion.div className="carousel"
                    drag='x' // Permite a iteração do usuario, arrastando uma div no eixo x
                    dragConstraints={{right: 0, left: -width}}>
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Channel
