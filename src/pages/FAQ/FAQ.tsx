import styles from './FAQ.module.scss';
import text from '../../db/faqText.json';
import { Collapse } from 'antd';
import { panelStyle, TFaq } from '../../lib';
import React from 'react';
import { MCHeading } from '../../lib/uikit/components/MCHeading/MCHeading';
import PageDivider from '../../lib/uikit/components/PageDivider/PageDivider';
import { Helmet } from 'react-helmet';

const FAQ = () => {
	const faqData: TFaq[] = text.items;

	const faqItems = faqData.map((item, index) => ({
		key: `faq${item.title}${index}`,
		label: item.title,
		children: <p className={styles.panelText}>{item.text}</p>,
		style: panelStyle,
	}));

	return (
		<div className={styles.FAQInnerBox}>
			<Helmet>
				<title>FAQ</title>
				<meta name="description" content="" />
			</Helmet>
			<PageDivider className={styles.headBox}>
				<div className={styles.headInner}>
					<MCHeading>FAQ</MCHeading>
					<p className={styles.subText}>Остались вопросы?</p>
					<a className={styles.button} href="#feedback">
						Свяжитесь с нами!
					</a>
				</div>
			</PageDivider>

			<div className={styles.collapseBox}>
				<div className={styles.faqImage} />
				<Collapse
					className={styles.FaqAccordion}
					accordion={true}
					defaultActiveKey={0}
					bordered={false}
					items={faqItems}
				/>
			</div>
		</div>
	);
};

export default FAQ;
