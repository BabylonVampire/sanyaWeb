import React, { FC } from 'react';
import { TArticlePage } from '../../lib';
import styles from './ArticlePage.module.scss';
import { Helmet } from 'react-helmet';

interface IArticlePageProps {
	content: TArticlePage;
}

const ArticlePage: FC<IArticlePageProps> = ({ content }) => {
	const isReview = Boolean(content?.author);

	return (
		<div className={styles.articlePage}>
			<Helmet>
				<title>
					{isReview
						? `${content?.author}: Отзыв клиента о сотрудничестве с компанией Mining-Center`
						: content.title}
				</title>
				<meta
					name="description"
					content={
						isReview
							? `${content?.author}: Отзыв клиента о сотрудничестве с компанией Mining-Center`
							: ''
					}
				/>
			</Helmet>
			<div className={styles.innerBox}>
				<div className={styles.articleTitle}>{content.title}</div>
				<div className={styles.contentBox}>
					{content?.imageSrc && (
						<div
							style={{
								backgroundImage: `url(${content?.imageSrc})`,
							}}
							className={styles.articleImage}
						/>
					)}
					<div className={styles.textBox}>
						<div className={styles.paragraphBox}>
							{content.content.map((paragraph, index) => (
								<p
									className={styles.paragraph}
									key={paragraph + index}
								>
									{paragraph}
								</p>
							))}
						</div>
						<div className={styles.footer}>
							<div className={styles.author}>
								{content?.author}
							</div>
							<div className={styles.date}>{content?.date}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticlePage;
