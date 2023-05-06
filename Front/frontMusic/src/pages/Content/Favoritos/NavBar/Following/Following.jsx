import styles from './Following.module.css'

function Following() {
    return (
        <>
            <h1>0 Seguidor</h1>

            <div className={styles.following}>
                <p>Não está seguindo ninguém ainda</p>
            </div>
        </>
    )
}

export default Following