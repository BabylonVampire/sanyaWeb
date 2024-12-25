import React, { FC } from 'react';
import ContactCard from './ContactCard/ContactCard';
import styles from './ContactsPage.module.scss';
import { Helmet } from 'react-helmet';

const Address: FC = () => {
	return (
		<div className={styles.contactsPage}>
			<Helmet>
				<title>Контакты</title>
				<meta name="description" content="" />
			</Helmet>
			<div className={styles.innerBox}>
				<div className={styles.address}>
					<div className={styles.cards}>
						<ContactCard
							coords={[22.544464, 114.083521]}
							zoom={17}
							shortAddress="Китай, г. Шэньчжэнь"
							fullAddress={
								<>
									<p style={{ fontSize: '20px' }}>
										Адрес: China, Guangdong province,
										Shenzhen City, district Futian, Shennan
										str., SEG PLAZA
									</p>
									<p style={{ fontSize: '20px' }}>
										Адрес на китайском: 赛格广场
									</p>
								</>
							}
						/>
						<ContactCard
							coords={[55.700877, 37.731344]}
							zoom={17}
							shortAddress="Москва (пункт выдачи заказов)"
							fullAddress={
								<p style={{ fontSize: '20px' }}>
									Россия, Москва, Люблинская ул., 10, стр. 1-6
								</p>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Address;
