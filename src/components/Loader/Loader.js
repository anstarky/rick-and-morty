import React from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as LoaderImg } from '../../assets/images/loader.svg';

import style from './Loader.module.css';

const LOADER_ROOT = document.querySelector('#loader-root');

const Loader = () =>
	createPortal(
		<div className={style.loader_wrap}>
			<LoaderImg className={style.loader_img} />
		</div>,
		LOADER_ROOT,
	);

export default Loader;
