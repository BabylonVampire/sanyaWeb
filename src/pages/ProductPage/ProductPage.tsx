import React, { FC, useState } from 'react';
import { ModalWindow, TProduct } from '../../lib';
import MCParseArticle from '../../lib/uikit/components/MCParseArticle/MCParseArticle';
import styles from './ProductPage.module.scss';
import { Image } from 'antd';

interface TProps {
	product: TProduct;
}

const ProductPage: FC<TProps> = ({ product }) => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [chosenImage, setChosenImage] = useState<string>(product.images[0]);

	return (
		<div className={styles.ProductPage}>
			<ModalWindow
				type="product"
				show={showModal}
				setShow={setShowModal}
				placeholder={product.title}
			/>
			<div className={styles.innerBox}>
				<div className={styles.productCard}>
					<h3 className={styles.title}>{product.title}</h3>
					<div className={styles.productInfo}>
						<div className={styles.imageWrapper}>
							<Image
								className={styles.image}
								src={chosenImage}
								alt={product.title}
							/>
							<div className={styles.imagesCarousel}>
								{product.images.map((image) => (
									<img
										onClick={() => setChosenImage(image)}
										src={image}
										className={styles.carouselImage}
										key={image}
									/>
								))}
							</div>
						</div>
						<div className={styles.productSpecs}>
							<ul className={styles.productSpecsList}>
								{product?.characteristics?.map(
									(spec, index) => (
										<li
											className={styles.productSpecItem}
											key={spec.name + index}
										>
											<div className={styles.productSpec}>
												<div
													className={
														styles.productSpecName
													}
												>
													<p className={styles.label}>
														{spec.name}
													</p>
													<div
														className={
															styles.specDivider
														}
													/>
												</div>
												<p
													className={
														styles.productSpecValue
													}
												>
													{spec.value}
												</p>
											</div>
										</li>
									)
								)}
							</ul>
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
