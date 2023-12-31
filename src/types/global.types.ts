export interface IBaseUser {
	id: number
	email: string
	fullName: string
	address?: string
	basketProductsIds?: number[] | []
}

export interface IUser extends IBaseUser {
	password: string
}

interface IBaseProduct {
	id: number
	title: string
	imageUrl: string
	peoples: number
	rating: number
	category: number
}

export interface IClassName {
	className?: string
}

export interface ICategory extends IBaseProduct {
	category: number
}

export interface IProduct extends IBaseProduct {
	categoryId: number
	count: number
	price: number
	added: boolean
	isFavorites: boolean
}
