import styles from'./CategorieCard.module.css'

function CategorieCard() {
    return (
        <div className={styles.categorie}>
            <img src="https://e-cdns-images.dzcdn.net/images/misc/000b70ae027be0afc4d60e16a782b9a4/134x264-000000-80-0-0.jpg" alt="Categoria" />

            <p>Lançamentos</p>
        </div>
    )
}

export default CategorieCard
