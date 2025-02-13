import React, { FC } from 'react';
import { TArticlePage } from '../../lib';
import styles from './ArticlePage.module.scss';

interface IArticlePageProps {
	content: TArticlePage;
}

const ArticlePage: FC<IArticlePageProps> = ({ content }) => {

	return (
		<div className={styles.articlePage}>
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
