import styles from './ButtonProfile.module.css'

import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'

function ButtonProfile({ route, color, text, checkbox }) {
    return (
        <Link to={route ? route : ''}>
            <div className={styles.buttonProfile}>
                <span style={{ color: color }} >{text}</span>

                {checkbox ? <input type="checkbox" /> : <span> <IoIosArrowForward /> </span>}
            </div>
        </Link>
    )
}

export default ButtonProfile
