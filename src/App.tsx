import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { mockBindedProduct } from './db/mockData.tsx';
import news from './db/news.json';
import products from './db/products.json';
import reviews from './db/reviews.json';
import { TArticlePage, TProduct } from './lib/index.ts';
import { Layout } from './lib/uikit';
import Loader from './lib/uikit/components/Loader/Loader.tsx';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync.tsx';
import { CataloguePageAsync } from './pages/CataloguePage/CataloguePageAsync.tsx';
import { ContactsPageAsync } from './pages/ContactsPage/ContactsPageAsync.tsx';
import { FAQPageAsync } from './pages/FAQ/FAQPageAsync.tsx';
import { MainPageAsync } from './pages/MainPage/MainPageAsync.tsx';
import { NewsPageAsync } from './pages/NewsPage/NewsPageAsync.tsx';
import { NotFoundPageAsync } from './pages/NotFoundPage/NotFoundPageAsync.tsx';
import { ProductPageAsync } from './pages/ProductPage/ProductPageAsync.tsx';
import { ReviewsPageAsync } from './pages/ReviewsPage/ReviewsPageAsync.tsx';
import { ArticlePageAsync } from './pages/ArticlePage/ArticlePageAsync.tsx';
// import { getFirmware } from './db/api/getFirmware.tsx';
// import { getProducts } from './db/api/getProducts.api.tsx';

export const App = () => {
	// getProducts();
	// getFirmware();
	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route element={<MainPageAsync />} path="/" key={'/'} />
						<Route
							element={<CataloguePageAsync />}
							path="/asic/"
							key={'/asic/'}
						/>
						<Route
							element={<AboutPageAsync />}
							path="/o-nas/"
							key={'/o-nas/'}
						/>
						<Route
							element={<ContactsPageAsync />}
							path="/kontakty/"
							key={'/kontakti/'}
						/>
						<Route element={<FAQPageAsync />} path="/faq/" />
						<Route
							element={<ReviewsPageAsync />}
							path="/reviews/"
							key={'/reviews/'}
						/>
						{reviews.map((article) => (
							<Route
								element={
									<ArticlePageAsync
										content={
											article as unknown as TArticlePage
										}
									/>
								}
								path={`/reviews/${article.id}/`}
								key={`/reviews/${article.id}/`}
							/>
						))}

						{news.map((article) => (
							<Route
								element={
									<ArticlePageAsync
										content={
											article as unknown as TArticlePage
										}
									/>
								}
								path={`/news/${article.id}/`}
								key={`/news/${article.id}/`}
							/>
						))}
						<Route
							element={<NewsPageAsync />}
							path="/news/"
							key={'/news/'}
						/>
						{[
							...(products as unknown as TProduct[]),
							mockBindedProduct,
						].map((product) => (
							<Route
								element={<ProductPageAsync product={product} />}
								path={`/asic/${product.id}/`}
								key={`/asic/${product.id}/`}
							/>
						))}
						<Route
							element={<NotFoundPageAsync />}
							path={'*'}
							key={'*'}
						/>
					</Routes>
				</Suspense>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
