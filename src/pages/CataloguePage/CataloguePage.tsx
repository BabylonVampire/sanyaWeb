import React, { useEffect, useState } from 'react';
import styles from './CataloguePage.module.scss';
import products from '../../db/products.json';
import MCCard from '../../lib/uikit/components/MCCard/MCCard';
import PageDivider from '../../lib/uikit/components/PageDivider/PageDivider';
import { EProductCategory, ESexTypes, TProduct } from '../../lib';
import { Helmet } from 'react-helmet';
import { FaArrowRightLong, FaCartShopping } from 'react-icons/fa6';


import suitcaseImage from "../../assets/images/suitcase.jpg"
import manImage from "../../assets/images/man.jpg"
import womanImage from "../../assets/images/woman.jpg"


const CataloguePage = () => {
	const [filteredData, setFilteredData] = useState<TProduct[]>([]);
	const [activeSex, setActiveSex] = useState<ESexTypes | []>([]);
	const [selectedCategories, setSelectedCategories] = useState<EProductCategory[]>([]);
	const [data, setData] = useState<TProduct[]>([])

	const maleValue = Object.values(ESexTypes)[0]; 
	const femaleValue = Object.values(ESexTypes)[1];
	const unisexValue = Object.values(ESexTypes)[2];
	
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
			(data as TProduct[]).filter((product) => {
				if (selectedCategories.length === 0) {
					return true;
				}
				
				return selectedCategories.includes(product.category) && (product.sex === activeSex);
			})
		);
	}, [activeSex, selectedCategories, data]);

	const toggleCategory = (sex: ESexTypes, category: EProductCategory) => {
		if (activeSex !== sex) {
			setActiveSex(sex);
			setSelectedCategories([category]);
			return;
		}
		
		setSelectedCategories(prev => {
			if (prev.includes(category)) {
				return prev.filter(item => item !== category);
			} else {
				return [...prev, category];
			}
		});
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

					<div className={styles.filterBox}
						style={{
							backgroundImage: `url(${manImage})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}>
						<div className={styles.filterForm}>
							<div className={styles.filterByType}>
								<h3 className={styles.filterHeading}>
									Мужчинам
								</h3>
									<div className={styles.checkBoxContainer}>
										{Object.values(EProductCategory).slice(0, -1).map(
											(category, index) => {
												return (
													<button
														key={category + index}
														className={`
														${styles.checkBox} 
														${activeSex === maleValue && selectedCategories.includes(category) ? styles.checkBoxChosen : ''}
														`}
														onClick={() => toggleCategory(maleValue, category as EProductCategory)}
													>
														<div
															className={
																styles.buttonText
															}
														>
															{category}
														</div>
													</button>
												)
											}
										)}
									</div>
							</div>
						</div>
					</div>

					<div className={styles.filterBox}
						style={{
							backgroundImage: `url(${womanImage})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}>
						<div className={styles.filterForm}>
							<div className={styles.filterByType}>
								<h3 className={styles.filterHeading}>
									Женщинам
								</h3>
								<div className={styles.checkBoxContainer}>
									{Object.values(EProductCategory).slice(0, -1).map(
										(category, index) => {
											return (
												<button
													key={category + index}
														className={`
														${styles.checkBox} 
														${activeSex === femaleValue && selectedCategories.includes(category) ? styles.checkBoxChosen : ''}
														`}
														onClick={() => toggleCategory(femaleValue, category as EProductCategory)}
												>
													<div
														className={
															styles.buttonText
														}
													>
														{category}
													</div>
												</button>
											)
										}
									)}
								</div>
							</div>
						</div>
					</div>

					<div className={styles.filterBox}
						style={{
							backgroundImage: `url(${suitcaseImage})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}>
						<div className={styles.filterForm}>
							<div className={styles.filterByType}>
								<h3 className={styles.filterHeading}>
									Чемоданы
								</h3>
								<div className={styles.checkBoxContainer}>
									{(() => {
										const suitcase = Object.values(EProductCategory)[7]
										
										return (
											<button
												className={`${styles.checkBox} ${selectedCategories.includes(suitcase) ? styles.checkBoxChosen : '' }`}
												onClick={() =>
													toggleCategory(unisexValue, suitcase as EProductCategory)
												}
											>
												<div
													className={
														styles.buttonText
													}
												>
													{suitcase}
												</div>
											</button>
										)
									})()}
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
