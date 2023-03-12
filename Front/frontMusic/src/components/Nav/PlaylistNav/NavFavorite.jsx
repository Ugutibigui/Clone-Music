import { Link, useLocation } from 'react-router-dom'
import styles from './NavFavorite.module.css'

function NavFavorite({object}) {

    const { pathname } = useLocation()

    return(
        <li className={pathname === object.to ? styles.active : null }>
            <Link to={object.to} > {object.name} </Link>
        </li>
    )
}

export default NavFavorite