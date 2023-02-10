import './CardRadio.css'
import { ImPlay3 } from 'react-icons/im'

function CardRadio(props) {
	return (
		<div className='cardRadio'>
			<div className="radio-image">
                <img src="https://e-cdns-images.dzcdn.net/images/misc/3d25d3524c0628bb23e769c386542b87/264x264-000000-80-0-0.jpg" alt="Radio" />

                <div className="play-button-end">
                    <button>
                        <ImPlay3/>
                    </button>
                </div>
            </div>

            <span>Ao vivo</span>

            <div id='channel'>Antena 1</div>
		</div>
	)
}

export default CardRadio
