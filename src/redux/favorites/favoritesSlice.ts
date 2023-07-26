import { createSlice } from '@reduxjs/toolkit'

import { IProduct } from '../../types/global.types'
import { RootState } from '../../store'
import { productApi } from '../../api/product/product.api'

interface State {
	favorites: IProduct[]
}

const initialState: State = {
	favorites: [],
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleToFavorites: (state, action) => {
			const candidate = state.favorites.find(
				item => item.id === action.payload.id
			)

			if (candidate) {
				productApi.removeToFavorites(action.payload.id)
				state.favorites = state.favorites.filter(
					item => item.id !== action.payload.id
				)
			} else {
				state.favorites = [...state.favorites, action.payload]
				productApi.addedToFavorites(action.payload.id)
			}
		},
	},
})

export const { toggleToFavorites } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer

export const selectFavorites = (state: RootState) => state.favorites.favorites
