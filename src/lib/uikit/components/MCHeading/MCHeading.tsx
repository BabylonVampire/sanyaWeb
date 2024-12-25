import { FC, PropsWithChildren } from 'react';
import styles from './MCHeading.module.scss';
import React from 'react';

export const MCHeading: FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles.MCHeading}>{children}</div>;
};
