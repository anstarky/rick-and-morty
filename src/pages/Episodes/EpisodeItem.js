import React from 'react';

import PropTypes from 'prop-types';

import style from './Episodes.module.css';

const EpisodeItem = ({ episode }) => (
	<div className={style.episode_card}>
		<div className={style.card_desc}>
			<h3 className={style.card_title}>{episode.name}</h3>
			<div className={style.card_about}>
				<p>
					<span className={style.card_tag}>Air Date: </span>
					<span>{episode.air_date}</span>
				</p>
				<p>
					<span className={style.card_tag}>Episode: </span>
					<span>{episode.episode}</span>
				</p>
			</div>
		</div>
	</div>
);

EpisodeItem.defaultProps = {
	episode: {},
};

EpisodeItem.propTypes = {
	episode: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		air_date: PropTypes.string,
		episode: PropTypes.string,
	}),
};

export default EpisodeItem;
