import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IProduct } from '../../types/global.types'
import {
	BottomNav,
	PageInfo,
	ProductCard,
	ProductCardList,
} from '../../components'
import { productApi } from '../../api/product/product.api'

import styles from './CategoryPage.module.scss'

export const CategoryPage: FC = () => {
	const categoryId = useParams().id
	const [products, setProducts] = useState<IProduct[]>([])

	useEffect(() => {
		if (categoryId) {
			productApi
				.getProductsByCategoryId(categoryId)
				.then(data => setProducts(data))
		}
	}, [categoryId])

	return (
		<div className={styles.categoryPage}>
			<PageInfo
				title='Main Dishes'
				description='Find the best selling dishes. All meals are prepared fresh.'
			/>
			<div className={styles.categoryPageWrap}>
				<div className='inner'>
					<ProductCardList>
						{products.length > 0 &&
							products.map(product => (
								<ProductCard key={product.id} product={product} />
							))}
					</ProductCardList>
				</div>
				<BottomNav />
			</div>
		</div>
	)
}
