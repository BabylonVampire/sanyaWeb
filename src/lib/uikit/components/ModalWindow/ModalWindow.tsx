import { FC, useEffect, useState } from 'react';
import styles from './ModalWindow.module.scss';
import React from 'react';
import { Checkbox, InputNumber, Select, message } from 'antd';
import { countries, firmwares } from './ModalWindow.constants';
import { Button } from '..';
import { TModalTypes } from '../../../types';
import { RxCross2 } from 'react-icons/rx';

const getModal = (
	page: TModalTypes | undefined,
	setShow: React.Dispatch<React.SetStateAction<boolean>>,
	placeholder?: string
) => {
	switch (page) {
		case 'firmware':
			return <FirmwareModal setShow={setShow} />;

		case 'review':
			return <ReviewModal setShow={setShow} />;

		case 'product':
			return <ProductModal placeholder={placeholder} setShow={setShow} />;

		case 'phoneCall':
			return <PhoneCallModal setShow={setShow} />;

		default:
			return <ProductModal setShow={setShow} />;
	}
};

type TProps = {
	type: TModalTypes;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	placeholder?: string;
};

type TModalProps = {
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	placeholder?: string;
};

const ModalWindow: FC<TProps> = ({ type, show, setShow, placeholder }) => {
	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [show]);

	return (
		show && (
			<div className={styles.modalWindowWrapper}>
				<div
					className={styles.background}
					onClick={() => setShow((prev) => !prev)}
				/>
				<div className={styles.modalWindow}>
					<div className={styles.modalBodyInnerBox}>
						<button
							className={styles.exitButton}
							onClick={() => setShow(false)}
						>
							<RxCross2 />
						</button>
						{getModal(type, setShow, placeholder)}
					</div>
				</div>
			</div>
		)
	);
};

const FirmwareModal: FC<TModalProps> = ({ setShow }) => {
	const [messageApi, contextHolder] = message.useMessage();
	const [formName, setFormName] = useState<string>('');
	const [formEmail, setFormEmail] = useState<string>('');
	const [formCountry, setFormCountry] = useState<string | undefined>(
		undefined
	);
	const [formTown, setFormTown] = useState<string>('');
	const [formFirmware, setFormFirmware] = useState<string | undefined>(
		undefined
	);
	const [formFirmwareCount, setFormFirmwareCount] = useState<number | null>(
		1
	);
	const [formPersonalAgreement, setFormPersonalAgreement] =
		useState<boolean>(false);

	const filterOption = (
		input: string,
		option?: { label: string; value: string }
	) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

	const handleSubmit = () => {
		if (
			!formEmail ||
			!formName! ||
			!formPersonalAgreement ||
			!formFirmware ||
			!formCountry ||
			!formTown
		) {
			messageApi.warning('Заполните все необходимые поля!');
			return;
		}

		const data = {
			name: formName,
			email: formEmail,
			country: formCountry,
			town: formTown,
			firmware: formFirmware,
			firmwareCount: formFirmwareCount,
		};

		console.log(data);

		setFormName('');
		setFormEmail('');
		setFormPersonalAgreement(false);
		setFormCountry('');
		setFormTown('');
		setFormFirmware('');
		setFormFirmwareCount(1);

		messageApi.success('Данные успешно отправлены!');
		setShow(false);
	};

	return (
		<div className={styles.formFields}>
			<input
				type="text"
				name="name"
				placeholder="Имя и фамилия"
				value={formName}
				className={styles.input}
				onChange={(e) => setFormName(e.target.value)}
			/>
			<input
				type="email"
				name="email"
				placeholder="Е-mail"
				value={formEmail}
				className={styles.input}
				onChange={(e) => setFormEmail(e.target.value)}
			/>
			<Select
				placeholder="Страна"
				value={formCountry}
				showSearch
				optionFilterProp="children"
				onChange={(e) => setFormCountry(e)}
				filterOption={filterOption}
				options={countries.map((country) => ({
					value: country,
					label: country,
				}))}
			/>
			<input
				name="town"
				placeholder="Город"
				value={formTown}
				className={styles.input}
				onChange={(e) => setFormTown(e.target.value)}
			/>
			<div className={styles.firmwareSettingsBox}>
				<Select
					className={styles.firmwareSelect}
					placeholder="Необходимая прошивка"
					value={formFirmware}
					showSearch
					optionFilterProp="children"
					onChange={(e) => setFormFirmware(e)}
					filterOption={filterOption}
					options={firmwares.map((firmware) => ({
						value: firmware,
						label: firmware,
					}))}
				/>
				<div className={styles.inputNumber}>
					<p className={styles.inputTitle}>Количество прошивок:</p>
					<InputNumber
						min={1}
						defaultValue={1}
						value={formFirmwareCount}
						onChange={(e) => setFormFirmwareCount(e)}
					/>
				</div>
			</div>
			<div className={styles.confirm}>
				<Checkbox
					checked={formPersonalAgreement}
					className={styles.check}
					onChange={() => setFormPersonalAgreement((prev) => !prev)}
				/>
				<p className={styles.confirmText}>
					Согласие на обработку персональных данных
				</p>
			</div>
			{contextHolder}
			<Button shape="circle" type="outlined" onClick={handleSubmit}>
				Отправить
			</Button>
		</div>
	);
};

const PhoneCallModal: FC<TModalProps> = ({ setShow }) => {
	const [messageApi, contextHolder] = message.useMessage();

	const [formName, setFormName] = useState<string>('');
	const [formPhone, setFormPhone] = useState<string>('');
	const [formPersonalAgreement, setFormPersonalAgreement] =
		useState<boolean>(false);

	const handleSubmit = () => {
		if (!formPhone || !formName! || !formPersonalAgreement) {
			messageApi.warning('Заполните все необходимые поля!');
			return;
		}

		const data = {
			name: formName,
			email: formPhone,
		};

		console.log(data);

		setFormName('');
		setFormPhone('');
		setFormPersonalAgreement(false);

		messageApi.success('Данные успешно отправлены!');

		setShow(false);
	};

	return (
		<div className={styles.formFields}>
			<input
				type="text"
				name="name"
				placeholder="Имя и фамилия"
				value={formName}
				className={styles.input}
				onChange={(e) => setFormName(e.target.value)}
			/>
			<input
				type="phone"
				name="phone"
				placeholder="Телефон"
				value={formPhone}
				className={styles.input}
				onChange={(e) => setFormPhone(e.target.value)}
			/>
			<div className={styles.confirm}>
				<Checkbox
					checked={formPersonalAgreement}
					className={styles.check}
					onChange={() => setFormPersonalAgreement((prev) => !prev)}
				/>
				<p className={styles.confirmText}>
					Согласие на обработку персональных данных
				</p>
			</div>
			{contextHolder}
			<Button shape="circle" type="outlined" onClick={handleSubmit}>
				Отправить
			</Button>
		</div>
	);
};

const ReviewModal: FC<TModalProps> = ({ setShow }) => {
	const [messageApi, contextHolder] = message.useMessage();

	const [formName, setFormName] = useState<string>('');
	const [formEmail, setFormEmail] = useState<string>('');
	const [formPersonalAgreement, setFormPersonalAgreement] =
		useState<boolean>(false);
	const [formReview, setFormReview] = useState<string>('');

	const handleSubmit = () => {
		if (!formEmail || !formName! || !formPersonalAgreement || !formReview) {
			messageApi.warning('Заполните все необходимые поля!');
			return;
		}

		const data = {
			name: formName,
			email: formEmail,
			review: formReview,
		};

		console.log(data);

		setFormName('');
		setFormEmail('');
		setFormReview('');
		setFormPersonalAgreement(false);

		messageApi.success('Данные успешно отправлены!');

		setShow(false);
	};

	return (
		<div className={styles.formFields}>
			<input
				type="text"
				name="name"
				placeholder="Имя и фамилия"
				value={formName}
				className={styles.input}
				onChange={(e) => setFormName(e.target.value)}
			/>
			<input
				type="email"
				name="email"
				placeholder="Е-mail"
				value={formEmail}
				className={styles.input}
				onChange={(e) => setFormEmail(e.target.value)}
			/>
			<textarea
				name="review"
				placeholder="Отзыв"
				value={formReview}
				className={styles.textarea}
				onChange={(e) => setFormReview(e.target.value)}
			/>
			<div className={styles.confirm}>
				<Checkbox
					checked={formPersonalAgreement}
					className={styles.check}
					onChange={() => setFormPersonalAgreement((prev) => !prev)}
				/>
				<p className={styles.confirmText}>
					Согласие на обработку персональных данных
				</p>
			</div>
			{contextHolder}
			<Button shape="circle" type="outlined" onClick={handleSubmit}>
				Отправить
			</Button>
		</div>
	);
};

const ProductModal: FC<TModalProps> = ({ placeholder, setShow }) => {
	const [messageApi, contextHolder] = message.useMessage();

	const [formName, setFormName] = useState<string>('');
	const [formEmail, setFormEmail] = useState<string>('');
	const [formPersonalAgreement, setFormPersonalAgreement] =
		useState<boolean>(false);
	const [formProduct, setFormProduct] = useState<string>(placeholder || '');

	const handleSubmit = () => {
		if (
			!formEmail ||
			!formName! ||
			!formPersonalAgreement ||
			!formProduct
		) {
			messageApi.warning('Заполните все необходимые поля!');
			return;
		}

		const data = {
			name: formName,
			email: formEmail,
			review: formProduct,
		};

		console.log(data);

		setFormName('');
		setFormEmail('');
		setFormProduct('');
		setFormPersonalAgreement(false);

		messageApi.success('Данные успешно отправлены!');

		setShow(false);
	};

	return (
		<div className={styles.formFields}>
			<input
				type="text"
				name="name"
				placeholder="Имя и фамилия"
				value={formName}
				className={styles.input}
				onChange={(e) => setFormName(e.target.value)}
			/>
			<input
				type="email"
				name="email"
				placeholder="Е-mail"
				value={formEmail}
				className={styles.input}
				onChange={(e) => setFormEmail(e.target.value)}
			/>
			<textarea
				name="product"
				placeholder="Продукт"
				value={formProduct}
				className={styles.textarea}
				onChange={(e) => setFormProduct(e.target.value)}
			/>
			<div className={styles.confirm}>
				<Checkbox
					checked={formPersonalAgreement}
					className={styles.check}
					onChange={() => setFormPersonalAgreement((prev) => !prev)}
				/>
				<p className={styles.confirmText}>
					Согласие на обработку персональных данных
				</p>
			</div>
			{contextHolder}
			<Button shape="circle" type="outlined" onClick={handleSubmit}>
				Отправить
			</Button>
		</div>
	);
};

export default ModalWindow;
