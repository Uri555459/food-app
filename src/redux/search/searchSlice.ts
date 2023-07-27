import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../store'

interface State {
	search: string
}

const initialState: State = {
	search: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		addSearchValue: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		clearSearchValue: state => {
			state.search = ''
		},
	},
})

export const { addSearchValue, clearSearchValue } = searchSlice.actions
export const searchReducer = searchSlice.reducer

export const selectSearch = (state: RootState) => state.search.search
