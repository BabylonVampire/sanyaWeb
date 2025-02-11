import React, { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ModalWindow, TProduct } from '../../lib';
import MCParseArticle from '../../lib/uikit/components/MCParseArticle/MCParseArticle';
import styles from './ProductPage.module.scss';
import { Image } from 'antd';

import { useRef } from 'react';


interface TProps {
	product: TProduct;
}


const ProductPage: FC<TProps> = ({ product }) => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [chosenImage, setChosenImage] = useState<string>(product.images[0]);
	
	const [isOpen, setIsOpen] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	const delta = 2;
	const [position, setPosition] = useState(0)

	const targetSpecs = ["Материал", "Тип", "Пол"]; // Выбираем характеристики, которые будут отображаться приоритетно - остальные скрыты

	const scrollToImage = (delta: number) => {
		carouselRef.current?.scrollBy({ top: 130 * delta, behavior: 'smooth' });
	};

	const scrollUp = () => {
		scrollToImage(-delta);
	};

	const scrollDown = () => {
		scrollToImage(delta); 
	};

	useEffect(() => {
		const carouselElement = carouselRef.current;

		if (!carouselElement) return;

		const onScroll = () => {
			const scrollTop = carouselElement.scrollTop;
			const newPosition = scrollTop / 65;
			setPosition(newPosition);
		};

		carouselElement.addEventListener('scroll', onScroll);
		return () => carouselElement.removeEventListener('scroll', onScroll);
	}, []); 


	return (
		<div className={styles.ProductPage}>
			<Helmet>
				<title>{`${product.title} - купить асик майнер Jasminer X4 1U 520 mhs по выгодной цене | Доставка из Китая в Москву, СПб и др. города РФ`}</title>
				<meta
					name="description"
					content={`${product.title}. Доставка из Китая Асик майнеров в Москву, Санкт-Петербург и другие города России. Страхование грузов. Оплата банковской картой. Низкие цены`}
				/>
			</Helmet>
			<ModalWindow
				type="product"
				show={showModal}
				setShow={setShowModal}
				placeholder={product.title}
			/>
			<div className={styles.innerBox}>
				<div className={styles.productCard}>
					<div className={styles.productInfo}>

						<div className={styles.carouselContainer}>
							<button className={styles.carouselButtonTop} onClick={scrollUp} disabled={position <= 0}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<title>chevron-up</title>
									<path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
								</svg>
							</button>
							<div className={styles.imagesCarousel} ref={carouselRef}>
								{product.images.map((image) => (
									<img
										onClick={() => setChosenImage(image)}
										src={image}
										className={`${styles.carouselImage} ${chosenImage === image ? styles.active : ''}`}

										key={image}
									/>
								))}
							</div>
							<button className={styles.carouselButtonBottom} onClick={scrollDown} disabled={position >= product.images.length }>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<title>chevron-down</title>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
							</button>
						</div>
						<div className={styles.imageWrapper}>
							<Image
								className={styles.image}
								src={chosenImage}
								alt={product.title}
							/>
						</div>
						<div className={styles.productSpecs}>
							<h3 className={styles.title}>{product.title}</h3>
							<ul className={styles.productSpecsList}>
								
								{targetSpecs.map((target) => {
								const spec = product?.characteristics?.find((item) => item.name === target);
								return spec ? (
								<li className={styles.productSpecItem} key={spec.name}>
									<div className={styles.productSpec}>
									<div className={styles.productSpecName}>
										<p className={styles.label}>{spec.name}</p>
										<div className={styles.specDivider} />
									</div>
									<p className={styles.productSpecValue}>{spec.value}</p>
									</div>
								</li>
								) : null;
							})}
							</ul>
							<button className={isOpen ? styles.sectionButtonHidden : styles.sectionButton} onClick={() => setIsOpen(!isOpen)}>
								{isOpen ? "Скрыть" : "Подробнее"}
							</button>
							{isOpen && (
								<ul className={styles.productSpecsList}>
									{product?.characteristics
										?.filter((spec) => !targetSpecs.includes(spec.name))
										.map((spec) => (
										<li className={styles.productSpecItem} key={spec.name}>
											<div className={styles.productSpec}>
											<div className={styles.productSpecName}>
												<p className={styles.label}>{spec.name}</p>
												<div className={styles.specDivider} />
											</div>
											<p className={styles.productSpecValue}>{spec.value}</p>
											</div>
										</li>
									))}
								</ul>
							)}
							{/* <div className={styles.productSpecsFooter}>
								<div className={styles.productOrder}>
									{product.price && (
										<div
											className={
												styles.productPriceWrapper
											}
										>
											<p
												className={
													styles.productOrderDate
												}
											>
												{product.price.date}
											</p>
											<p
												className={
													styles.productOrderPriceValue
												}
											>
												{getPriceWithCurrency(
													product.price.value,
													product.price.currency
												)}
											</p>
										</div>
									)}
									<Button
										onClick={() =>
											setShowModal((prev) => !prev)
										}
										type="outlined"
										className={styles.orderBtn}
										shape="circle"
									>
										Заказать
									</Button>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			{product?.description && (
				<div className={styles.descriptionBox}>
					{product?.description && (
						<MCParseArticle article={product?.description} />
					)}
				</div>
			)}
		</div>
	);
};

export default ProductPage;
