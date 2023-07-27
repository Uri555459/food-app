import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { basketReducer } from './redux/basket/basketSlice'
import { userReducer } from './redux/user/userSlice'
import { favoritesReducer } from './redux/favorites/favoritesSlice'
import { searchReducer } from './redux/search/searchSlice'

const rootReducer = combineReducers({
	basket: basketReducer,
	user: userReducer,
	favorites: favoritesReducer,
	search: searchReducer,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
