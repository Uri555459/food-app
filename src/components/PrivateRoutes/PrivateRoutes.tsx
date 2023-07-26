import { FC } from 'react'
import { selectUser } from '../../redux/user/userSlice'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks/store.hooks'

export const PrivateRoutes: FC = () => {
	const { accessToken } = useAppSelector(selectUser)

	return accessToken ? <Outlet /> : <Navigate to='/' />
}
