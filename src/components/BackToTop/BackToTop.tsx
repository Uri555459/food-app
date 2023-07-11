import { FC } from 'react'

import { Typography } from '..'

import backToTopImage from '../../assets/images/back-to-top.svg'

import styles from './BackToTop.module.scss'

export const BackToTop: FC = () => {
	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className={styles.backToTopWrap}>
			<button className={styles.backToTop} onClick={scrollToTopHandler}>
				<img src={backToTopImage} alt='Back To Top' />
				<Typography tag='span' size='xs'>
					back to top
				</Typography>
			</button>
		</div>
	)
}
