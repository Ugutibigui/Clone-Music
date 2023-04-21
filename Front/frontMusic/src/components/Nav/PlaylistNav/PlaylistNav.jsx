import { Link, useLocation } from 'react-router-dom'

import styles from './PlaylistNav.module.css'

function PlaylistNav({object}) {

    const { pathname } = useLocation()

    return(
        <li className={pathname === object.to ? styles.active : styles.button }>
            <Link to={object.to} > {object.name} </Link>
        </li>
    )
}

export default PlaylistNav