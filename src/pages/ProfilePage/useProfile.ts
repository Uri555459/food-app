import { ChangeEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks'
import { selectUser, updateUser } from '../../redux/user/userSlice'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { MESSAGES } from '../../constants/messages.constants'
import { toast } from 'react-toastify'
import { userApi } from '../../api/user/user.api'

export const useProfile = () => {
	const [newFullName, setNewFullName] = useState<string>('')
	const [newEmail, setNewEmail] = useState<string>('')
	const [newAddress, setNewAddress] = useState<string>('')

	const dispatch = useAppDispatch()
	const { id } = useAppSelector(selectUser)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit: SubmitHandler<FieldValues> = async data => {
		if (!newFullName && !newEmail && !newAddress) {
			return toast.error(MESSAGES.profileErrorUpdated)
		}

		userApi.updateUser(id, data)
		dispatch(updateUser(data))
		toast.success(MESSAGES.profileSuccessUpdated)
		setNewFullName('')
		setNewEmail('')
		setNewAddress('')
	}

	const changeHandler = (event: ChangeEvent) => {
		const target = event.target as HTMLFormElement
		const value = target.value
		const name = target.name

		switch (name) {
			case 'fullName':
				return setNewFullName(value)

			case 'email':
				return setNewEmail(value)

			case 'address':
				return setNewAddress(value)

			default:
				return ''
		}
	}

	return { register, handleSubmit, errors, changeHandler, onSubmit }
}
