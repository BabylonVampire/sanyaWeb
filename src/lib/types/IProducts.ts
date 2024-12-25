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
