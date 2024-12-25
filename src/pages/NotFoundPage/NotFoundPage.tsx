import React from 'react';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
	return (
		<div className={styles.notFoundPage}>
			<div className={styles.innerBox}>
				<p className={styles.textBox}>404 Страница не найдена</p>
			</div>
		</div>
	);
};

export default NotFoundPage;
