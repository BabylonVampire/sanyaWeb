export type TArticle = {
	title: string;
	content: {
		type: 'title' | 'paragraph' | 'list';
		content: string[];
	}[];
};
