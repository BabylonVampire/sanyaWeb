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
	const hitProducts = (products as TProduct[]).filter(
		(product) => product.hit
	);

	return (
		<main className={styles.mainPage}>
			<Helmet>
				<title>
					Оборудование для майнинга биткоина и криптовалют | Купить по
					низким ценам в Москве и всей России
				</title>
				<meta
					name="description"
					content="Оборудование для майнинга. Предлагаем нашим клиентам купить оборудование для майнинга биткоина и других криптовалют по выгодным ценам. Доставка из Китая в Москву, Санкт-Петербург и другие города России. Страхование грузов."
				/>
			</Helmet>
			<HeroSection />
			<AboutSection />
			<ProductsSection
				title="Популярные товары"
				productsList={hitProducts}
			/>
			<VideoSection />
			<FAQSection />
		</main>
	);
};

export default MainPage;
