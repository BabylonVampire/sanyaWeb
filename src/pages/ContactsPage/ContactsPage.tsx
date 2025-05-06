import React, { FC } from 'react';
import ContactCard from './ContactCard/ContactCard';
import styles from './ContactsPage.module.scss';
import { Helmet } from 'react-helmet';
import { SchemaMarkup } from '../../lib/uikit/components/SchemaMarkup/SchemaMarkup';

const Address: FC = () => {
	return (
		<div className={styles.contactsPage}>
			<Helmet>
				<title>Контакты</title>
				<meta
					name="description"
					content="Контактная информация BRISTAN WERO. Телефон, email, адрес производства и розничных магазинов."
				/>
				<SchemaMarkup pageType="Organization" />
			</Helmet>
			<div className={styles.innerBox}>
				<div
					className={`${styles.address} wow animate__animated animate__fadeIn`}
				>
					<div className={styles.cards}>
						<ContactCard
							coords={[55.573144, 37.609137]}
							zoom={17}
							shortAddress="Москва (пункт выдачи заказов)"
							fullAddress={
								<p style={{ fontSize: '20px' }}>
									Варшавское шоссе 21-й км, с26
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
