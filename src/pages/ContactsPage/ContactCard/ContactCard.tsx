import { FC } from 'react';
import styles from './ContactCard.module.scss';
import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';

type TProps = {
	coords: number[];
	zoom: number;
	shortAddress: string;
	fullAddress: string | React.ReactNode;
};

const ContactCard: FC<TProps> = ({
	coords,
	zoom,
	shortAddress,
	fullAddress,
}) => {
	return (
		<div className={styles.contactCard}>
			<div className={styles.map}>
				<div className={styles.mapBox}>
					<YMaps>
						<Map
							width={'100%'}
							height={'300px'}
							defaultState={{
								center: coords,
								zoom: zoom,
							}}
						/>
					</YMaps>
				</div>
			</div>
			<div className={styles.textBlock}>
				<div className={styles.text}>
					<p className={styles.shortAddress}>{shortAddress}</p>
					<div>{fullAddress}</div>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
