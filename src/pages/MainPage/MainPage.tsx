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

const MainPage = () => {
	return (
		<main className={styles.mainPage}>
			<Helmet>
				<title>Bristan Wero. Italian leather</title>
				<meta
					name="description"
					// content="Оборудование для майнинга. Предлагаем нашим клиентам купить оборудование для майнинга биткоина и других криптовалют по выгодным ценам. Доставка из Китая в Москву, Санкт-Петербург и другие города России. Страхование грузов."
				/>
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
			<ProductsSection
				title="Популярные товары"
				productsList={products as TProduct[]}
			/>
			<AboutSection
				style={{ marginBottom: '50px' }}
				label="Индивидуальный заказ. Изделие по вашим фотографиям и эскизам"
				description="Если хотите разработать свое изделие, то мы сможем вам помочь. Это может быть сумка, сложный кардхолдер или портмоне, рюкзаки или ремень из экзотической кожи. В стоимость входит полный цикл разработки и работы команды из менеджера, ведущего заказ, проектировщика и мастера (согласование деталей, проектирование, иногда прототипирование, поиск и закупка материалов, работа и другие расходы)"
				img="http://gafurov-prod-test.online/assets/about.webp"
				position="row-reverse"
			/>
			<VideoSection />
			<FAQSection />
		</main>
	);
};

export default MainPage;
