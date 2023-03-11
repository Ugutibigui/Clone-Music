import { Link, useLocation } from 'react-router-dom'
import styles from './ButtonOption.module.css'

function ButtonOption({ title, icon, to }) {

	const { pathname } = useLocation()

	return (
		<li className={pathname === to ? `${styles.activeButton}` : `${styles.buttonOption}`} >
			<Link to={to}>
				{icon({ size: 22 })}

				<h3> {title} </h3>
			</Link>
		</li >
	)
}

export default ButtonOption
