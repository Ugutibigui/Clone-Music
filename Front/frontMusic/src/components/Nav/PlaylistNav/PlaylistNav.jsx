import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './PlaylistNav.module.css'

function PlaylistNav({object}) {

    const { pathname } = useLocation()
    useEffect(() => {
        console.log(pathname)
    })

    return(
        <li className={pathname === object.to ? styles.active : null }>
            <Link to={object.to} > {object.name} </Link>
        </li>
    )
}

export default PlaylistNav