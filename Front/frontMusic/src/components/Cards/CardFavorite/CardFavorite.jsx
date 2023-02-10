import { useState } from 'react';
import './CardFavorite.css'
import { ImPlay3 } from 'react-icons/im'
import { FaHeart } from 'react-icons/fa'

function CardFavorite(props) {

    const [className, setClassName] = useState('btn');

    const ShowButtons = () => {
        setClassName('add-button');
    };

    const HideButtons = () => {
        setClassName('btn');
    };

    return (
        <div className="image-round">
            <div className="image-center">
                <img 
                onMouseEnter={ShowButtons}
                onMouseLeave={HideButtons} 
                src='https://e-cdns-images.dzcdn.net/images/artist/a9cb605a0b64f652ec004187aba94ad8/264x264-000000-80-0-0.jpg' alt="Artista" />

                <div className="buttons-round">
                    <button className={className}>
                        <ImPlay3 />
                    </button>

                    <button className={className}>
                        <FaHeart id='hearth'/>
                    </button>
                </div>
            </div>

            <span>Gusttavo Lima</span>

            <p>7.137.751 fãs</p>
        </div>
    )
}

export default CardFavorite
