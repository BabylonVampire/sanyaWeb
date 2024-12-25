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
						Наша команда занимается майнингом, продажей и
						размещением оборудования на площадях как в Китае, так и
						в РФ с середины 2017-го года. Мы занимаемся решением
						таможенных вопросов и споров при транспортировке
						майнинг-оборудования.
					</p>
				</div>
			</div>
			<div className={styles.smallContainer}>
				<div className={styles.contacts}></div>
				<div className={styles.smallImage}></div>
			</div>
		</section>
	);
};

export default AboutSection;
