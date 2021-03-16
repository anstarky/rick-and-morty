import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import routes from '../../routes';

import style from './Navigation.module.css';

const Navigation = ({ type }) => (
	<nav className={style.nav}>
		<ul className={style.nav_menu}>
			<li className={style.nav_item}>
				<NavLink
					exact
					to={routes.CHARACTERS}
					className={
						type === 'header' ? style.nav_header : style.nav_footer
					}
					activeClassName={style.nav_link_active}
				>
					Characters
				</NavLink>
			</li>
			<li className={style.nav_item}>
				<NavLink
					to={routes.EPISODES}
					className={
						type === 'header' ? style.nav_header : style.nav_footer
					}
					activeClassName={style.nav_link_active}
				>
					Episode
				</NavLink>
			</li>
			<li className={style.nav_item}>
				<NavLink
					to={routes.LOCATIONS}
					className={
						type === 'header' ? style.nav_header : style.nav_footer
					}
					activeClassName={style.nav_link_active}
				>
					Locations
				</NavLink>
			</li>
			<li className={style.nav_item}>
				<NavLink
					to={routes.WATCHLIST}
					className={
						type === 'header' ? style.nav_header : style.nav_footer
					}
					activeClassName={style.nav_link_active}
				>
					My Watch List
				</NavLink>
			</li>
		</ul>
	</nav>
);

Navigation.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Navigation;
