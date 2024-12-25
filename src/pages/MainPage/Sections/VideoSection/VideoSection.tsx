import styles from './VideoSection.module.scss';
import React, { useState } from 'react';

const VideoSection = () => {
	const videos = [
		'https://www.youtube-nocookie.com/embed/3Uuyl1GzUlY?si=XwRulAa67Ok65Qhp&amp;controls=0',
		'https://www.youtube-nocookie.com/embed/vrTT9cM4UMA?si=uKm9gqt7nTeFWtPj&amp;controls=0',
		'https://www.youtube-nocookie.com/embed/ZSobr1EXGpA?si=k_Hzv2Jnx5tdRvQG&amp;controls=0',
	];

	const [currentVideo, setCurrentVideo] = useState<string>(videos[0]);
	return (
		<section className={styles.videoSection}>
			<div className={styles.topBox}>
				<div className={styles.contentBox}>
					<h2 className={styles.heading}>Наши новые видео</h2>
					<p className={styles.description}>
						Какой асик майнер выбрать в апреле 2024 года?
					</p>
				</div>
				<div className={styles.videoContainer}>
					<iframe
						className={styles.iframeVideo}
						src={currentVideo}
						frameBorder="0"
					/>
				</div>
			</div>
			<div className={styles.bottomBox}>
				<div className={styles.videoCarousel}>
					{videos.map((video, index) => (
						<button
							key={video + index}
							className={styles.videoBtn}
							onClick={() => setCurrentVideo(video)}
						>
							<iframe
								className={styles.iframeVideoItem}
								src={video}
								frameBorder="0"
							/>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default VideoSection;
