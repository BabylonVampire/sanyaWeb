import { FC } from 'react';
import styles from './ItemsGrid.module.scss';
import React from 'react';
import { FaRegImage } from 'react-icons/fa';
import { TArticlePage } from '../../../types';

interface IItemsGridProps {
	items: TArticlePage[];
}

const ItemsGrid: FC<IItemsGridProps> = ({ items }) => {
	return (
		<div className={styles.itemsGrid}>
			{items.map((item, index) => {
				return (
					<a
						key={item.title + index}
						className={styles.card}
						href={`/reviews/${item?.id}/`}
					>
						<div className={styles.cardInnerBox}>
							{item?.imageSrc ? (
								<div
									style={{
										backgroundImage: `url(${item?.imageSrc})`,
									}}
									className={styles.cardImage}
								/>
							) : (
								<div className={styles.cardImagePlaceholder}>
									<FaRegImage />
								</div>
							)}
							<div className={styles.cardContentBox}>
								<div className={styles.cardTextBox}>
									<div className={styles.title}>
										{item?.author}
									</div>
									<div className={styles.description}>
										{item?.description}
									</div>
									<div className={styles.cardFooter}>
										<div className={styles.date}>
											{item?.date}
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default ItemsGrid;
