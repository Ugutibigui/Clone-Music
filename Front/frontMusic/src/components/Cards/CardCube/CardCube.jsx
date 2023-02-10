import { useState } from 'react'
import './CardCube.css'
import { ImPlay3 } from 'react-icons/im'
import { FiHeart } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'

function CardCube(props) {

    const [className, setClassName] = useState('btn');

    const handleMouseEnter = () => {
        setClassName('add-button');
    };

    const handleMouseLeave = () => {
        setClassName('btn');
    };

    return (
        <div className="image-cube">
            <div className="image-end">
                <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                src='https://e-cdns-images.dzcdn.net/images/playlist/6ebfed888b3b116667d2b2897c995f29/264x264-000000-80-0-0.jpg' alt="Artista" />

                <div className="play-button-cube">
                    <button>
                        <ImPlay3 />
                    </button>

                    <button className={className}>
                        <FiHeart />
                    </button>

                    <button className={className}>
                        <BsThreeDots />
                    </button>
                </div>
            </div>

            <span>Top 50 Sertanejo</span>

            <p>911.800 fãs</p>
        </div>
    )
}
export default CardCube
