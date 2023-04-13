import PlaylistNav from '../PlaylistNav/PlaylistNav'

import styles from './CustomNav.module.css'

function CustomNav({ navigations, padding }) {
    return (
        <nav styles={{ padding: padding }}>
            <ul className={styles.nav}>
                {navigations.map((item, index) => (
                    <PlaylistNav object={item} key={index} />
                ))}
            </ul>
        </nav>
    )
}

export default CustomNav