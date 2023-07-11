import { FC } from 'react'
import { IoClose } from 'react-icons/io5'

import { Typography } from '..'

import { IProduct } from '../../types/global.types'

import {
	minusProduct,
	plusProduct,
	removeFlagToBasket,
	removeToBasket,
} from '../../redux/basket/basketSlice'

import styles from './BasketItem.module.scss'
import { useAppDispatch } from '../../hooks/store.hooks'

interface Props {
	product: IProduct
}

export const BasketItem: FC<Props> = ({ product }) => {
	const dispatch = useAppDispatch()

	const totalPrice = product.price * product.count

	const removeToBasketHandler = () => {
		dispatch(removeFlagToBasket(product.id))
		dispatch(removeToBasket(product.id))
	}

	return (
		<div className={styles.basketItem}>
			<Typography tag='h4' size='sm' className={styles.basketItemTitle}>
				{product.title}
			</Typography>
			<div className={styles.basketItemInner}>
				<div className={styles.basketItemImageWrap}>
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<div className={styles.basketItemControls}>
					<button onClick={() => dispatch(minusProduct(product.id))}>-</button>
					<Typography tag='span' size='xs'>
						{product.count}
					</Typography>
					<button onClick={() => dispatch(plusProduct(product.id))}>+</button>
				</div>
				<div className={styles.basketItemPrice}>
					<Typography tag='span' size='lg'>
						${totalPrice}
					</Typography>
					<button onClick={removeToBasketHandler}>
						<IoClose size='1.5rem' color='#EF0B0B' />
					</button>
				</div>
			</div>
		</div>
	)
}
