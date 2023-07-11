import { FC } from 'react'
import { FaArrowRight } from 'react-icons/fa'

import { Button, Logo } from '../../components'
import { Typography } from '../../components'

import styles from './WelcomePage.module.scss'

export const WelcomePage: FC = () => {
	return (
		<div className={styles.welcomePage}>
			<Logo />
			<div className={styles.welcomePageInner}>
				<Typography className={styles.welcomePageTitle} tag='h1' size='lg'>
					Welcome to WaraChow
				</Typography>
				<Typography tag='p' size='sm'>
					Order the best meals in Lagos and have them delivered to your doorstep
					in little or no time. Doesn’t that sound delicious???
				</Typography>

				<Button path='/login' className={styles.link} type='link'>
					<FaArrowRight color='#6A6A6A' size='1.2rem' />
				</Button>
			</div>
		</div>
	)
}
