import { ReactNode } from 'react'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { LiaMedalSolid } from 'react-icons/lia'
import { MdOutlinePayment } from 'react-icons/md'

import {
	BasketPage,
	CategoriesPage,
	CategoryPage,
	LoginPage,
	ProfilePage,
	RegisterPage,
	WelcomePage,
} from '../pages'

type Routes = {
	path: string
	element: ReactNode
}

export const publicRoutes: Routes[] = [
	{
		path: '/',
		element: <WelcomePage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
]

export const privateRoutes: Routes[] = [
	{
		path: '/categories',
		element: <CategoriesPage />,
	},
	{
		path: '/categories/:id',
		element: <CategoryPage />,
	},
	{
		path: '/basket',
		element: <BasketPage />,
	},
	{
		path: '/profile',
		element: <ProfilePage />,
	},
]

type MenuRoute = {
	label: string
} & Routes

export const menuRoutes: MenuRoute[] = [
	{
		path: '/profile',
		element: <AiOutlineUser color='#fff' size='1.8rem' />,
		label: 'Profile',
	},
	{
		path: '/wishlist',
		element: <AiOutlineHeart color='#fff' size='1.8rem' />,
		label: 'Wishlist',
	},
	{
		path: '/loyalty-points',
		element: <LiaMedalSolid color='#fff' size='1.8rem' />,
		label: 'Loyalty Points',
	},
	{
		path: '/payment-methods',
		element: <MdOutlinePayment color='#fff' size='1.8rem' />,
		label: 'Payment Methods',
	},
]
