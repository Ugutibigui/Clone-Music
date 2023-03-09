import styles from './ButtonOption.module.css'

function ButtonOption({ activeScreen, setActive, title, icon, click, setScreen}) {
	
	return (
		<li className={activeScreen === title ? styles.activeButton : styles.buttonOption} onClick={() => {
			setScreen(click)
			setActive(title)
		}}>
			{icon({ size: 22 })}

			<h3> {title} </h3>
		</li>
	)
}

export default ButtonOption
