import { FC } from 'react';
import styles from './MCParseArticle.module.scss';
import { TArticle } from '../../../types';
import React from 'react';

interface IMCParseArticleProps {
	article: TArticle;
}

const MCParseArticle: FC<IMCParseArticleProps> = ({ article }) => {
	return (
		<div className={styles.article}>
			{article.content.map((item, index) => {
				switch (item.type) {
					case 'title':
						return (
							<div
								className={styles.articleTitle}
								key={item.type + index}
							>
								{item.content[0]}
							</div>
						);

					case 'paragraph':
						return (
							<div
								className={styles.articleParagraph}
								key={item.type + index}
							>
								{item.content[0]}
							</div>
						);

					case 'list':
						return (
							<ul
								className={styles.articleList}
								key={item.type + index}
							>
								{item.content.map((listItem, index) => (
									<li
										className={styles.listItem}
										key={listItem + index}
									>
										{listItem}
									</li>
								))}
							</ul>
						);

					default:
						return <></>;
				}
			})}
		</div>
	);
};

export default MCParseArticle;
