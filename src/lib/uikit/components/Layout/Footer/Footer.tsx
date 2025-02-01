import { memo } from 'react';
import styles from './Footer.module.scss';
import React from 'react';
import { links } from '../Layout.constants';

const Footer = memo(() => {
	const date = new Date().getFullYear();

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
										key={`footerLink_${link.title}_${link.link}`}
									>
										<a
											href={link.link}
											className={styles.link}
										>
											{link.title}
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
								<div className={styles.qrCode} />
							</li>
							<li className={styles.option}>
								<p className={styles.colHeading}>Звоните</p>
								<p>+7 (995) 919 94-49 </p>
							</li>
							<li className={styles.option}>
								<p className={styles.colHeading}>Пишите</p>
								<p>bristan.wero@bk.ru</p>
							</li>
							<li className={styles.option}>
								<p className={styles.colHeading}>Часы работы</p>
								<p>8:00-17:00</p>
							</li>
							<li className={styles.option}>
								<p className={styles.colHeading}>
									Наши мессенджеры
								</p>
								<div className={styles.outLinks}>
									<a className={styles.outLink} href="">
										<img
											src={`http://gafurov-prod-test.online/assets/waBwIcon.svg`}
											height="30px"
											alt=""
										/>
									</a>
									<a className={styles.outLink} href="">
										<img
											src={`http://gafurov-prod-test.online/assets/tgBwIcon.svg`}
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
								<p>
									© {date} Все права защищены. Сделано
									компанией Gafurov digital Production
								</p>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</footer>
	);
});

export default Footer;
