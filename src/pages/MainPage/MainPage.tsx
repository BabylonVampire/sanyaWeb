import React from 'react';
import styles from './MainPage.module.scss';
import HeroSection from './Sections/HeroSection/HeroSection';
import AboutSection from './Sections/AboutSection/AboutSection';
import VideoSection from './Sections/VideoSection/VideoSection';
import ProductsSection from './Sections/ProductsSection/ProductsSection';
import FAQSection from './Sections/FAQSection/FAQSection';
import { Helmet } from 'react-helmet';
import products from '../../db/products.json';
import { TProduct } from '../../lib';
import { SchemaMarkup } from '../../lib/uikit/components/SchemaMarkup/SchemaMarkup';

const MainPage = () => {
	return (
		<main className={styles.mainPage}>
			<Helmet>
				<title>Bristan Wero. Italian leather</title>
				<meta
					name="description"
					content="BRISTAN WERO – производитель премиальных аксессуаров из натуральной кожи. Кошельки, ремни, сумки ручной работы. Собственное производство в России."
				/>
				<SchemaMarkup pageType="Organization" />
			</Helmet>
			<HeroSection />
			<AboutSection
				label="О нас"
				description="BRISTAN WERO - производитель различных аксессуаров из
						натуральной кожи высокого качества. Вся продукция
						производится на собственной фабрике."
				img="http://gafurov-prod-test.online/assets/about.webp"
				position="row"
			/>
			<div className={styles.divider} />
			<AboutSection
				label="Изделие по вашим фотографиям и эскизам"
				description="Если хотите разработать свое изделие, то мы сможем вам помочь. Это может быть сумка, сложный кардхолдер или портмоне, рюкзаки или ремень из экзотической кожи. В стоимость входит полный цикл разработки и работы команды из менеджера, ведущего заказ, проектировщика и мастера (согласование деталей, проектирование, иногда прототипирование, поиск и закупка материалов, работа и другие расходы)"
				img="http://gafurov-prod-test.online/assets/individual.webp"
				position="row-reverse"
			/>
			<div className={styles.divider} />

			<VideoSection />
			<div className={styles.divider} />
			<ProductsSection
				title="Популярные товары"
				productsList={products as TProduct[]}
			/>
			<div className={styles.divider} />
			<FAQSection />
		</main>
	);
};

export default MainPage;
