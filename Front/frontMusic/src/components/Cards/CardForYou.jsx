import '../Content/Musica/Music'
import {ImPlay3} from 'react-icons/im'
import {FaDeezer} from 'react-icons/fa'


function CardForYou() {
	return (
		<div className="image-singer">
            <div className="image">
                <img src=""/>

                <div className="logo-daily">
                    <FaDeezer/> Daily
                </div>

                <div className="play-button">
                    <button>
                        <ImPlay3/>
                    </button>
                </div>
            </div>

            <div className="text">
                <p>Destacando Munhoz & Mariano, Gusttavo Lima, Jorge & Mateus, Henrique & Juliano</p>
            </div>
        </div>
	)
}

export default CardForYou
