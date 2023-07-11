import { FC, useEffect, useState } from 'react'

import { BackToTop, CategoryCard, PageInfo } from '../../components'
import { ICategory } from '../../types/global.types'

import styles from './CategoriesPage.module.scss'
import { productApi } from '../../api/product/product.api'

export const CategoriesPage: FC = () => {
	const [categories, setCategories] = useState<ICategory[]>([])

	useEffect(() => {
		productApi.getCategories().then(data => setCategories(data))
	}, [])

	return (
		<div className={styles.categoriesPage}>
			<PageInfo
				title='Welcome'
				description='Homemade meals prepared with love. Richest ingredients. '
			/>
			<div className={'inner'}>
				{categories.length > 0 &&
					categories.map(category => (
						<CategoryCard key={category.title} category={category} />
					))}
			</div>
			<BackToTop />
		</div>
	)
}
