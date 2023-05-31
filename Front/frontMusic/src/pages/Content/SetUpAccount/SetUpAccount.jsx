import CustomNav from '../../../components/Nav/CustomNav/CustomNav'

import styles from './SetUpAccount.module.css'

const SetUpAccount = ({content}) => {

    const playlists = [
        { name: 'Minhas informações', to: '/account' },
        { name: 'Meus dispositivos conectados', to: '/account/device' },
        { name: 'Meus aplicativos', to: '/account/apps' }
    ]

    return (
        <div className={styles.infoContent}>
            <CustomNav navigations={playlists} padding='0'/>
            
            {content}
        </div>
    )
}

export default SetUpAccount