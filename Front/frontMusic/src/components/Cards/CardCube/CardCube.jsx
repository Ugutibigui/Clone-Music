import './CardCube.css'
import { ImPlay3 } from 'react-icons/im'

function CardCube(props) {
    return (
        <div className="image-cube">
            <div className="image-end">
                <img src='https://e-cdns-images.dzcdn.net/images/playlist/6ebfed888b3b116667d2b2897c995f29/264x264-000000-80-0-0.jpg' alt="Artista" />

                <div className="play-button-end">
                    <button>
                        <ImPlay3 />
                    </button>
                </div>
            </div>

            <span>Top 50 Sertanejo</span>

            <p>911.800 fãs</p>
        </div>
    )
}
export default CardCube
