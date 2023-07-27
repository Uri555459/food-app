import { FC } from 'react'
import cn from 'clsx'

import { Basket, BurgerMenu, Menu } from '..'

import { useToggle } from '../../hooks/useToggle'
import { useAppSelector } from '../../hooks/store.hooks'
import { selectUser } from '../../redux/user/userSlice'
import { IClassName } from '../../types/global.types'

import styles from './Header.module.scss'

type Props = IClassName

export const Header: FC<Props> = ({ className }) => {
	const [active, setActive] = useToggle(false)
	const { accessToken } = useAppSelector(selectUser)

	return (
		<header className={cn(styles.header, className)}>
			<BurgerMenu active={active} setActive={setActive} />
			{accessToken && <Basket />}

			<Menu isShow={active} />
		</header>
	)
}
