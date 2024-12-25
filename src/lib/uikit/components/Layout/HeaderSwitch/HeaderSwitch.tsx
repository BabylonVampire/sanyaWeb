import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import styles from './HeaderSwitch.module.scss';

const HeaderSwitch = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1200);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className={styles.header}>
			{isMobile ? <Sidebar /> : <Header />}
		</header>
	);
};

export default HeaderSwitch;
