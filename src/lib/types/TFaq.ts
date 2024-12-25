import React from 'react';

export type TFaq = {
	title: string;
	text: string;
};

export const panelStyle: React.CSSProperties = {
	marginBottom: 15,
	borderRadius: '5px',
	border: 'none',
	borderBottom: 'none',
	backgroundColor: '#fff',
	fontFamily: 'var(--font-family-regular)',
	color: 'var(--textColorSecondary)',
	letterSpacing: '1px',
	fontSize: '20px',
	background: '#1C1C1C80',
	boxShadow: '0px 0px 5px 0px #000000BF inset',
};
