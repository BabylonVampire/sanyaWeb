import React from 'react';
import styles from './AboutPage.module.scss';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
	return (
		<main className={styles.aboutPage}>
			<Helmet>
				<title>О нас</title>
				<meta name="description" content="" />
			</Helmet>
			<div className={styles.innerBox}>
				<div className={styles.textBox}>
					<h2 className={styles.heading}>О нас</h2>
					<p className={styles.description}>
						Наша команда занимается майнингом, продажей и
						размещением оборудования на площадях как в Китае, так и
						в РФ с середины 2017-го года. Мы занимаемся решением
						таможенных вопросов и споров при транспортировке
						майнинг-оборудования.
					</p>
					<div className={styles.divider} />
					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris at ornare mauris, vitae dapibus risus. Duis erat
						diam, hendrerit sed bibendum in, viverra ut nibh. Nunc
						aliquam velit ac commodo accumsan. Mauris sodales ante
						in lorem rutrum molestie. Aenean et varius metus.
						Vestibulum in porta massa, ut iaculis lectus. Aenean sit
						amet metus eleifend, interdum purus in, volutpat dolor.
						Maecenas dictum massa id mauris malesuada, id auctor
						orci eleifend. In eleifend ligula ipsum, nec ornare
						magna varius quis. Aenean sed sapien sit amet tortor
						dictum cursus nec sed arcu. Quisque ornare, sapien vel
						cursus vehicula, velit mi laoreet nisl, a imperdiet arcu
						libero eget leo. Vivamus tempus ullamcorper risus id
						iaculis. Proin sit amet velit id est ultrices
						sollicitudin. Nunc accumsan neque sed mauris
						sollicitudin aliquam. Donec vestibulum vitae quam at
						imperdiet. Cras mollis felis diam, et molestie dui
						accumsan quis.
					</p>
				</div>
			</div>
		</main>
	);
};

export default AboutPage;
