import { memo } from 'react';
import styles from './Footer.module.scss';
import React from 'react';

type TLink = {
	link: string;
	heading: string;
};

const Footer = memo(() => {
	// const date = new Date().getFullYear();

	const links: TLink[] = [
		{
			heading: 'Главная',
			link: '/',
		},
		{
			heading: 'Услуги',
			link: '/favor',
		},
		{
			heading: 'О нас',
			link: '/about',
		},
		// {
		// 	heading: 'Статьи',
		// 	link: '/articles',
		// },
		{
			heading: 'Партнерам',
			link: '/partners',
		},
		{
			heading: 'Контакты',
			link: '/contacts',
		},
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.FooterContainer}>
				<div className={styles.mainBox}>
					<ul className={styles.optionsCol}>
						<div className={styles.colHeading}>Навигация</div>
						<div className={styles.innerLinks}>
							{links.map((link) => {
								return (
									<li
										className={styles.option}
										key={`footerLink_${link.heading}_${link.link}`}
									>
										<a
											href={link.link}
											className={styles.link}
										>
											{link.heading}
										</a>
									</li>
								);
							})}
						</div>
					</ul>

					<div className={styles.longDivider} />

					<ul className={styles.optionsCol}>
						<div className={styles.innerLinks}>
							<li className={styles.option}>
								<p className={styles.colHeading}>Звоните</p>
								<p>+7 (993) 615 77-47</p>
								<p>+7 (993) 289 38-56</p>
								<p>+7 (939) 849 00-88</p>
							</li>
							<li className={styles.option}>
								<p className={styles.colHeading}>Пишите</p>
								<p>pmkrazvitie@yandex.ru</p>
							</li>
							<li className={styles.option}>
								<p className={styles.colHeading}>Часы работы</p>
								<p>9:00-21:00 ПН-ВС</p>
							</li>
							<li className={styles.option}>
								<p className={styles.colHeading}>
									Наши мессенджеры
								</p>
								<div className={styles.outLinks}>
									<a
										className={styles.outLink}
										href="https://wa.me/message/HSJOUB5NAG3FD1"
									>
										<img
											src={`${
												import.meta.env
													.VITE_PATH_TO_PORTFOLIO
											}/waBwIcon.svg`}
											height="30px"
											alt=""
										/>
									</a>
									<a
										className={styles.outLink}
										href="https://t.me/razvitiepmk"
									>
										<img
											src={`${
												import.meta.env
													.VITE_PATH_TO_PORTFOLIO
											}/tgBwIcon.svg`}
											height="30px"
											alt=""
										/>
									</a>
								</div>
							</li>
						</div>
					</ul>

					<div className={styles.longDivider} />

					<ul className={styles.optionsCol}>
						<div
							className={`${styles.innerLinks} ${styles.copyrightBox}`}
						>
							<li className={styles.option}>
								{/* <p>
									© {date} Все права защищены. Сделано
									компанией Gafurov digital Production
								</p> */}
							</li>
						</div>
					</ul>
				</div>
			</div>
		</footer>
	);
});

export default Footer;
