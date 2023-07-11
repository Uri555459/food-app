import { FC } from 'react'

import { Basket, BurgerMenu, Menu } from '..'

import { useToggle } from '../../hooks/useToggle'

import styles from './Header.module.scss'

export const Header: FC = () => {
	const [active, setActive] = useToggle(false)

	return (
		<header className={styles.header}>
			<BurgerMenu active={active} setActive={setActive} />
			<Basket />
			<Menu isShow={active} />
		</header>
	)
}
