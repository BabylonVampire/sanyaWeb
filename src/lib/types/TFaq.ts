import React from 'react';

export type TFaq = {
	title: string;
	text: string;
};

export const panelStyle: React.CSSProperties = {
	marginBottom: 15,
	borderRadius: '5px',
	border: 'solid 1px #dedede',
	borderBottom: 'none',
	backgroundColor: 'var(--color-main)',
	fontFamily: 'var(--font-family-regular)',
	color: 'var(--textColorSecondary)',
	letterSpacing: '1px',
	fontSize: '20px',
	boxShadow: 'var(--box-shadow)',
};
