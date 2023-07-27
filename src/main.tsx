import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import './i18n.js'

import { App } from './App'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Spinner } from './components'

import { persistor, store } from './store.ts'

import 'react-toastify/dist/ReactToastify.css'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter>
						<Suspense fallback={<Spinner />}>
							<App />
						</Suspense>
						<ToastContainer
							theme='light'
							position='top-right'
							draggable={false}
						/>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</ErrorBoundary>
	</React.StrictMode>
)
