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
	
	const targetSpecs = ["Материал", "Тип", "Пол"]; // Выбираем характеристики, которые будут отображаться приоритетно - остальные скрыты
	const visibleCaruselElements = 4 // сколько в карусели видно элементов в один момент, от этого идет расчет отключения кнопок
	const imageHeight = 130; // высота изображения
	const delta = 2; // на сколько изображений двигаем карусель 

	const [isOpen, setIsOpen] = useState(false);
	const [position, setPosition] = useState(0)
	const carouselRef = useRef<HTMLDivElement>(null);

	const scrollToImage = (delta: number) => {
		carouselRef.current?.scrollBy({ top: imageHeight * delta, behavior: 'smooth' });
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
			setPosition(carouselElement.scrollTop  / (imageHeight) )
		};
		
		carouselElement.addEventListener('scroll', onScroll);
		return () => carouselElement.removeEventListener('scroll', onScroll);
	}, []); 

	const switchToNextImage = () => {
		const currentIndex = product.images.indexOf(chosenImage);
		const nextImage = (currentIndex + 1) % product.images.length
		setChosenImage(product.images[nextImage])
	}

	const switchToPrevImage = () => {
		const currentIndex = product.images.indexOf(chosenImage);
		const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
		setChosenImage(product.images[prevIndex]);
	};


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
						<div className={styles.carouselAndPreview}>
							<div className={styles.carouselContainer}>
								<button className={styles.carouselButtonTop} onClick={scrollUp} disabled={position <= 0.5}>
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
								<button className={styles.carouselButtonBottom} onClick={scrollDown} disabled={position >= product.images.length-visibleCaruselElements-0.5	 }>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<title>chevron-down</title>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
								</button>
							</div>
							<div className={styles.imageWrapper}>
								<button onClick={switchToPrevImage} className={styles.leftButton}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<title>chevron-left</title>
										<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
									</svg>
								</button>
								 <Image.PreviewGroup items={product.images}>
									<Image
										className={styles.image}
										src={chosenImage}
										alt={product.title}
									/> 
								</Image.PreviewGroup>
								<button onClick={switchToNextImage} className={styles.rightButton}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<title>chevron-right</title>
										<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
									</svg>
								</button>
							</div>
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
