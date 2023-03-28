import styles from './ArtistsGrid.module.css'

function ArtistsGrid() {
    return (
        <>
            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/8c5f0b42bc8fa4c3650be56df412c1c2/264x264-000000-80-0-0.jpg' id={`img${0}`} />
            </div>

            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/8c5f0b42bc8fa4c3650be56df412c1c2/264x264-000000-80-0-0.jpg' id={`img${1}`} />
            </div>

            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/8c5f0b42bc8fa4c3650be56df412c1c2/264x264-000000-80-0-0.jpg' id={`img${2}`} />
            </div>

            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/8c5f0b42bc8fa4c3650be56df412c1c2/264x264-000000-80-0-0.jpg' id={`img${3}`} />
            </div>

            <div className={styles.figureImage}>
                <img src='https://e-cdns-images.dzcdn.net/images/artist/8c5f0b42bc8fa4c3650be56df412c1c2/264x264-000000-80-0-0.jpg' id={`img${4}`} />
            </div>
        </>
    )
}

export default ArtistsGrid