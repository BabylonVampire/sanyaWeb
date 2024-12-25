import { Currencies } from '../types';

export const getPriceWithCurrency = (
	price: number | undefined,
	currency: Currencies | undefined
): string => {
	if (!price || !currency) return '';
	switch (currency) {
		case 'rub':
			return `${price} ₽`;
		case 'dollar':
			return `$${price}`;
		default:
			return `${price}`;
	}
};
