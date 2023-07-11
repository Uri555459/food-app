import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/global.types'

export interface State {
	id: number
	email: string
	fullName: string
	address?: string
	accessToken: string
	basket: IProduct[]
	totalPrice: number
}

const initialState: State = {
	id: 0,
	email: '',
	fullName: '',
	address: '',
	accessToken: '',
	basket: [],
	totalPrice: 0,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<State>) => {
			state.id = action.payload.id
			state.email = action.payload.email
			state.fullName = action.payload.fullName
			state.accessToken = action.payload.accessToken
		},
		logOut: state => {
			state.email = ''
			state.fullName = ''
			state.accessToken = ''
		},
	},
})

export const { addUser, logOut } = userSlice.actions

export const userReducer = userSlice.reducer

export const selectUser = (state: RootState) => state.user