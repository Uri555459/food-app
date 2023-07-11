import { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'clsx'
import { SlLogout } from 'react-icons/sl'

import { Typography } from '..'

import { logOut, selectUser } from '../../redux/user/userSlice'

import { menuRoutes } from '../../routes/routes'

import styles from './Menu.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks'

interface Props {
	isShow: boolean
}

export const Menu: FC<Props> = ({ isShow }) => {
	const dispatch = useAppDispatch()
	const fullName = useAppSelector(selectUser).fullName

	const logoutHandler = () => {
		dispatch(logOut())
	}

	return (
		<div
			className={cn(styles.menuInner, {
				[styles.menuInnerActive]: isShow,
			})}
		>
			<div className={styles.avatar}>
				<img src='/images/avatar.png' alt='Avatar' />
			</div>
			<Typography className={styles.menuUserName} size='sm'>
				{fullName}
			</Typography>
			<nav className={styles.menu}>
				{menuRoutes.length > 0 &&
					menuRoutes.map(item => (
						<Link key={item.label} className={styles.menuItem} to={item.path}>
							{item.element}
							<span className={styles.menuItemLabel}>{item.label}</span>
						</Link>
					))}

				<button className={styles.menuItem} onClick={logoutHandler}>
					<SlLogout color='#fff' size='1.8rem' />
					<span className={styles.menuItemLabel}>Logout</span>
				</button>
			</nav>
		</div>
	)
}
