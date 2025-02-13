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
			{article.map((item, index) => (
				<div className={styles.articleParagraph} key={index}>
					{item}
				</div>
			))}
		</div>
	);
};

export default MCParseArticle;
