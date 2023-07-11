import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

import App from './App.tsx'

import { persistor, store } from './store.ts'

import 'react-toastify/dist/ReactToastify.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<App />
					<ToastContainer
						theme='light'
						position='top-right'
						draggable={false}
					/>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
