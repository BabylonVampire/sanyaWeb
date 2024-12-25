import React, { FC } from 'react';
import styles from './MCCard.module.scss';
import { TProduct } from '../../../types';
import { FaRegImage } from 'react-icons/fa';

type ICardProps = {
	style?: React.CSSProperties;
	className?: string;
	product: TProduct;
};

const MCCard: FC<ICardProps> = ({ style, product, className }) => {
	const modelTypes = [
		{
			modelId: '1',
			modelColor: '#fff',
		},
		{
			modelId: '2',
			modelColor: '#fff',
		},
		{
			modelId: '3',
			modelColor: '#fff',
		},
	];

	return (
		<a className={styles.card} href={`/asic/${product.id}`}>
			<div
				className={`${styles.cardInnerBox} ${className}`}
				style={style}
			>
				<div
					style={{ backgroundImage: `url(${product?.imageSrc})` }}
					className={styles.cardImage}
				>
					{!product?.imageSrc && <FaRegImage />}
				</div>
				<div className={styles.cardContentBox}>
					<div className={styles.cardTextBox}>
						<div className={styles.title}>
							{product?.title.slice(0, 40)}...
						</div>
					</div>
					<div className={styles.cardActionsBox}>
						<div className={styles.modelTypes}>
							{modelTypes.map((model) => {
								return (
									<button
										className={styles.modelButton}
										style={{
											backgroundColor: model.modelColor,
										}}
									/>
								);
							})}
						</div>
						<div className={styles.actionButtons}>
							<button className={styles.actionButton}></button>
							<button className={styles.actionButton}></button>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export default MCCard;
