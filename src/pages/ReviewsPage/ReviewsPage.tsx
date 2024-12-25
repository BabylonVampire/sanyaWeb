import React, { useState } from 'react';
import styles from './ReviewsPage.module.scss';
import PageDivider from '../../lib/uikit/components/PageDivider/PageDivider';
import { MCHeading } from '../../lib/uikit/components/MCHeading/MCHeading';
import { Button, ItemsGrid, ModalWindow } from '../../lib/uikit';
import { Helmet } from 'react-helmet';
import reviews from '../../db/reviews.json';
import { TArticlePage } from '../../lib';

const ReviewsPage = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<div className={styles.reviewsPage}>
			<Helmet>
				<title>Отзывы клиентов</title>
				<meta name="description" content="" />
			</Helmet>
			<ModalWindow
				type="review"
				show={showModal}
				setShow={setShowModal}
			/>
			<PageDivider className={styles.headBox}>
				<div className={styles.headInner}>
					<MCHeading>Отзывы</MCHeading>
					<Button
						type="outlined"
						shape="circle"
						onClick={() => setShowModal((prev) => !prev)}
					>
						Оставить отзыв
					</Button>
				</div>
			</PageDivider>
			<div className={styles.innerBox}>
				<ItemsGrid items={reviews as unknown as TArticlePage[]} />
			</div>
		</div>
	);
};

export default ReviewsPage;
