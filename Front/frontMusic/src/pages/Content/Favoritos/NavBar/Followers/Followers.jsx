import styles from './Followers.module.css'

function Followers() {
    return (
        <>
            <h1>0 Seguidor</h1>

            <div className={styles.followers}>
                <p>Sem seguidores ainda</p>
            </div>
        </>
    )
}

export default Followers