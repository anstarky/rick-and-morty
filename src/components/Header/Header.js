import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

import { ReactComponent as LogoImg } from '../../assets/images/logo.svg';
import Navigation from '../Navigation';
import style from './Header.module.css';

const Header = () => (
	<header className={style.page_header}>
		<NavLink exact to={routes.HOME}>
			<LogoImg className={style.logo} />
		</NavLink>

		<Navigation type="header" />
	</header>
);

export default Header;
