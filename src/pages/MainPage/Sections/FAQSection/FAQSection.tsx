import { Collapse } from 'antd';
import React from 'react';
import text from '../../../../db/faqMainPageText.json';
import { TFaq, panelStyle } from '../../../../lib';
import styles from './FAQSection.module.scss';
import { MCHeading } from '../../../../lib/uikit/components/MCHeading/MCHeading';

const FAQSection = () => {
	const faqData: TFaq[] = text.items;

	const faqItems = faqData.map((item, index) => ({
		key: `faq${item.title}${index}`,
		label: item.title,
		children: <p className={styles.panelText}>{item.text}</p>,
		style: panelStyle,
	}));

	return (
		<section className={styles.FAQInnerBox}>
			<div className={styles.collapseBox}>
				<div className={styles.contentBox}>
					<MCHeading>Вопросы и ответы</MCHeading>
					<Collapse
						className={styles.FaqAccordion}
						accordion={true}
						defaultActiveKey={0}
						bordered={false}
						items={faqItems}
					/>
				</div>
				<div className={styles.faqImage} />
			</div>
		</section>
	);
};

export default FAQSection;
