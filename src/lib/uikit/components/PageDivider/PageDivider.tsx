import React, { FC, PropsWithChildren } from 'react';
import styles from './PageDivider.module.scss';

type TProps = {
	className?: string;
};

const PageDivider: FC<TProps & PropsWithChildren> = ({
	children,
	className,
}) => {
	return (
		<div className={`${styles.pageDivider} ${className}`}>{children}</div>
	);
};

export default PageDivider;
