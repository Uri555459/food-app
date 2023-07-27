import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cn from 'clsx'

import type { IProduct } from '../../types/global.types'
import {
	BottomNav,
	PageInfo,
	ProductCard,
	ProductCardList,
} from '../../components'
import { productApi } from '../../api/product/product.api'

import { useAppSelector } from '../../hooks/store.hooks'
import { selectSearch } from '../../redux/search/searchSlice'

import { search } from '../../utils/search'

import styles from './CategoryPage.module.scss'

const CategoryPage: FC = () => {
	const categoryId = useParams().id
	const [products, setProducts] = useState<IProduct[]>([])
	const searchValue = useAppSelector(selectSearch)

	useEffect(() => {
		if (categoryId && !searchValue) {
			productApi
				.getProductsByCategoryId(categoryId)
				.then(data => setProducts(data))
		} else if (categoryId && searchValue) {
			search(
				`/products?categoryId=${categoryId}&title_like=${searchValue}`
			).then(data => setProducts(data))
			setProducts(
				products.filter(product =>
					product.title.toLowerCase().includes(searchValue)
				)
			)
		}
	}, [categoryId, searchValue])

	return (
		<div className={styles.categoryPage}>
			<PageInfo
				title='Main Dishes'
				description='Find the best selling dishes. All meals are prepared fresh.'
			/>
			<div className={cn(styles.categoryPageWrap, 'flexCol')}>
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

export default CategoryPage
