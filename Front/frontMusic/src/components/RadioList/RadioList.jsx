import CardCategorie from '../Cards/Categorie Card/CategorieCard'

import styles from './RadioList.module.css'

const AddCards = (amount) => {
    let list = []
    for (let i = 0; i < amount; i++) {
        list.push(
            <li key={i}>
                <CardCategorie />
            </li>
        )
    }
    return list
}

function RadioList({h2, amount}) { // amount é temporario ate usar API
    return (
        <div className={styles.exploreContainer}>
            <h2>{h2}</h2>

            <ul>
                {AddCards(amount)}
            </ul>
        </div>
    )
}

export default RadioList