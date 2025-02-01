import { Availability, Currencies } from './IProducts';
import { TArticle } from './TArticle';

export type TProduct = {
	id: number;
	images: string[];
	actions?: {
		icon: React.ReactNode;
		key: string;
		onClick?: () => void;
	}[];
	title: string;
	description?: TArticle;
	descriptionPreview?: string;
	price?: {
		currency: Currencies;
		date: string;
		value: number;
	};
	hit?: boolean;
	availability?: Availability;
	bindedProducts?: TProduct[];
	characteristics?: { name: string; value: string }[];
	tabContent?: TArticle[];
};
