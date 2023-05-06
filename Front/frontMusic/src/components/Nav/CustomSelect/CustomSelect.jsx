import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './CustomSelect.module.css'

function CustomSelect({ text, array }) {

    const [selected, setSelected] = useState(false)

    const toggleSelected = () => setSelected(!selected);

    return (
        <div className={styles.fieldSelected}>
            <button onClick={toggleSelected}>
                {text}
                <IoIosArrowDown />
            </button>

            {selected && (
                <ul>
                    {array.map((item, index) => (
                        <li key={index} > {item} </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CustomSelect