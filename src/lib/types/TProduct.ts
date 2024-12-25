import { ECoins } from '../../db/mockData';
import { Availability, Currencies } from './IProducts';
import { TArticle } from './TArticle';

export enum EManufacturers {
	I_LOVE_CORE = 'Love Core',
	HALONG_MINING = 'Halong Mining',
	BITMAIN = 'Bitmain',
	CANAAN = 'Canaan',
	FUSION_SILICON = 'FusionSilicon',
	INNOSILICON = 'Innosilicon',
	PANGOLINMINER = 'Pangolinminer',
	ICERIVER = 'Iceriver',
	IPOLLO = 'IPollo',
}

export enum EProductsTypes {
	SHA_256 = 'SHA-256',
	SCRYPT = 'Scrypt',
	EQUIHASH = 'Equihash',
	ETHASH = 'Ethash',
	X11 = 'X11',
	LYRA2RE_V2 = 'Lyra2re v2',
	K_HEAVY_HASH = 'kHeavyHash',
}

export type TProduct = {
	id: number;
	imageSrc?: string;
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
	algorithm?: EProductsTypes;
	manufacturer?: EManufacturers;
	coin?: ECoins[];
	availability?: Availability;
	bindedProducts?: TProduct[];
	characteristics?: { name: string; value: string }[];
	tabContent?: TArticle[];
};
