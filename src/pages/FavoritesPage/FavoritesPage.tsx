import { FC } from 'react'

import { IProduct } from '../../types/global.types'
import {
	BottomNav,
	PageInfo,
	ProductCard,
	ProductCardList,
} from '../../components'

import { useAppSelector } from '../../hooks/store.hooks'
import { selectFavorites } from '../../redux/favorites/favoritesSlice'

import styles from './FavoritesPage.module.scss'

export const FavoritesPage: FC = () => {
	const favorites = useAppSelector<IProduct[]>(selectFavorites)

	return (
		<div className={styles.categoryPage}>
			<PageInfo
				title='Main Dishes'
				description='Find the best selling dishes. All meals are prepared fresh.'
			/>
			<div className={styles.categoryPageWrap}>
				<div className='inner'>
					<ProductCardList>
						{favorites.length > 0 &&
							favorites.map(product => (
								<ProductCard key={product.id} product={product} />
							))}
					</ProductCardList>
				</div>
				<BottomNav />
			</div>
		</div>
	)
}
