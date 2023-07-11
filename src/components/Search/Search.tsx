import { FC } from 'react'
import { CiSearch } from 'react-icons/ci'

import styles from './Search.module.scss'

export const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input type='text' placeholder='Search Menu' />
			<CiSearch color='#5D5959' size='1.3rem' />
		</div>
	)
}
