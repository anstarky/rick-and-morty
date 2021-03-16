import React from 'react';

import PropTypes from 'prop-types';

import style from './Locations.module.css';

const LocationItem = ({ location }) => (
	<div className={style.location_card}>
		<div className={style.card_desc}>
			<h3 className={style.card_title}>{location.name}</h3>
			<div className={style.card_about}>
				<p>
					<span className={style.card_tag}>Type: </span>
					<span>{location.type}</span>
				</p>
				<p>
					<span className={style.card_tag}>Dimension: </span>
					<span>{location.dimension}</span>
				</p>
			</div>
		</div>
	</div>
);

LocationItem.defaultProps = {
	location: {},
};

LocationItem.propTypes = {
	location: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		type: PropTypes.string,
		dimension: PropTypes.string,
	}),
};

export default LocationItem;
