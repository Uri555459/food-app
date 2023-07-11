import { FC, useState } from 'react'

import { Button, Typography } from '..'

import { IProduct } from '../../types/global.types'

import { addToBasket, addedFlagToBasket } from '../../redux/basket/basketSlice'

import styles from './ProductCard.module.scss'
import { useAppDispatch } from '../../hooks/store.hooks'

interface Props {
	product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
	const [added, setAdded] = useState(false)
	const dispatch = useAppDispatch()

	const formatTitle = product.title.slice(0, 20) + '...'

	const addToBasketHandler = () => {
		dispatch(addedFlagToBasket(product.id))
		dispatch(addToBasket({ ...product, added: true }))
		setAdded(true)
	}

	return (
		<li className={styles.productCardWrap}>
			<div className={styles.productCard}>
				<div className={styles.productCardImageWrap}>
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<Typography className={styles.title}>{formatTitle}</Typography>
				<Button onClick={addToBasketHandler}>
					{product.added || added ? 'Added' : 'Buy Now'}
				</Button>
			</div>
		</li>
	)
}
