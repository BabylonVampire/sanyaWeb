export interface Spec {
	name: string;
	value: string;
}

export type Currencies = 'rub' | 'dollar';

export type Availability = 'предзаказ' | 'нет в наличии' | number | string;

export interface Price {
	date: Date;
	value: number;
	currency: Currencies;
}

export interface BindedProduct {
	id: string;
	title: string;
	price: Price;
}

export enum ESexTypes {
	MALE = 'Мужское',
	FEMALE = 'Женское'
}

export enum EProductCategory {
	SHOULDER_BAGS = "Сумки на плечо",
	WALLETS = "Кошельки",
	ACCESSORIES = "Ключница, обложка на паспорт, автодокументы",
	CARD_HOLDERS = "Картхолдеры",
	BACKPACKS = "Рюкзаки",
	BUSINESS_BRIEFCASES = "Деловые портфели",
	BUSINESS_CARD_HOLDERS = "Визитница",
	BAG = 'Чемодан',
}