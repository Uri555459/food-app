import { FC } from 'react'

import styles from './Search.module.scss'

export const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input type='text' placeholder='Search Menu' />
		</div>
	)
}
