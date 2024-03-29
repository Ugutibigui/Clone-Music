import { RiSearchLine } from 'react-icons/ri'

import styles from './Search.module.css'

function Search({ size, placeholder, onChange }) {
    return (
        <div className={styles.search} style={{width: `${size}`}}>
            <button> <RiSearchLine /> </button>
            <input type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default Search