import { useState, useRef } from 'react';

import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

import './Channel.css'

function Channel(props) {

    const h3 = (props) => {
        if (props.h3) {
            return <h3>{props.h3}</h3>
        }
    }    

    const [currentIndex, setCurrentIndex] = useState(0);
    const carrosel = useRef(null)

    const handlePrev = () => {
        console.log(carrosel.current.scrollLeft -= carrosel.current.offsetWidth)
    }

    const handleNext = () => {
        console.log(carrosel.current.scrollRight += carrosel.current.offsetWidth)
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
                        <button id='button-left' onClick={handlePrev} ><AiOutlineLeft /></button>
                        <button id='button-right' onClick={handleNext}><AiOutlineRight /></button>
                    </div>
                </div>

                <div className="gallery" >
                    <div className="carrosel" ref={carrosel}>
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Channel
