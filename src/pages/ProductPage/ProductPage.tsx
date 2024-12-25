import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, ModalWindow, TProduct } from '../../lib';
import MCParseArticle from '../../lib/uikit/components/MCParseArticle/MCParseArticle';
import { getPriceWithCurrency } from '../../lib/utils/getPrice';
import styles from './ProductPage.module.scss';

interface TProps {
	product: TProduct;
}

const ProductPage: FC<TProps> = ({ product }) => {
	const getAvailability = (
		availability: 'preorder' | 'empty' | number | string
	): string => {
		if (typeof availability === 'number') {
			return `${availability} шт.`;
		} else if (typeof availability === 'string') {
			return availability;
		} else {
			if (availability === 'preorder') {
				return 'Предзаказ';
			} else {
				return 'Отсутствует';
			}
		}
	};

	const [showModal, setShowModal] = useState<boolean>(false);

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
					<h3 className={styles.title}>{product.title}</h3>
					<div className={styles.productInfo}>
						<div className={styles.imageWrapper}>
							<img
								className={styles.image}
								src={product.imageSrc}
								alt={product.title}
							/>
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
												<p
													className={
														styles.productSpecName
													}
												>
													{spec.name}
												</p>
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
							<div className={styles.productSpecsFooter}>
								{product?.availability && (
									<p className={styles.availabilityStatus}>
										Наличие:{' '}
										{getAvailability(product.availability)}
									</p>
								)}
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
							</div>
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
