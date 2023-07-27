import { ChangeEvent, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { addSearchValue } from '../../redux/search/searchSlice'

import { useAppDispatch } from '../../hooks/store.hooks'

export const useSearch = () => {
	const [value, setValue] = useState('')
	const dispatch = useAppDispatch()
	const location = useLocation()

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setValue(value)
		dispatch(addSearchValue(value))
	}

	return { value, setValue, handleSearch, location }
}
