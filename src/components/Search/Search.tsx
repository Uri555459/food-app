import { FC, useEffect } from 'react'

import { useSearch } from './useSearch'
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks'
import { clearSearchValue, selectSearch } from '../../redux/search/searchSlice'

import styles from './Search.module.scss'

export const Search: FC = () => {
	const dispatch = useAppDispatch()
	const { value, setValue, handleSearch, location } = useSearch()
	const searchValue = useAppSelector(selectSearch)

	useEffect(() => {
		if (searchValue) {
			setValue(searchValue)
		}
	}, [searchValue, setValue])

	useEffect(() => {
		dispatch(clearSearchValue())
		setValue('')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, location.pathname])

	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='Search Menu'
				value={value}
				onChange={handleSearch}
			/>
		</div>
	)
}
