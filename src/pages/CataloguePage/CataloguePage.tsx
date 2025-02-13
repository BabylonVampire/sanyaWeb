import React, { useEffect, useState } from 'react';
import styles from './CataloguePage.module.scss';
import products from '../../db/products.json';
import MCCard from '../../lib/uikit/components/MCCard/MCCard';
import PageDivider from '../../lib/uikit/components/PageDivider/PageDivider';
import { EProductCategory, ESexTypes, TProduct } from '../../lib';
import { Helmet } from 'react-helmet';
import { FaArrowRightLong, FaCartShopping } from 'react-icons/fa6';

const CataloguePage = () => {
	const [filteredData, setFilteredData] = useState<TProduct[]>([]);
	const [sex, setSex] = useState<ESexTypes[]>([]);
	const [categories, setCategories] = useState<EProductCategory[]>([]);
	const [data, setData] = useState<TProduct[]>([])

	useEffect(() => {
		let data: TProduct[] = [];

		data = (products as unknown as TProduct[]).map((product) => ({
			...product,
			actions: [
				{
					icon: <FaCartShopping />,
					key: 'cart',
					onClick: () => {},
				},
				{
					icon: <FaArrowRightLong />,
					key: 'link',
					onClick: () => {},
				},
			],
		}));

		setData(data as TProduct[])
	}, []);

	useEffect(() => {
		setFilteredData(
			(data as TProduct[])
				.filter((product) => {
					return (
						(!sex.length || sex.includes(product?.sex)) &&
						(!categories.length ||
							categories.includes(product?.category))
					);
				})
		);
	}, [categories, sex, data]);

	const toggleSex = (value: ESexTypes) => {
		if (sex.includes(value)) {
			setSex((prev) => prev.filter((item) => item !== value));
			return;
		}

		setSex((prev) => [...prev, value]);
	};

	const toggleCategories = (value: EProductCategory) => {
		if (categories.includes(value)) {
			setCategories((prev) => prev.filter((item) => item !== value));
			return;
		}

		setCategories((prev) => [...prev, value]);
	};

	return (
		<div className={styles.cataloguePage}>
			<Helmet>
				<title>
					Каталог
				</title>
				<meta
					name="description"
					// content="Асики для майнинга (Майнеры). Доставка из Китая Асик майнеров в Москву, Санкт-Петербург и другие города России. Страхование грузов. Оплата банковской картой. Низкие цены"
				/>
			</Helmet>
			<div className={styles.innerBox}>
				<PageDivider className={styles.filterBackground}>
					<div className={styles.filterBox}>
						<div className={styles.filterText}>
							<p className={styles.description}>
								Фильтр продукции
							</p>
							<div className={styles.divider} />
							<h2 className={styles.heading}>
								Выберите товар по параметрам
							</h2>
						</div>
						<div className={styles.filterForm}>
							<div className={styles.filterByManufacturer}>
								<h3 className={styles.filterHeading}>
									Пол
								</h3>
								<div className={styles.checkBoxContainer}>
									{Object.values(ESexTypes).map(
										(sexItem, index) => {
											const numberOfProducts =
												data.filter(
													(product) =>
														product?.sex ===
														sexItem
												).length;
											return (
													<button
														key={
															sexItem + index
														}
														className={`${styles.checkBox} ${sex.includes(sexItem) ? styles.checkBoxChosen : ''}`}
														onClick={() =>
															toggleSex(
																sexItem as ESexTypes
															)
														}
													>
														<div
															className={
																styles.buttonText
															}
														>
															{sexItem}
														</div>
														<div
															className={
																styles.verticalDivider
															}
														/>
														<div
															className={
																styles.amountOfProducts
															}
														>
															{numberOfProducts}
														</div>
													</button>
												)
										}
									)}
								</div>
							</div>
							<div className={styles.filterByType}>
								<h3 className={styles.filterHeading}>
									Тип товара
								</h3>
								<div className={styles.checkBoxContainer}>
									{Object.values(EProductCategory).map(
										(category, index) => {
											const numberOfProducts =
												filteredData.filter(
													(product) =>
														product?.category ===
														category
												).length;
											return (
												<button
													key={category + index}
													className={`${styles.checkBox} ${categories.includes(category) ? styles.checkBoxChosen : ''}`}
													onClick={() =>
														toggleCategories(
															category as EProductCategory
														)
													}
												>
													<div
														className={
															styles.buttonText
														}
													>
														{category}
													</div>
													<div
														className={
															styles.verticalDivider
														}
													/>
													<div
														className={
															styles.amountOfProducts
														}
													>
														{numberOfProducts}
													</div>
												</button>
											)
										}
									)}
								</div>
							</div>
						</div>
					</div>
				</PageDivider>
				<div className={styles.productsBox}>
					{filteredData.map((product, index) => (
						<MCCard product={product} key={product.title + index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CataloguePage;
