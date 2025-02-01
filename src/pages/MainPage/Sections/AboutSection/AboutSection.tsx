import React from 'react';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.container}>
				<div className={styles.image} />
				<div className={styles.textBox}>
					<h2 className={styles.heading}>О нас</h2>
					<p className={styles.description}>
						BRISTAN WERO - производитель различных аксессуаров из
						натуральной кожи высокого качества. Вся продукция
						производится на собственной фабрике.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
