import styles from './Loader.module.scss';
import React from 'react';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.icon} />
		</div>
	);
};

export default Loader;
