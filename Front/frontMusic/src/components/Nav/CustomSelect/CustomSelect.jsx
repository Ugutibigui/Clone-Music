import { useState, useEffect, useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './CustomSelect.module.css'

function CustomSelect({ array }) {
    const [selected, setSelected] = useState(false)
    const [textItem, setTextItem] = useState(array[0])

    const ulRef = useRef(null)

    const toggleSelected = () => setSelected(!selected)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (ulRef.current && !ulRef.current.contains(event.target)) {
                setSelected(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [ulRef])

    return (
        <div className={styles.fieldSelected}>
            <button onClick={toggleSelected}>
                {textItem}
                <IoIosArrowDown />
            </button>
            {selected && (
                <ul className='ul' ref={ulRef}>
                    {array.map((item, index) => (
                        <li key={index} onClick={() => setTextItem(item)} className={textItem === item ? styles.selected : styles.deselect}>
                             {item} 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CustomSelect
