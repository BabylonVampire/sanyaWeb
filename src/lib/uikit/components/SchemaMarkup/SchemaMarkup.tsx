import React from 'react';

interface ISchemaMarkupProps {
	pageType: 'Organization' | 'WebPage' | 'Product' | 'Article';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any;
}

export const SchemaMarkup: React.FC<ISchemaMarkupProps> = ({
	pageType,
	data,
}) => {
	const getSchemaData = () => {
		switch (pageType) {
			case 'Organization':
				return {
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: 'BRISTAN WERO',
					url: 'https://bristanwero.com/',
					logo: 'https://bristanwero.com/logo.png',
					description:
						'Производитель аксессуаров из натуральной кожи высокого качества. Вся продукция изготавливается на собственной фабрике.',
					contactPoint: {
						'@type': 'ContactPoint',
						telephone: '+7 (995) 919 94-49',
						contactType: 'customer service',
						email: 'bristan.wero@bk.ru',
						address: {
							'@type': 'PostalAddress',
							streetAddress: 'Варшавское шоссе 21-й км, с26',
							addressLocality: 'Москва',
							addressCountry: 'RU',
						},
					},
				};
			case 'Product':
				return {
					'@context': 'https://schema.org',
					'@type': 'Product',
					name: data.name,
					description: data.description,
					brand: {
						'@type': 'Brand',
						name: 'BRISTAN WERO',
					},
					image: data.image,
					offers: {
						'@type': 'Offer',
						price: data.price,
						priceCurrency: 'RUB',
						availability: 'https://schema.org/InStock',
					},
				};
			case 'Article':
				return {
					'@context': 'https://schema.org',
					'@type': 'Article',
					headline: data.title,
					description: data.description,
					author: {
						'@type': 'Organization',
						name: 'BRISTAN WERO',
					},
					datePublished: data.date,
					image: data.image,
				};
			default:
				return {
					'@context': 'https://schema.org',
					'@type': 'WebPage',
					name: 'BRISTAN WERO',
					description:
						'Производитель аксессуаров из натуральной кожи высокого качества. Вся продукция изготавливается на собственной фабрике.',
				};
		}
	};

	return (
		<script type="application/ld+json">
			{JSON.stringify(getSchemaData())}
		</script>
	);
};
