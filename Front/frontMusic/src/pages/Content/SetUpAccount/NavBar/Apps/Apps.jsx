import Button from '../../../../../components/Buttons/Button/Button'

import styles from './Apps.module.css'

const Apps = () => {
    return (
        <div className={styles.rectangle}>
            <h1>Você ainda não conectou nenhum aplicativo à Deezer.</h1>

            <hr />

            <Button text='ENCONTRE UM APLICATIVO' type='pink' width='auto'/>
        </div>
    )
}

export default Apps