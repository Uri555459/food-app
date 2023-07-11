import { FC } from 'react'

import styles from './Loader.module.scss'

export const Loader: FC = () => {
	return (
		<div className={styles['lds-ripple']}>
			<div></div>
			<div></div>
		</div>
	)
}
