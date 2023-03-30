import styles from './ArtistsGrid.module.css'

function ArtistsGrid() {
    return (
        <>
            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/6f797dbd305547a2b793858497ed0ecd/162x162-000000-80-0-0.jpg' id={`img${0}`} />
            </div>

            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/62e6edfaf5461eeb5b7310903229607a/264x264-000000-80-0-0.jpg' id={`img${1}`} />
            </div>

            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/ba30ff888a06c1253f9138f7a49e0ff2/264x264-000000-80-0-0.jpg' id={`img${2}`} />
            </div>

            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/7260526934f80aab3f3c37221b9132ca/264x264-000000-80-0-0.jpg' id={`img${3}`} />
            </div>

            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/a143873fc7a5984edc629eadd5856861/264x264-000000-80-0-0.jpg' id={`img${4}`} />
            </div>
        </>
    )
}

export default ArtistsGrid