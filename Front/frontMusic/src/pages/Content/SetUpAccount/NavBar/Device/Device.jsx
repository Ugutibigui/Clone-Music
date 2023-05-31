import styles from './Device.module.css'

const Device = () => {
    return (
        <div className={styles.rectangle}>
            <h1>No momento, não há nenhum dispositivo conectado à esta conta.</h1>

            <h2>Para adicionar um, faça login através do seu dispositivo no aplicativo Deezer.</h2>
        </div>
    )
}

export default Device