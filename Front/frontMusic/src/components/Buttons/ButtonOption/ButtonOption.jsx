import { Link } from 'react-router-dom'
import styles from './ButtonOption.module.css'

function ButtonOption({ title, icon, to }) {

	return (
		<Link to={to}>
			<li className={styles.buttonOption} >
				{icon({ size: 22 })}

				<h3> {title} </h3>
			</li>
		</Link>
	)
}

export default ButtonOption
