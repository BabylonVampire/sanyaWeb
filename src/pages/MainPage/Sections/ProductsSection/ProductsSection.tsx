import React, { FC } from 'react';
import { TProduct } from '../../../../lib';
import MCCard from '../../../../lib/uikit/components/MCCard/MCCard';
import styles from './ProductsSection.module.scss';

type TProps = {
	title: string;
	productsList: TProduct[];
};

const ProductsSection: FC<TProps> = ({ productsList }) => {
	return (
		<section className={styles.productsSection}>
			<h2 className={styles.heading}>Популярные товары</h2>
			<div className={styles.innerBox}>
				<div className={styles.productsContainerWrapper}>
					<div className={styles.productsContainer}>
						{productsList
							.slice(productsList.length - 6, productsList.length)
							.map((product, index) => (
								<MCCard
									product={product}
									key={'product' + product.title + index}
								/>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductsSection;
