import styles from './ButtonOption.module.css'

function ButtonOption({title, icon, click, setScreen}) {

	return (
		<li className={styles.buttonOption} onClick={() => setScreen(click)}>
			{icon({ size: 22 })}

			<h3> {title} </h3>
		</li>
	)
}

export default ButtonOption
