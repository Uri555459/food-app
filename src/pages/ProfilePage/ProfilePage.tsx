import { ChangeEvent, FC, useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import { Button, LayoutDetails, Typography } from '../../components'

import { selectUser } from '../../redux/user/userSlice'
import { useAppSelector } from '../../hooks/store.hooks'

import styles from './ProfilePage.module.scss'

export const ProfilePage: FC = () => {
	const [newEmail, setNewEmail] = useState<string>('')
	const [newAddress, setNewAddress] = useState<string>('')
	const { fullName, email, address } = useAppSelector(selectUser)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit: SubmitHandler<FieldValues> = async data => {
		console.log(data)
	}

	const changeHandler = (event: ChangeEvent) => {
		const target = event.target as HTMLFormElement

		if (target.name === 'email') {
			setNewEmail(target.value)
		}

		if (target.name === 'address') {
			setNewAddress(target.value)
		}
	}

	return (
		<div className={styles.profilePage}>
			<LayoutDetails title='Profile'>
				<div className={styles.profilePageImageWrap}>
					<img src='/images/avatar.png' alt='' />
				</div>
				<Typography tag='h1' size='xl' className={styles.title}>
					{fullName}
				</Typography>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.inputWrap}>
						<input
							className={styles.input}
							{...register('email', { required: '' })}
							name='email'
							placeholder='Email'
							type='email'
							value={newEmail ? newEmail : email}
							onChange={changeHandler}
						/>
						{errors.email ? (
							<Typography tag='span' size='xs' className={styles.error}>
								<>{errors.email.message}</>
							</Typography>
						) : null}
					</div>
					<div className={styles.inputWrap}>
						<textarea
							className={styles.input}
							{...register('address', { required: '' })}
							name='address'
							placeholder='Address'
							value={newAddress ? newAddress : address}
							onChange={changeHandler}
							rows={5}
						>
							{address ? address : null}
						</textarea>
						{errors.email ? (
							<Typography tag='span' size='xs' className={styles.error}>
								<>{errors.email.message}</>
							</Typography>
						) : null}
					</div>
					<Button>Save</Button>
				</form>
			</LayoutDetails>
		</div>
	)
}
