import './CardHighlight.css'
import { ImPlay3 } from 'react-icons/im'


function CardHighlight() {
    return (
        <div className='highlight'>
            <img src="https://e-cdns-images.dzcdn.net/images/misc/92e6a428a32c3ccfba0959e740411f69/0x711-000000-80-0-0.jpg" alt="Destaques" />

            <div className="play-button-highlight">
                <button>
                    <ImPlay3 />
                </button>
            </div>
        </div>
    )
}

export default CardHighlight
