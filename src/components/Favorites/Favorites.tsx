import { FC, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { IProduct } from '../../types/global.types'
import { useAppDispatch } from '../../hooks/store.hooks'
import { toggleToFavorites } from '../../redux/favorites/favoritesSlice'

import styles from './Favorites.module.scss'

interface Props {
	product: IProduct
}

export const Favorites: FC<Props> = ({ product }) => {
	const [isFavorites, setIsFavorites] = useState(false)
	const dispatch = useAppDispatch()

	const handleClick = () => {
		dispatch(toggleToFavorites({ ...product, isFavorites: !isFavorites }))
		setIsFavorites(!isFavorites)
	}

	return (
		<button className={styles.favorites} onClick={handleClick}>
			{isFavorites || product.isFavorites ? (
				<AiFillHeart color='#ff785b' />
			) : (
				<AiOutlineHeart />
			)}
		</button>
	)
}
