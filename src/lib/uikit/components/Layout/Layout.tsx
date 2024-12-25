import { FC, PropsWithChildren, useEffect, useState } from 'react';
import styles from './Layout.module.scss';
import React from 'react';
import HeaderSwitch from './HeaderSwitch/HeaderSwitch';
import Footer from './Footer/Footer';
// import {
// 	EMAIL,
// 	PHONE_NUMBER_CHINA,
// 	PHONE_NUMBER_RUS,
// 	links,
// } from './Layout.constants';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import FloatButton from './FloatButton/FloatButton';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!sessionStorage.getItem('FIRST_LOAD_KEY')) {
			setTimeout(() => {
				setIsFirstLoading(false);
				sessionStorage.setItem('FIRST_LOAD_KEY', '1');
			}, 4000);
		} else {
			setIsFirstLoading(false);
		}
	}, []);

	return (
		<div
			className={styles.layout}
			style={{ height: isFirstLoading ? '100vh' : 'auto' }}
		>
			{isFirstLoading && (
				<div className={styles.loadingLogo}>
					<div className={styles.logo} />
				</div>
			)}
			<FloatButton />
			<HeaderSwitch />
			{children}
			<FeedbackForm />
			<Footer
			// links={links}
			// contacts={{
			// 	phones: [PHONE_NUMBER_RUS, PHONE_NUMBER_CHINA],
			// 	emails: [EMAIL],
			// }}
			/>
		</div>
	);
};
