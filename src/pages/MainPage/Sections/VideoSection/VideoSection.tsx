import styles from './VideoSection.module.scss';
import React, { useState } from 'react';

const VideoSection = () => {
	const videos = [
		'https://rutube.ru/play/embed/25910b7f056ca2068474a14c4b52a5e4/?p=Dlj1kjpkqe5pmcqOOQNlXQ',
		'https://rutube.ru/play/embed/07de6b0b93a9d63e442ac758b7ecaadc/?p=6U2rCLm0FXz8nkZOMy-sTQ',
		'https://rutube.ru/play/embed/f86d1574adaa0e4a524af36dcceb0049/?p=yyrEz2rIdxXjHaMBhTT8NQ',
		//
		'https://rutube.ru/play/embed/3f1c788aa7302775aa6fe0172a1a86dd/?p=EZpYZJXVbY99qiUCfslX-g',
		'https://rutube.ru/play/embed/ebdde4f9efe23bc0ff4fac8a0101f9ce/?p=EDMMT3JaVNzjCgz77ICI6w',
	];

	const [currentVideo, setCurrentVideo] = useState<string>(videos[0]);
	return (
		<section className={styles.videoSection}>
			<div className={styles.topBox}>
				<div className={styles.contentBox}>
					<h2 className={styles.heading}>Наши новые видео</h2>
					<p className={styles.description}>
						Актуальные видео с нашего канала!
					</p>
				</div>
				<div className={styles.videoContainer}>
					<iframe
						className={styles.iframeVideo}
						src={currentVideo}
						loading="lazy"
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
								allowFullScreen={false}
							/>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default VideoSection;
