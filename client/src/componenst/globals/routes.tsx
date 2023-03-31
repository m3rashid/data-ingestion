import React from 'react';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';

// import { IAuth } from 'atoms/auth';
import Home from '../../pages/home';
import About from '../../pages/about';
import ErrorPage from '../../pages/404';

export interface IRoute {
	label: string;
	link: string;
	Component: React.FC;
	permissions: Array<string>;
	icon: React.ReactNode;

	props?: any;
	showInNav?: boolean;
	role?: Array<string>;
	nestedLinks?: Array<{
		label: string;
		link: string;
		Component: React.FC;
		icon: React.ReactNode;
	}>;
	initiallyOpened?: boolean; // sidebar dropdown state
	dividerBottom?: boolean;
}

// export const checkAccess = (auth: IAuth, route: IRoute) => {
// 	if (!auth.isLoggedIn) return false;
// 	if (!route.role || route.role.includes('*')) return true;
// 	if (auth.user?.userRole === 'ADMIN') return true;
// 	const contains = route.role.some((role) => auth.user?.permissions.includes(role));
// 	return contains;
// };

const routes: Array<IRoute> = [
	{
		icon: <HomeOutlined />,
		label: 'home',
		link: '/',
		Component: Home,
		permissions: [],
		dividerBottom: true,
	},
	{
		icon: <InfoCircleOutlined />,
		label: 'about',
		link: '/about',
		Component: About,
		permissions: [],
	},
	{
		icon: <InfoCircleOutlined />,
		label: '',
		link: '*',
		Component: ErrorPage,
		permissions: [],
		showInNav: false,
	},
];

export default routes;
