import styles from './ExploreContainer.module.css'
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

function ExploreContainer({h2, amount}) { // amount é temporario ate usar API
    return (
        <div className={styles.exploreContainer}>
            <h2>{h2}</h2>

            <ul>
                {AddCards(amount)}
            </ul>
        </div>
    )
}

export default ExploreContainer