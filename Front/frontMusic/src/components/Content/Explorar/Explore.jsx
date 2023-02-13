import './Explore.css'

import CardCategorie from '../../Cards/CardCategorie/CardCategorie'

const AddCards = (amount) => {
    let list = []
    for (let i = 0; i < amount; i++) {
        list.push(
            <li>
                <CardCategorie />
            </li>
        )
    }
    return list
}

function Explore(props) {
    return (
        <div className='info-content'>
            <div className="title">
                <h2>Todos os Canais</h2>
            </div>

            <div className="explore-container">
                <h2>Categorias</h2>

                <ul>
                    {AddCards(29)}
                </ul>
            </div>

            <div className="explore-container">
                <h2>Gêneros</h2>

                <ul>
                    {AddCards(38)}
                </ul>
            </div>

            <div className="explore-container">
                <h2>Podscasts por categoria</h2>

                <ul>
                    {AddCards(39)}
                </ul>
            </div>
        </div>
    )
}

export default Explore
