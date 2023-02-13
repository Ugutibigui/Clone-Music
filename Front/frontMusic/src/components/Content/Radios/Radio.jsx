import './Radio.css'
import {IoIosArrowDown} from 'react-icons/io'
import CardRadio from '../../Cards/CardRadio/CardRadio'

function Radio(props) {
    return (
        <div className='info-content'>
            <div className="radio-container">
                <h1>Rádios</h1>

                <button>
                    RECOMENDADO
                    <IoIosArrowDown/>
                </button>
            </div>

            <ul className="radio-content">
                {(() => {
                    let radioList = []
                    for (let i=0;i<100;i++) {
                        radioList.push(
                            <li>
                                <CardRadio/>
                            </li>
                        )
                    }
                    return radioList
                })()}
            </ul>

            <footer>
                <span>Não são as estações que você está procurando?</span>
                <p>Use a Busca para encontrar estações de rádio no mundo todo.</p>
            </footer>
        </div>
    )
}

export default Radio