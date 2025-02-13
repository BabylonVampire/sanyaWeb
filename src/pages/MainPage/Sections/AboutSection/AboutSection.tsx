import React, { FC } from 'react';
import styles from './AboutSection.module.scss';

type TProps = {
	label: string;
	description: string;
	position: 'row' | 'row-reverse';
	img: string;
	style?: React.CSSProperties;
};

const AboutSection: FC<TProps> = ({
	label,
	description,
	position = 'row',
	img,
	style,
}) => {
	return (
		<section className={styles.aboutSection} style={style}>
			<div
				className={styles.container}
				style={{ flexDirection: position }}
			>
				<div
					className={styles.image}
					style={{ backgroundImage: `url(${img})` }}
				/>
				<div className={styles.textBox}>
					<h2 className={styles.heading}>{label}</h2>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
