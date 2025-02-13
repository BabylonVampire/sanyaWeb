import { Availability, EProductCategory, ESexTypes } from './IProducts';
import { TArticle } from './TArticle';

export type TProduct = {
	id: number;
	images: string[];
	actions?: {
		icon: React.ReactNode;
		key: string;
		onClick?: () => void;
	}[];
	sex: ESexTypes,
	category: EProductCategory,
	title: string;
	description?: TArticle;
	descriptionPreview?: string;
	availability?: Availability;
	characteristics?: { name: string; value: string }[];
};
