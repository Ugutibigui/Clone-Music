import styles from './ButtonProfile.module.css'

import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react';

function ButtonProfile({ route, color, text, checkbox }) {

    const [classname, setClassName] = useState('')

    return (
        <Link to={route ? route : ''}>
            <div className={styles.buttonProfile} onMouseEnter={() => setClassName('add')} 
            onMouseLeave={() => setClassName('')}>
                <span style={{ color: color }} >{text}</span>

                {checkbox ? <input type="checkbox" /> : <span className={styles[classname]}> <IoIosArrowForward /> </span>}
            </div>
        </Link>
    )
}

export default ButtonProfile
