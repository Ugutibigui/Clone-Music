import { useState } from 'react';

import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

import './Channel.css'

function Channel(props) {                                                                    

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

                <div className="gallery" >
                    <div className="carousel">
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
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
