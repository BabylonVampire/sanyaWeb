import React from 'react';
import styles from './FloatButton.module.scss';
import { FaPhone, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { PHONE_LINK, TG_LINK, WA_LINK } from '../Layout.constants';

const FloatButton = () => {
	return (
		<div className={styles.floatButton}>
			<a href={PHONE_LINK} className={styles.iconWrapper}>
				<FaPhone />
			</a>
			<div className={styles.linkBox}>
				<a href={TG_LINK} className={styles.link}>
					<FaTelegram />
				</a>
				<a href={WA_LINK} className={styles.link}>
					<FaWhatsapp />
				</a>
			</div>
		</div>
	);
};

export default FloatButton;
