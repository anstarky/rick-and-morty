import React from 'react';

import Navigation from '../Navigation';
import style from './Footer.module.css';

const Footer = () => (
	<footer className={style.page_footer}>
		<Navigation type="footer" />
		<div className={style.copy_wrap}>
			<span>
				❮❯ by{' '}
				<a
					href="mailto:nita.kovalchuk@gmail.com"
					className={style.copy_dev_link}
				>
					Anita Kovalchuk
				</a>{' '}
			</span>
			{new Date().getFullYear()}
		</div>
	</footer>
);

export default Footer;
