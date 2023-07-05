import React from 'react';
import { RecoilRoot } from 'recoil';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};

export default RootLayout;
