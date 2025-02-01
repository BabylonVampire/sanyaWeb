import React, { useState } from 'react';
import { Button } from '../../MCButton/MCButton';
import ModalWindow from '../../ModalWindow/ModalWindow';
import { PagesBlock } from '../PagesBlock/PagesBlock';
import styles from './Header.module.scss';

export const Header = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<div className={styles.container}>
			<ModalWindow
				type="phoneCall"
				show={showModal}
				setShow={setShowModal}
			/>
			<div className={styles.mainBody}>
				<div className={styles.header}>
					<a className={styles.logoText} href={`/`}>
						<div className={styles.logo} />
						<div className={styles.logoTextBox}>
							<div className={styles.topLogoText}>
								Bristan Wero
							</div>
							<p className={styles.bottomLogoText}>
								Italian leather
							</p>
						</div>
					</a>
				</div>

				<div className={styles.contacts}>
					<PagesBlock />

					<div className={styles.buttonBox}>
						<Button
							size="small"
							shape="circle"
							className={styles.orderButton}
							onClick={() => setShowModal(true)}
						>
							Заказать звонок
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
//
