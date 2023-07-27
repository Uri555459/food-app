import { FC, useEffect, useState } from 'react'
import cn from 'clsx'

import { BackToTop, CategoryCard, PageInfo } from '../../components'

import { ICategory } from '../../types/global.types'

import { productApi } from '../../api/product/product.api'

import { useAppSelector } from '../../hooks/store.hooks'
import { selectSearch } from '../../redux/search/searchSlice'
import { search } from '../../utils/search'

import styles from './CategoriesPage.module.scss'

const CategoriesPage: FC = () => {
	const [categories, setCategories] = useState<ICategory[]>([])
	const searchValue = useAppSelector(selectSearch)

	useEffect(() => {
		if (!searchValue) {
			productApi.getCategories().then(data => setCategories(data))
		} else {
			search(`/categories?title_like=${searchValue}`).then(data =>
				setCategories(data)
			)
		}
	}, [searchValue])

	return (
		<div className={cn(styles.categoriesPage, 'flexCol')}>
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

export default CategoriesPage
