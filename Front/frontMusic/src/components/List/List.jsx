import styles from './List.module.css'

function List({array, title}) {
    return (
        <div className={styles.infosList}>
            <span>{title}</span>

            <ul>
                {array.length > 0 ? ( array.map( (item, index) => <li key={index}>{item}</li> )) : null}
            </ul>
        </div>
    )
}

export default List
