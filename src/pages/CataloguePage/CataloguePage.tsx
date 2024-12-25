import React, { FC, useEffect, useState } from 'react';
import styles from './CataloguePage.module.scss';
import products from '../../db/products.json';
import MCCard from '../../lib/uikit/components/MCCard/MCCard';
import PageDivider from '../../lib/uikit/components/PageDivider/PageDivider';
import { EManufacturers, EProductsTypes, TArticle, TProduct } from '../../lib';
import { Select } from 'antd';
import { Helmet } from 'react-helmet';
import { FaArrowRightLong, FaCartShopping } from 'react-icons/fa6';
import { ECoins } from '../../db/mockData';

type TProps = {
	coin?: ECoins;
	coinProducts?: string[];
	article?: TArticle;
};

const CataloguePage: FC<TProps> = ({ coin, coinProducts }) => {
	const [manufacturers, setManufacturers] = useState<
		(EManufacturers | undefined)[]
	>([]);
	const [types, setTypes] = useState<(EProductsTypes | undefined)[]>([]);

	let data: TProduct[] = [];

	if (coinProducts) {
		data = coinProducts
			.map((coinProduct) =>
				products.find((product) => product.id === +coinProduct)
			)
			.map((product) => ({
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
			})) as TProduct[];
		console.log(data);
	} else {
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
		})); //mockCatalogue;
	}

	const [sortedData, setSortedData] = useState<'dec' | 'acc'>('acc');
	const [filteredData, setFilteredData] = useState<TProduct[]>(
		data as TProduct[]
	);

	useEffect(() => {
		setFilteredData(
			(data as TProduct[])
				.filter((product) => {
					return (
						(!types.length || types.includes(product?.algorithm)) &&
						(!manufacturers.length ||
							manufacturers.includes(product?.manufacturer))
					);
				})
				.sort((a, b) => {
					return (
						(-1) ** +(sortedData !== 'acc') *
						((a.price?.value || 0) - (b.price?.value || 0))
					);
				})
		);
	}, [types, manufacturers, sortedData]);

	const toggleManufacturer = (value: EManufacturers) => {
		if (manufacturers.includes(value)) {
			setManufacturers((prev) => prev.filter((item) => item !== value));
			return;
		}

		setManufacturers((prev) => [...prev, value]);
	};

	const toggleTypes = (value: EProductsTypes) => {
		if (types.includes(value)) {
			setTypes((prev) => prev.filter((item) => item !== value));
			return;
		}

		setTypes((prev) => [...prev, value]);
	};

	return (
		<div className={styles.cataloguePage}>
			<Helmet>
				<title>
					Асики для майнинга - купить Асик майнеры по выгодной цене |
					Доставка из Китая в Москву, СПб и др. города РФ
				</title>
				<meta
					name="description"
					content="Асики для майнинга (Майнеры). Доставка из Китая Асик майнеров в Москву, Санкт-Петербург и другие города России. Страхование грузов. Оплата банковской картой. Низкие цены"
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
									Производитель
								</h3>
								<div className={styles.checkBoxContainer}>
									{Object.values(EManufacturers).map(
										(manufacturer, index) => {
											const numberOfProducts =
												data.filter(
													(product) =>
														product?.manufacturer ===
														manufacturer
												).length;
											return (
												Boolean(numberOfProducts) && (
													<button
														key={
															manufacturer + index
														}
														className={`${styles.checkBox} ${manufacturers.includes(manufacturer) ? styles.checkBoxChosen : ''}`}
														onClick={() =>
															toggleManufacturer(
																manufacturer as EManufacturers
															)
														}
													>
														<div
															className={
																styles.buttonText
															}
														>
															{manufacturer}
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
											);
										}
									)}
								</div>
							</div>
							<div className={styles.filterByType}>
								<h3 className={styles.filterHeading}>
									Алгоритм
								</h3>
								<div className={styles.checkBoxContainer}>
									{Object.values(EProductsTypes).map(
										(type, index) => {
											const numberOfProducts =
												filteredData.filter(
													(product) =>
														product?.algorithm ===
														type
												).length;
											return numberOfProducts ? (
												<button
													key={type + index}
													className={`${styles.checkBox} ${types.includes(type) ? styles.checkBoxChosen : ''}`}
													onClick={() =>
														toggleTypes(
															type as EProductsTypes
														)
													}
												>
													<div
														className={
															styles.buttonText
														}
													>
														{type}
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
											) : (
												<></>
											);
										}
									)}
								</div>
							</div>
						</div>
					</div>
				</PageDivider>
				<div className={styles.selectWrapper}>
					{coin && (
						<h3 className={styles.coinHeading}>
							Асик Майнеры для майнинга {coin}
						</h3>
					)}
					<Select
						className={styles.sortSelector}
						placeholder="Необходимая прошивка"
						defaultValue="acc"
						optionFilterProp="children"
						onChange={(e) => setSortedData(e as 'acc' | 'dec')}
						options={[
							{
								value: 'acc',
								label: 'По возрастанию цены',
							},
							{
								value: 'dec',
								label: 'По убыванию цены',
							},
						]}
					/>
				</div>

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
