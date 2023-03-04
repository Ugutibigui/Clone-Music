import styles from './ButtonOption.module.css'

function ButtonOption({title, icon, click}) {

	return (
		<li className={styles.buttonOption}>
			{icon({ size: 22 })}

			<h3> {title} </h3>
		</li>
	)
}

export default ButtonOption
