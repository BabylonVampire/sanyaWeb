import React from 'react';
import styles from './NewsPage.module.scss';
import PageDivider from '../../lib/uikit/components/PageDivider/PageDivider';
import { MCHeading } from '../../lib/uikit/components/MCHeading/MCHeading';
import NewsCard from './NewsCard/NewsCard';
import { Helmet } from 'react-helmet';
import news from '../../db/news.json';
import { TArticlePage } from '../../lib';

const NewsPage = () => {
	return (
		<div className={styles.newsPage}>
			<Helmet>
				<title>Новости</title>
				<meta name="description" content="" />
			</Helmet>
			<PageDivider className={styles.headBox}>
				<div className={styles.headInner}>
					<MCHeading>Новости</MCHeading>
				</div>
			</PageDivider>
			<div className={styles.innerBox}>
				{(news as unknown as TArticlePage[])
					.reverse()
					.map((newsItem, index) => (
						<NewsCard
							key={newsItem.title + index}
							content={newsItem}
						/>
					))}
			</div>
		</div>
	);
};

export default NewsPage;
