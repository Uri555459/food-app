import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { Button, Input, Logo, Social, Typography } from '../../components'

import { addUser, selectUser } from '../../redux/user/userSlice'

import styles from './LoginPage.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks'
import { authApi } from '../../api/auth/auth.api'
import { MESSAGES } from '../../constants/messages.constants'

export const LoginPage: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { accessToken } = useAppSelector(selectUser)

	useEffect(() => {
		if (accessToken) return navigate('/categories')
	}, [accessToken, navigate])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit: SubmitHandler<FieldValues> = async data => {
		const res = await authApi.login(data)
		if (typeof res === 'string') return toast.error(res)
		toast.success(`User: ${res.user.fullName}, you have successfully logged on`)
		const { user, accessToken } = res
		dispatch(addUser({ ...user, accessToken }))
		navigate('/categories')
	}

	return (
		<div className={styles.loginPage}>
			<Logo className={styles.loginPageLogo} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					name='email'
					placeholder='Email'
					register={register}
					message={MESSAGES.emailIsRequired}
					error={errors.email?.message}
				/>
				<Input
					type='password'
					name='password'
					placeholder='Password'
					register={register}
					message={MESSAGES.passwordIsRequired}
					error={errors.password?.message}
				/>

				<Link to='#'>
					<Typography tag='span' size='xs'>
						Forgot Password?
					</Typography>
				</Link>
				<Button type='button' className={styles.loginPageButton}>
					Eat Away!
				</Button>
				<Typography tag='span' size='xs'>
					Sign in with
				</Typography>
				<Social />
			</form>
			<Button
				className={styles.loginPageSignUpButton}
				type='link'
				path='/register'
			>
				<MdOutlineKeyboardArrowUp size='2rem' />
				Sign Up
			</Button>
		</div>
	)
}
