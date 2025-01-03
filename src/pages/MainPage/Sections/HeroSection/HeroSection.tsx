import { Carousel } from 'antd';
import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
	const carouselImages = [
		'http://gafurov-prod-test.online/assets/carouselSlides/slide_1.webp',
		'http://gafurov-prod-test.online/assets/carouselSlides/slide_2.webp',
		'http://gafurov-prod-test.online/assets/carouselSlides/slide_3.webp',
	];
	return (
		<section className={styles.HeroSection}>
			<div className={styles.innerBox}>
				<section className={styles.heroSection}>
					<Carousel autoplay dots={false} className={styles.carousel}>
						{carouselImages.map((img, index) => {
							return (
								<div
									className={styles.carouselSlide}
									key={`slide${index}`}
								>
									<div
										className={styles.backgroundImage}
										style={{
											backgroundImage: `url(${img})`,
										}}
									/>
								</div>
							);
						})}
					</Carousel>
				</section>
			</div>
		</section>
	);
};

export default HeroSection;
