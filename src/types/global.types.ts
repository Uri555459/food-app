export interface IUser {
	id: number
	email: string
	password?: string
	fullName: string
	address?: string
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
