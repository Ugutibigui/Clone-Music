import { Link, useLocation } from 'react-router-dom'

import styles from './NavButton.module.css'

function NavButton({ title, icon, to }) {

	const { pathname } = useLocation()

	return (
		<li className={(to.includes('favorite') ? pathname.includes(to) : pathname === to )  ? `${styles.activeButton}` : `${styles.button}`} >
			<Link to={to}>
				{icon({ size: 22 })}

				<h3> {title} </h3>
			</Link>
		</li >
	)
}

export default NavButton
