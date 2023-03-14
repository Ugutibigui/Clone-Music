import { IoIosArrowDown } from 'react-icons/io'
import styles from './CustomSelect.module.css'

function CustomSelect({ text }) {
    return (
        <button id={styles.select}>
            {text}
            <IoIosArrowDown />
        </button>
    )
}

export default CustomSelect