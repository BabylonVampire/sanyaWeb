import { FC } from 'react';
import styles from './NewsCard.module.scss';
import React from 'react';
import { TArticlePage } from '../../../lib';

interface INewsCardProps {
	content: TArticlePage;
}

const NewsCard: FC<INewsCardProps> = ({ content }) => {
	return (
		<a className={styles.newsCard} href={`/news/${content.id}`}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${content.imageSrc})` }}
			/>
			<div className={styles.contentBox}>
				<div className={styles.contentBody}>
					<div className={styles.title}>{content.title}</div>
					<div className={styles.description}>
						{content.description}
					</div>
				</div>
				<div className={styles.contentFooter}>
					<div className={styles.date}>{content.date}</div>
				</div>
			</div>
		</a>
	);
};

export default NewsCard;
