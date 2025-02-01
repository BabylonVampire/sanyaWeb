import React from 'react';
import styles from './AboutPage.module.scss';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
	return (
		<div className={styles.aboutPage}>
			<Helmet>
				<title>О нас</title>
				<meta name="description" content="" />
			</Helmet>
			<div className={styles.innerBox}>
				<div className={styles.textBox}>
					<h2 className={styles.heading}>О нас</h2>
					<div className={styles.contentBox}>
						<div className={styles.logo} />
						<div className={styles.textContainer}>
							<p className={styles.description}>
								BRISTAN WERO - производитель различных
								аксессуаров из натуральной кожи высокого
								качества. Вся продукция производится на
								собственной фабрике.
							</p>
							<div className={styles.divider} />
							<p className={styles.description}>
								Компания занимается оптовой продажей - от 20
								единиц различных наименований. Бренд начинает
								свою историю в сентябре 1999 года, в небольшой
								итальянской провинции Nave. Оригинальная
								продукция изготавливается только в странах
								Европы - Италия, Румыния. В производстве
								используется только натуральная
								высококачественная кожа из Италии, Германии,
								Новой Зеландии, Австралии, Марокко.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
