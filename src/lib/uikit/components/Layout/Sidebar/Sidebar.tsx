import { Drawer, DrawerProps } from 'antd';
import React, { useState } from 'react';
import { HiOutlineQueueList } from 'react-icons/hi2';
import '../../../../theme/theme.scss';
import { Button } from '../../MCButton/MCButton';
import { PagesBlock } from '../PagesBlock/PagesBlock';
import styles from './Sidebar.module.scss';
import { FaPhone, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import ModalWindow from '../../ModalWindow/ModalWindow';
import { PHONE_LINK, TG_LINK, WA_LINK } from '../Layout.constants';

export const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const [placement] = useState<DrawerProps['placement']>('right');
	const [showModal, setShowModal] = useState<boolean>(false);

	const toggleDrawer = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className={styles.container}>
			<ModalWindow
				type="phoneCall"
				show={showModal}
				setShow={setShowModal}
			/>
			<div className={styles.header}>
				<div className={styles.head}>
					<a className={styles.mainLogo} href="/" />
				</div>
				<div className={styles.contentBox}>
					<a href="" className={styles.phoneButton}>
						<FaPhone />
					</a>
					<button onClick={toggleDrawer} className={styles.btn1}>
						<HiOutlineQueueList />
					</button>
				</div>
			</div>
			<br />

			<Drawer
				title={
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
				}
				placement={placement}
				width={500}
				onClose={toggleDrawer}
				open={open}
			>
				<div className={styles.contacts}>
					<PagesBlock className={styles.pages} />

					<div className={styles.sideBarFooter}>
						<div className={styles.linkBox}>
							<a href={TG_LINK} className={styles.link}>
								<FaTelegram />
							</a>
							<a href={WA_LINK} className={styles.link}>
								<FaWhatsapp />
							</a>
							<a href={PHONE_LINK} className={styles.link}>
								<FaPhone />
							</a>
						</div>
						<Button
							shape="circle"
							onClick={() => setShowModal(true)}
						>
							Заказать звонок
						</Button>
						{/* <Button shape="circle" type="outlined">
							Прайс лист
						</Button> */}
					</div>
				</div>
			</Drawer>
		</div>
	);
};
