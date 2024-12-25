import { Currencies } from './IProducts';
import { TArticle } from './TArticle';

export type TFirmware = {
	id: number;
	imageSrc?: string;
	actions?: {
		icon: React.ReactNode;
		key: string;
		onClick?: () => void;
	}[];
	tabContent: TArticle[];
	title: string;
	description?: TArticle;
	descriptionPreview: string;
	characteristics?: string[];
	downloadLink?: string;
	price?: {
		currency: Currencies;
		date: Date;
		value: number;
	};
};
