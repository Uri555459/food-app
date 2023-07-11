import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { IProduct } from '../../types/global.types'
import { RootState } from '../../store'
import { getTotalPrice } from '../../utils/getTotalPrice'
import { productApi } from '../../api/product/product.api'

interface State {
	basket: IProduct[]
	totalPrice: number
}

const initialState: State = {
	basket: [],
	totalPrice: 0,
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, action: PayloadAction<IProduct>) => {
			const candidate = state.basket.find(item => item.id === action.payload.id)

			if (!candidate) {
				state.basket = [...state.basket, action.payload]
			}

			getTotalPrice(state)
		},

		addedFlagToBasket: (_, action: PayloadAction<number>) => {
			productApi.addedFlagToBasket(action.payload)
		},

		removeFlagToBasket: (_, action: PayloadAction<number>) => {
			productApi.removeFlagToBasket(action.payload)
		},

		plusProduct: (state, action: PayloadAction<number>) => {
			const newBasket = state.basket.map(product => {
				if (product.id === action.payload) {
					product.count += 1
					return product
				}
				return product
			})

			state.basket = newBasket
			getTotalPrice(state)
		},

		minusProduct: (state, action: PayloadAction<number>) => {
			const product = state.basket.find(
				product => product.id === action.payload
			)

			if (product) {
				if (product.count === 0) {
					return state
				}
				product.count -= 1
				getTotalPrice(state)
			}
		},

		removeToBasket: (state, action: PayloadAction<number>) => {
			const productRemove = state.basket.find(
				product => product.id === action.payload
			)
			if (productRemove) {
				const newBasket = state.basket.filter(
					product => product.id !== action.payload
				)
				state.basket = newBasket
				getTotalPrice(state)
				toast.success(`Product: ${productRemove.title}. Removed from the cart.`)
			}
		},
	},
})

export const {
	addToBasket,
	plusProduct,
	minusProduct,
	removeToBasket,
	addedFlagToBasket,
	removeFlagToBasket,
} = basketSlice.actions
export const basketReducer = basketSlice.reducer

export const selectBasket = (state: RootState) => state.basket.basket
export const selectTotalPrice = (state: RootState) => state.basket.totalPrice
