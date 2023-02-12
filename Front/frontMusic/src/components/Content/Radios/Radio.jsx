import './Radio.css'
import CardRadio from '../../Cards/CardRadio/CardRadio'

function Radio(props) {
    return (
        <div className='info-content'>
            <div className="radio-container">
                <h1>Rádios</h1>

                <button>RECOMENDADO</button>
            </div>

            <ul className="radio-content">
                {(() => {
                    let radioList = []
                    for (let i=0;i<=100;i++) {
                        radioList.push(
                            <li>
                                <CardRadio/>
                            </li>
                        )
                    }
                    return radioList
                })()}
            </ul>
        </div>
    )
}

export default Radio
