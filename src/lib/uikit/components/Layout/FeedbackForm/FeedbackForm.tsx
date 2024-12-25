import React, { useState } from 'react';
import styles from './FeedbackForm.module.scss';
import { Button } from '../../MCButton/MCButton';
import { Checkbox, message } from 'antd';

const FeedbackForm: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();

	const [formName, setFormName] = useState<string>('');
	const [formEmail, setFormEmail] = useState<string>('');
	const [formMessage, setFormMessage] = useState<string>('');
	const [formPersonalAgreement, setFormPersonalAgreement] =
		useState<boolean>(false);

	const handleSubmit = () => {
		if (!formEmail || !formName! || !formPersonalAgreement) {
			messageApi.warning('Заполните все необходимые поля!');
			return;
		}

		const data = {
			name: formName,
			email: formEmail,
			message: formMessage,
		};

		console.log(data);

		setFormMessage('');
		setFormName('');
		setFormEmail('');
		setFormPersonalAgreement(false);

		messageApi.success('Данные успешно отправлены!');
	};

	return (
		<div className={styles.container} id="feedback">
			<div className={styles.innerBox}>
				<div className={styles.textBox}>
					<h3 className={styles.heading}>
						Возникли вопросы? Напишите нам
					</h3>
				</div>
				<div className={styles.formBox}>
					<div className={styles.formInnerBox}>
						<div className={styles.formFields}>
							<div className={styles.leftForm}>
								<input
									type="text"
									name="name"
									placeholder="Имя"
									value={formName}
									className={styles.name}
									onChange={(e) =>
										setFormName(e.target.value)
									}
								/>
								<input
									type="email"
									name="email"
									placeholder="Е-mail"
									value={formEmail}
									className={styles.email}
									onChange={(e) =>
										setFormEmail(e.target.value)
									}
								/>
							</div>
							<div className={styles.rightForm}>
								<textarea
									name="message"
									placeholder="Введите сообщение"
									value={formMessage}
									className={styles.message}
									onChange={(e) =>
										setFormMessage(e.target.value)
									}
								/>
							</div>
						</div>
						<div className={styles.confirm}>
							<Checkbox
								checked={formPersonalAgreement}
								className={styles.check}
								onChange={() =>
									setFormPersonalAgreement((prev) => !prev)
								}
							/>
							<p className={styles.confirmText}>
								Согласие на обработку персональных данных
							</p>
						</div>
						<div className={styles.buttonContainer}>
							<div className={styles.btn}>
								{contextHolder}
								<Button
									type="outlined"
									onClick={handleSubmit}
									size="small"
									className={styles.submitButton}
								>
									Отправить
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackForm;
