import React from 'react';
import { ReactComponent as TitleImg } from '../../assets/images/home.svg';

import style from './Title.module.css';

const Title = () => (
	<section className={style.section_title_wrap}>
		<h1 className={style.title_head}>The Rick and Morty</h1>
		<div className={style.title_img_wrap}>
			<TitleImg className={style.title_img} />
		</div>
	</section>
);

export default Title;
