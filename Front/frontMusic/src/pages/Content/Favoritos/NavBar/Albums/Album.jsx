import styles from './Album.module.css'

function Album() {
    return (
        <>
            <h1 id={styles.album}>0 álbum</h1>

            <div className={styles.tracks}>
                <span>Sem faixas ainda</span>
                <p>Vamos encontrar algumas faixas para adicionar aqui.</p>
                <button>ADICIONAR FAIXAS</button>
            </div>
        </>
    )
}

export default Album