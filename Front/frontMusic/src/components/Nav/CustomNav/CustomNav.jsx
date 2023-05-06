import { Link, useLocation } from 'react-router-dom'

import styles from './CustomNav.module.css'

function CustomNav({ navigations, padding }) {

    const { pathname } = useLocation()

    return (
        <nav style={{ padding: padding }}>
            <ul className={styles.nav}>
                {navigations.map((item, index) => (
                    <li className={pathname === item.to ? styles.active : styles.button } key={index}>
                         <Link to={item.to} > {item.name} </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default CustomNav